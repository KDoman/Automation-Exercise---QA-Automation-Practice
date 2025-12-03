import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto("https://automationexercise.com/");
    const consent = page.getByRole("button", { name: "Consent" });
    if (await consent.isVisible()) {
      await consent.click();
    }
    await use(page);
  },
});
