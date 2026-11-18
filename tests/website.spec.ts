import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/catering",
  "/contact",
  "/enquiry",
  "/menu",
  "/privacy-policy",
  "/recent-orders",
  "/refund-policy",
  "/scan",
  "/terms-and-conditions",
];

for (const route of routes) {
  test(`${route} loads successfully`, async ({ page }) => {
    const response = await page.goto(route, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    expect(response?.status()).toBe(200);

    await expect(page.locator("body")).toBeVisible();
  });
}

test("Homepage navigation matches the viewport", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const desktopNav = page.getByRole("navigation", { name: "Main navigation" });
  const mobileMenuButton = page.getByRole("button", { name: "Open navigation" });
  const viewportWidth = page.viewportSize()?.width ?? 1280;

  // The site uses Tailwind md: (768px) as the navbar breakpoint.
  if (viewportWidth >= 768) {
    await expect(desktopNav).toBeVisible();
    await expect(mobileMenuButton).toBeHidden();
    await expect(desktopNav.getByRole("link", { name: "Menu", exact: true })).toBeVisible();
  } else {
    await expect(desktopNav).toBeHidden();
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
    await page.getByRole("button", { name: "Close navigation" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeHidden();
  }
});
