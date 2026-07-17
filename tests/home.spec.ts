import { expect, test, type Page } from "playwright/test";

const viewports = [
  { width: 390, height: 844 },
  { width: 412, height: 915 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 720 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
] as const;

async function prepare(page: Page, theme: "light" | "dark", width: number, height: number) {
  await page.setViewportSize({ width, height });
  await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
  await page.addInitScript((selectedTheme) => localStorage.setItem("theme", selectedTheme), theme);
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForFunction(
    ({ expectedTheme, desktop }) => {
      const main = document.querySelector("main");
      if (!(main instanceof HTMLElement)) return false;
      const layoutReady = desktop
        ? Boolean(document.querySelector('[data-responsive-canvas][data-canvas-mode="responsive"]'))
        : main.matches('[data-home-layout="responsive"]');
      return layoutReady && document.documentElement.classList.contains(expectedTheme);
    },
    { expectedTheme: theme, desktop: width >= 1440 },
  );
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

for (const theme of ["light", "dark"] as const) {
  for (const viewport of viewports) {
    test(`${theme} homepage ${viewport.width}x${viewport.height} is complete and overflow-free`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];
      const httpErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("requestfailed", (request) => failedRequests.push(`${request.url()}: ${request.failure()?.errorText ?? "unknown"}`));
      page.on("response", (response) => {
        if (response.status() >= 400) httpErrors.push(`${response.status()} ${response.url()}`);
      });

      await prepare(page, theme, viewport.width, viewport.height);

      const diagnostics = await page.evaluate(() => ({
        htmlClass: document.documentElement.className,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        incompleteImages: [...document.images]
          .filter((image) => {
            const bounds = image.getBoundingClientRect();
            return bounds.right > 0 && bounds.left < window.innerWidth && bounds.bottom > 0 && bounds.top < window.innerHeight;
          })
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
      }));

      expect(diagnostics.htmlClass).toContain(theme);
      expect(diagnostics.horizontalOverflow).toBe(false);
      expect(diagnostics.incompleteImages).toEqual([]);
      expect(consoleErrors).toEqual([]);
      expect(failedRequests).toEqual([]);
      expect(httpErrors).toEqual([]);

      for (const heading of [
        "Worried about project delays",
        "Industries we empower",
        "Check out what our clients are saying",
        "Our Step-by-Step Approach",
        "Find Us a Great Fit",
        "What's happening in IT",
        "Let's Make IT",
      ]) {
        await expect(page.getByText(heading, { exact: false }).first()).toBeVisible();
      }

      if (viewport.width < 1440) {
        await expect(page.locator('[data-home-layout="responsive"]')).toHaveCount(1);
        await expect(page.locator("input[name=name]")).toHaveCount(1);
        await expect(page.locator("textarea[name=message]")).toHaveCount(1);
      } else {
        const canvas = page.locator('[data-responsive-canvas][data-canvas-mode="responsive"]');
        await expect(canvas).toHaveAttribute("data-canvas-scale", "1");
        const transform = await page.locator("[data-figma-node]").evaluate((element) => (element as HTMLElement).style.transform);
        expect(transform).toBe("");

        const desktopGeometry = await page.evaluate(() => {
          const canvasElement = document.querySelector<HTMLElement>('[data-responsive-canvas][data-canvas-mode="responsive"]');
          const stageElement = document.querySelector<HTMLElement>("[data-figma-node]");
          const fullBleedElements = [...document.querySelectorAll<HTMLElement>("[data-home-full-bleed]")];
          const rect = (element: HTMLElement | null) => {
            const bounds = element?.getBoundingClientRect();
            return bounds ? { left: bounds.left, right: bounds.right, width: bounds.width } : null;
          };

          return {
            canvas: rect(canvasElement),
            stage: rect(stageElement),
            fullBleed: fullBleedElements.map(rect),
          };
        });

        expect(desktopGeometry.canvas?.left).toBeCloseTo(0, 0);
        expect(desktopGeometry.canvas?.width).toBeCloseTo(viewport.width, 0);
        expect(desktopGeometry.stage?.width).toBeCloseTo(1440, 0);
        expect(desktopGeometry.stage?.left).toBeCloseTo((viewport.width - 1440) / 2, 0);
        expect(desktopGeometry.fullBleed.length).toBeGreaterThanOrEqual(5);
        for (const bounds of desktopGeometry.fullBleed) {
          expect(bounds?.left).toBeCloseTo(0, 0);
          expect(bounds?.right).toBeCloseTo(viewport.width, 0);
        }
      }
    });
  }
}

test("desktop service tabs and theme toggle remain interactive", async ({ page }) => {
  await prepare(page, "dark", 1440, 900);
  const tabs = page.locator("[data-home-services-tabs]");
  await tabs.getByRole("tab", { name: "Product Consulting" }).click();
  await expect(tabs).toHaveAttribute("data-active-tab", "product");
  await expect(tabs.getByText("MVP Development", { exact: true })).toBeVisible();

  const languageMenu = page.locator("[data-language-menu]");
  await languageMenu.locator("[data-language-toggle]").click();
  await languageMenu.getByRole("menuitemradio", { name: "Deutsch" }).click();
  await expect(languageMenu).toHaveAttribute("data-language-code", "de");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator("[data-language-menu]")).toHaveAttribute("data-language-code", "de");

  await page.locator("[data-theme-toggle]").first().click();
  await expect(page.locator("html")).toHaveClass(/light/);
  await expect(page.locator('[data-figma-node="204:6497"]')).toHaveCount(1);
});
