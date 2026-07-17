import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";

const target = process.argv[2];
const baseURL = process.argv[3];
const filter = new Set((process.argv[4] ?? "").split(",").filter(Boolean));

if (!target || !baseURL) {
  throw new Error("Usage: node visual-tests/deployment-audit.mjs <live|local> <base-url>");
}

const viewports = [
  { width: 1280, height: 800, group: "desktop" },
  { width: 1366, height: 768, group: "desktop" },
  { width: 1440, height: 900, group: "desktop" },
  { width: 1600, height: 900, group: "desktop" },
  { width: 1920, height: 1080, group: "desktop" },
  { width: 2560, height: 1440, group: "desktop" },
  { width: 768, height: 1024, group: "tablet" },
  { width: 820, height: 1180, group: "tablet" },
  { width: 1024, height: 768, group: "tablet" },
  { width: 320, height: 568, group: "mobile" },
  { width: 360, height: 800, group: "mobile" },
  { width: 375, height: 812, group: "mobile" },
  { width: 390, height: 844, group: "mobile" },
  { width: 414, height: 896, group: "mobile" },
  { width: 430, height: 932, group: "mobile" },
];

const themes = ["light", "dark"];
const outputRoot = path.join("visual-tests", "deployment-audit", target);
const reportPath = path.join(outputRoot, "report.json");
fs.mkdirSync(outputRoot, { recursive: true });

function compactHeaders(headers) {
  const keep = [
    "age",
    "cache-control",
    "content-type",
    "etag",
    "server",
    "x-matched-path",
    "x-nextjs-prerender",
    "x-vercel-cache",
    "x-vercel-id",
  ];
  return Object.fromEntries(keep.filter((key) => headers[key] !== undefined).map((key) => [key, headers[key]]));
}

async function stabilize(page) {
  await page.addStyleTag({
    content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important;scroll-behavior:auto!important}",
  });

  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const image of document.images) image.loading = "eager";

    const pageHeight = document.documentElement.scrollHeight;
    const step = Math.max(320, Math.floor(window.innerHeight * 0.85));
    for (let y = 0; y <= pageHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 45));
    }
    window.scrollTo(0, pageHeight);
    await new Promise((resolve) => setTimeout(resolve, 250));
    window.scrollTo(0, 0);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

async function waitForExpectedLayout(page, viewport, theme) {
  const expectedBackground = theme === "light" ? "rgb(234, 240, 254)" : "rgb(8, 13, 25)";
  await page.waitForFunction(
    ({ expectedBackground, theme, desktop }) => {
      const main = document.querySelector("main");
      if (!(main instanceof HTMLElement)) return false;
      const layoutReady = desktop
        ? Boolean(document.querySelector('[data-responsive-canvas][data-canvas-mode="responsive"]'))
        : main.matches('[data-home-layout="responsive"]');
      return (
        layoutReady &&
        document.documentElement.classList.contains(theme) &&
        getComputedStyle(main).backgroundColor === expectedBackground
      );
    },
    { expectedBackground, theme, desktop: viewport.width >= 1440 },
    { timeout: 45_000 },
  );
}

