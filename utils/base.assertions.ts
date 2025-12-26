import { Page, expect } from "@playwright/test";

export class BaseAssertions {
  constructor(private page: Page) {}

  async expectPageToHaveTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }
  async expectPageToShowHomepage() {
    await expect(this.page).toHaveURL("https://automationexercise.com/");
  }
  async expectPageToShowWithEndpoint(endPoint: string) {
    await expect(this.page).toHaveURL(`https://automationexercise.com${endPoint}`);
  }
  async scrollDownByUsingArrow() {
    await this.page.focus("body");

    let previousScrollY = -1;

    while (true) {
      const currentScrollY = await this.page.evaluate(() => window.scrollY);
      const maxScrollY = await this.page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);

      if (currentScrollY >= maxScrollY || currentScrollY === previousScrollY) {
        break;
      }

      previousScrollY = currentScrollY;

      await this.page.keyboard.press("ArrowDown");

      await this.page.waitForTimeout(50);
    }
  }

  async scrollDownByMousewheel() {
    let previousScrollY = -1;

    while (true) {
      const currentScrollY = await this.page.evaluate(() => window.scrollY);
      const maxScrollY = await this.page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);

      if (currentScrollY >= maxScrollY || currentScrollY === previousScrollY) {
        break;
      }

      previousScrollY = currentScrollY;

      await this.page.evaluate(() => window.scrollBy(0, 50));
    }
  }

  async expectPageToBeScrolledUp() {
    await expect(this.page.locator(".logo")).toBeInViewport();
  }
}
