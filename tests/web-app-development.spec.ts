import { expect, test } from "playwright/test";

for (const theme of ["light", "dark"] as const) {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1440, height: 900 },
  ]) {
    test(`${theme} Web App Development ${viewport.width}px is semantic and overflow-free`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];

      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("requestfailed", (request) => {
        failedRequests.push(`${request.url()}: ${request.failure()?.errorText ?? "unknown"}`);
      });

      await page.setViewportSize(viewport);
      await page.addInitScript(
        (selectedTheme) => localStorage.setItem("theme", selectedTheme),
        theme,
      );
      await page.goto("/services/web-app-development", { waitUntil: "networkidle" });

      await expect(page.locator("html")).toHaveClass(new RegExp(theme));
      await expect(
        page.getByRole("heading", { level: 1, name: "Web App Development" }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { level: 2, name: "Custom Web App Development for" }),
      ).toBeVisible();
      await expect(page.getByRole("link", { name: "Get Started", exact: true }).first()).toHaveAttribute(
        "href",
        "/contact-us",
      );

      const diagnostics = await page.evaluate(() => ({
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        semanticHeroCount: document.querySelectorAll('[data-figma-node-dark="1:1595"]').length,
      }));

      expect(diagnostics.horizontalOverflow).toBe(false);
      expect(diagnostics.semanticHeroCount).toBe(1);
      expect(consoleErrors).toEqual([]);
      expect(failedRequests).toEqual([]);
    });
  }
}
