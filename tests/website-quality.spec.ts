import { test, expect } from "@playwright/test";

test.describe("CookOnStay visual and functional checks", () => {
  test("page has no horizontal overflow", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));

    expect(
      Math.max(dimensions.document, dimensions.body),
      `Horizontal overflow detected: ${JSON.stringify(dimensions)}`
    ).toBeLessThanOrEqual(dimensions.viewport + 1);
  });

  test("navbar adapts to the current viewport", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const toggle = page.getByRole("button", { name: /open navigation/i });
    const viewportWidth = page.viewportSize()?.width ?? 1280;

    if (viewportWidth < 768) {
      await expect(toggle).toBeVisible();
      await toggle.click();

      const mobileNav = page.locator("header nav").last();
      await expect(mobileNav.getByRole("link", { name: "Menu", exact: true })).toBeVisible();
      await expect(mobileNav.getByRole("link", { name: "Enquire Now", exact: true })).toBeVisible();

      await mobileNav.getByRole("link", { name: "Menu", exact: true }).click();
      await expect(page).toHaveURL(/\/menu$/);
    } else {
      await expect(toggle).toBeHidden();
      const desktopNav = page.locator("header nav").first();
      await expect(desktopNav.getByRole("link", { name: "Home", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Menu", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Enquire Now", exact: true })).toBeVisible();
    }
  });

  test("Homepage images load successfully", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Prevent motion from changing layout during this image-loading check.
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      `,
    });

    const images = page.locator("main img");
    const imageCount = await images.count();

    expect(imageCount, "No image elements were found inside <main>").toBeGreaterThan(0);

    // Eagerly request images that would normally be lazy-loaded below the fold.
    await images.evaluateAll((elements) => {
      elements.forEach((element) => {
        (element as HTMLImageElement).loading = "eager";
      });
    });

    const imageResults = await images.evaluateAll(async (elements) => {
      return Promise.all(
        elements.map(async (element) => {
          const image = element as HTMLImageElement;

          if (!image.complete) {
            await new Promise<void>((resolve) => {
              const finish = () => resolve();
              image.addEventListener("load", finish, { once: true });
              image.addEventListener("error", finish, { once: true });
              window.setTimeout(finish, 15000);
            });
          }

          return {
            src: image.currentSrc || image.src,
            complete: image.complete,
            naturalWidth: image.naturalWidth,
            loaded: image.complete && image.naturalWidth > 0,
          };
        })
      );
    });

    const failedImages = imageResults.filter((image) => !image.loaded);

    expect(
      failedImages,
      `These homepage images did not load: ${JSON.stringify(failedImages, null, 2)}`
    ).toEqual([]);
  });

  test("enquiry form exposes required fields and browser validation", async ({ page }) => {
    await page.goto("/enquiry", { waitUntil: "domcontentloaded" });

    const form = page.locator("form");
    await expect(form).toBeVisible();

    const name = page.locator("#name");
    const phone = page.locator("#phone");
    const type = page.locator("#type");
    const message = page.locator("#message");

    await expect(name).toHaveAttribute("required", "");
    await expect(phone).toHaveAttribute("required", "");
    await expect(type).toHaveAttribute("required", "");
    await expect(message).toHaveAttribute("required", "");

    // Verify native validation only; do not submit or send a real enquiry.
    const initiallyValid = await form.evaluate((element: HTMLFormElement) =>
      element.checkValidity()
    );
    expect(initiallyValid).toBe(false);

    await name.fill("Playwright Test");
    await phone.fill("9876543210");

    const firstSelectableType = await type.locator("option:not([disabled])").nth(1).getAttribute("value");
    if (firstSelectableType) {
      await type.selectOption(firstSelectableType);
    }

    await message.fill("This is a test enquiry message with enough detail.");
    const validAfterRequiredFields = await form.evaluate((element: HTMLFormElement) =>
      element.checkValidity()
    );

    expect(validAfterRequiredFields).toBe(true);
  });

  test("homepage does not produce uncaught page errors", async ({ page }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => undefined);

    expect(pageErrors, "Uncaught browser page errors were detected").toEqual([]);
  });
});