async function captureFullPage(page, screenshotPath) {
  const dimensions = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
    viewportHeight: window.innerHeight,
  }));

  if (dimensions.height <= 16_000) {
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      animations: "disabled",
      caret: "hide",
      scale: "css",
    });
    return;
  }

  const maxScroll = Math.max(0, dimensions.height - dimensions.viewportHeight);
  const positions = [];
  for (let y = 0; y < maxScroll; y += dimensions.viewportHeight) positions.push(y);
  if (positions.at(-1) !== maxScroll) positions.push(maxScroll);

  const tiles = [];
  for (const y of positions) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const actualY = await page.evaluate(() => Math.round(window.scrollY));
    const input = await page.screenshot({ fullPage: false, animations: "disabled", caret: "hide", scale: "css" });
    tiles.push({ input, left: 0, top: actualY });
  }
  await sharp({
    create: {
      width: dimensions.width,
      height: dimensions.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite(tiles)
    .png()
    .toFile(screenshotPath);
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function collectDiagnostics(page, viewport, theme, response) {
  return page.evaluate(
    ({ viewport, theme, responseHeaders, responseStatus }) => {
      const describe = (element) => {
        if (!(element instanceof HTMLElement)) return null;
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id || null,
          className: typeof element.className === "string" ? element.className : null,
          rect: {
            left: Number(rect.left.toFixed(2)),
            right: Number(rect.right.toFixed(2)),
            width: Number(rect.width.toFixed(2)),
            height: Number(rect.height.toFixed(2)),
          },
          style: {
            display: style.display,
            position: style.position,
            width: style.width,
            minWidth: style.minWidth,
            maxWidth: style.maxWidth,
            marginLeft: style.marginLeft,
            marginRight: style.marginRight,
            paddingLeft: style.paddingLeft,
            paddingRight: style.paddingRight,
            overflowX: style.overflowX,
            transform: style.transform,
            transformOrigin: style.transformOrigin,
            zoom: style.zoom,
            backgroundColor: style.backgroundColor,
            backgroundImage: style.backgroundImage,
          },
        };
      };

      const fixedWidthCandidates = [...document.querySelectorAll("body *")]
        .filter((element) => element instanceof HTMLElement)
        .map((element) => ({ element, style: getComputedStyle(element), rect: element.getBoundingClientRect() }))
        .filter(({ style, rect }) =>
          Math.abs(rect.width - 1440) < 0.5 ||
          style.width === "1440px" ||
          style.minWidth === "1440px" ||
          style.maxWidth === "1440px" ||
          style.width === "fit-content" ||
          style.display === String.fromCharCode(105, 110, 108, 105, 110, 101, 45, 98, 108, 111, 99, 107) ||
          (style.transform !== "none" && style.transform.includes("matrix")),
        )
        .slice(0, 80)
        .map(({ element }) => describe(element));

      const fullBleed = [...document.querySelectorAll("[data-home-full-bleed]")].map(describe);
      const sections = [...document.querySelectorAll("main > section, main > footer, main header, [data-home-full-bleed]")].map(describe);
      const images = [...document.images];
      const assets = performance
        .getEntriesByType("resource")
        .map((entry) => entry.name)
        .filter((url) => url.includes("/_next/") || /\.(?:woff2?|png|jpe?g|webp|svg|gif)(?:\?|$)/i.test(url));

      return {
        theme,
        viewport,
        responseStatus,
        responseHeaders,
        url: location.href,
        title: document.title,
        htmlClass: document.documentElement.className,
        document: {
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          scrollHeight: document.documentElement.scrollHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        },
        hierarchy: {
          html: describe(document.documentElement),
          body: describe(document.body),
          bodyChildren: [...document.body.children].map(describe),
          main: describe(document.querySelector("main")),
          homepageRoot: describe(document.querySelector("[data-home-layout], [data-responsive-canvas]")),
          canvas: describe(document.querySelector("[data-responsive-canvas]")),
          stage: describe(document.querySelector("[data-figma-node]")),
          topBar: describe(document.querySelector("header > div:first-child, [data-home-full-bleed]")),
          header: describe(document.querySelector("header, [data-home-full-bleed]:nth-of-type(2)")),
          hero: describe(document.querySelector("main > section:first-of-type, [data-home-full-bleed]")),
          footer: describe(document.querySelector("footer, [data-home-full-bleed]:last-of-type")),
        },
        fullBleed,
        sections,
        fixedWidthCandidates,
        images: {
          count: images.length,
          incomplete: images
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.currentSrc || image.src),
        },
        fonts: {
          status: document.fonts.status,
          soraReady: document.fonts.check('16px "Sora"'),
        },
        assets,
      };
    },
    {
      viewport,
      theme,
      responseHeaders: compactHeaders(response?.headers() ?? {}),
      responseStatus: response?.status() ?? null,
    },
  );
}

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--font-render-hinting=none", "--force-device-scale-factor=1"],
});

