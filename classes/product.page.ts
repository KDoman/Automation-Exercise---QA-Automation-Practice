import { expect, Page } from "@playwright/test";
export class ProductPage {
  constructor(private page: Page) {}

  async expectThreeCategories() {
    await expect(this.page.locator(".category-products > .panel-default")).toHaveCount(3);
  }

  async expectEightCategories() {
    await expect(this.page.locator(".brands-name > ul > li")).toHaveCount(8);
  }
}
