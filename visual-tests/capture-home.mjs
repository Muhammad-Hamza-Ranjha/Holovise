import fs from "node:fs";
import { chromium } from "playwright";

const baseURL = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:3100";
const viewports = [
  [390, 844], [412, 915], [768, 1024], [1024, 768],
  [1280, 720], [1366, 768], [1440, 900], [1920, 1080],
];

async function waitForPage(page) {
  await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;caret-color:transparent!important;scroll-behavior:auto!important;transition:none!important}" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const image of document.images) image.loading = "eager";
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    await Promise.all([...document.images].map((image) => image.decode().catch(() => undefined)));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
}

const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--font-render-hinting=none", "--force-device-scale-factor=1"] });
const results = [];

for (const theme of ["light", "dark"]) {
  for (const [width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, colorScheme: theme, reducedMotion: "reduce" });
    await context.addInitScript((selectedTheme) => localStorage.setItem("theme", selectedTheme), theme);
    const page = await context.newPage();
    const consoleErrors = [];
    const failedRequests = [];
    const httpErrors = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    page.on("requestfailed", (request) => failedRequests.push(`${request.url()}: ${request.failure()?.errorText ?? "unknown"}`));
    page.on("response", (response) => { if (response.status() >= 400) httpErrors.push(`${response.status()} ${response.url()}`); });
    await page.goto(baseURL, { waitUntil: "networkidle", timeout: 60_000 });
    await waitForPage(page);
    const diagnostics = await page.evaluate(() => ({
      viewport: [window.innerWidth, window.innerHeight],
      document: [document.documentElement.scrollWidth, document.documentElement.scrollHeight],
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      incompleteImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.currentSrc || image.src),
    }));
    const directory = `visual-tests/current/home/${theme}`;
    fs.mkdirSync(directory, { recursive: true });
    await page.screenshot({ path: `${directory}/${width}x${height}.png`, fullPage: true, animations: "disabled", caret: "hide", scale: "css" });
    results.push({ theme, width, height, diagnostics, consoleErrors, failedRequests, httpErrors });
    await context.close();
  }
}

await browser.close();
fs.mkdirSync("visual-tests/reports", { recursive: true });
fs.writeFileSync("visual-tests/reports/capture.json", `${JSON.stringify(results, null, 2)}\n`);
console.log(JSON.stringify(results, null, 2));

if (results.some((result) => result.diagnostics.horizontalOverflow || result.diagnostics.incompleteImages.length || result.consoleErrors.length || result.failedRequests.length || result.httpErrors.length)) {
  process.exitCode = 1;
}
