import { expect, test } from "playwright/test";

const serviceRoutes = [
  "/services/ai-ml-development",
  "/services/blockchain-development",
  "/services/collaborative-models",
  "/services/desktop-app-development",
  "/services/devsecops",
  "/services/digital-transformation",
  "/services/full-stack-development",
  "/services/game-development",
  "/services/investment",
  "/services/metaverse-ar-vr",
  "/services/mobile-app-development",
  "/services/mvp-development",
  "/services/no-code-development",
  "/services/product-development",
  "/services/product-strategy-consulting",
  "/services/software-development-outsourcing",
  "/services/software-security",
  "/services/staff-augmentation",
  "/services/ui-ux-design",
  "/services/web-3-development",
  "/services/web-app-development",
] as const;

test("all service routes return successful documents", async ({ request }) => {
  for (const route of serviceRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    expect(response.headers()["content-type"], route).toContain("text/html");
  }
});

for (const theme of ["light", "dark"] as const) {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1440, height: 900 },
  ]) {
    test(`${theme} service page ${viewport.width}x${viewport.height} is intact`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("requestfailed", (request) =>
        failedRequests.push(`${request.url()}: ${request.failure()?.errorText ?? "unknown"}`),
      );

      await page.setViewportSize(viewport);
      await page.addInitScript((selectedTheme) => localStorage.setItem("theme", selectedTheme), theme);
      await page.goto("/services/full-stack-development", { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);

      const pageImage = page.getByAltText("Holovise Services Full Stack Development page");
      await expect(pageImage).toBeVisible();
      await expect(page.locator("html")).toHaveClass(new RegExp(theme));
      await expect(page.locator("main")).toHaveCount(1);

      const diagnostics = await page.evaluate(() => ({
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        imageReady: [...document.images].every((image) => image.complete && image.naturalWidth > 0),
      }));
      expect(diagnostics.horizontalOverflow).toBe(false);
      expect(diagnostics.imageReady).toBe(true);
      expect(consoleErrors).toEqual([]);
      expect(failedRequests).toEqual([]);
    });
  }
}

test("mobile menu destination opens without duplicate page chrome", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Open menu" }).click();
  await expect(page).toHaveURL(/\/side-drawer$/);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByAltText(/Side Drawer/i)).toBeVisible();
  await expect(page.locator("header")).toHaveCount(0);
});