let results = [];
if (filter.size && fs.existsSync(reportPath)) {
  const previous = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  results = previous.results.filter(
    (result) => !filter.has(`${result.theme}:${result.viewport.width}x${result.viewport.height}`),
  );
}

for (const theme of themes) {
  for (const viewport of viewports) {
    const caseKey = `${theme}:${viewport.width}x${viewport.height}`;
    if (filter.size && !filter.has(caseKey)) continue;
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      colorScheme: theme,
      reducedMotion: "reduce",
    });
    await context.addInitScript((selectedTheme) => localStorage.setItem("theme", selectedTheme), theme);

    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];
    const httpErrors = [];

    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("requestfailed", (request) => failedRequests.push(`${request.url()}: ${request.failure()?.errorText ?? "unknown"}`));
    page.on("response", (response) => {
      if (response.status() >= 400) httpErrors.push(`${response.status()} ${response.url()}`);
    });

    let response;
    let mainReady = false;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      response = await page.goto(baseURL, { waitUntil: "domcontentloaded", timeout: 90_000 });
      await page.waitForLoadState("load", { timeout: 30_000 }).catch(() => undefined);
      mainReady = await page.locator("main").isVisible().catch(() => false);
      if (mainReady) break;
      await page.waitForTimeout(attempt * 750);
    }
    if (!mainReady) throw new Error(`Application main element was not visible after 3 attempts at ${viewport.width}x${viewport.height} ${theme}`);
    await waitForExpectedLayout(page, viewport, theme);
    await page.waitForTimeout(750);
    await stabilize(page);

    const directory = path.join(outputRoot, theme);
    fs.mkdirSync(directory, { recursive: true });
    const screenshotPath = path.join(directory, `${viewport.width}x${viewport.height}.png`);
    await captureFullPage(page, screenshotPath);

    const diagnostics = await collectDiagnostics(page, viewport, theme, response);
    results.push({
      target,
      theme,
      viewport,
      screenshotPath: screenshotPath.replaceAll("\\", "/"),
      diagnostics,
      consoleErrors,
      pageErrors,
      failedRequests,
      httpErrors,
    });
    fs.writeFileSync(reportPath, `${JSON.stringify({ target, baseURL, capturedAt: new Date().toISOString(), partial: true, results }, null, 2)}\n`);

    console.log(`${target} ${theme} ${viewport.width}x${viewport.height}`);
    await context.close();
  }
}

await browser.close();

for (const theme of themes) {
  for (const [group, width, height] of [
    ["desktop", 1440, 900],
    ["tablet", 820, 1180],
    ["mobile", 390, 844],
  ]) {
    fs.copyFileSync(
      path.join(outputRoot, theme, `${width}x${height}.png`),
      path.join(outputRoot, `homepage-${group}-${theme}.png`),
    );
  }
}

fs.writeFileSync(reportPath, `${JSON.stringify({ target, baseURL, capturedAt: new Date().toISOString(), results }, null, 2)}\n`);

const summary = results.map((result) => ({
  theme: result.theme,
  viewport: `${result.viewport.width}x${result.viewport.height}`,
  overflow: result.diagnostics.document.horizontalOverflow,
  documentWidth: result.diagnostics.document.scrollWidth,
  incompleteImages: result.diagnostics.images.incomplete.length,
  consoleErrors: result.consoleErrors.length,
  pageErrors: result.pageErrors.length,
  failedRequests: result.failedRequests.length,
  httpErrors: result.httpErrors.length,
  fullBleedCount: result.diagnostics.fullBleed.length,
}));

console.log(JSON.stringify(summary, null, 2));
console.log(`Report: ${reportPath}`);

if (
  results.some(
    (result) =>
      result.diagnostics.document.horizontalOverflow ||
      result.consoleErrors.length ||
      result.pageErrors.length ||
      result.failedRequests.length ||
      result.httpErrors.length,
  )
) {
  process.exitCode = 1;
}
