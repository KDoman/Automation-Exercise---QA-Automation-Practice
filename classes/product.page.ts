import { expect, Page } from "@playwright/test";
export class ProductPage {
  constructor(private page: Page) {}

  async expectThreeCategories() {
    await expect(this.page.locator(".category-products > .panel-default")).toHaveCount(3);
  }

  async expectEightCategories() {
    await expect(this.page.locator(".brands-name > ul > li")).toHaveCount(8);
  }

  async hoverOnFirstItem() {
    await this.page.locator(".col-sm-4").nth(1).hover();
  }
  async clickOnAddToCardButton() {
    await this.page.getByText("Add to cart").nth(1).click();
  }
  async expectAddedModalToBeDisplayed() {
    await expect(this.page.locator(".modal-content")).toBeVisible();
  }
  async clickOnViewCartLink() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
  }

  async expectOneItemInSummary() {
    await expect(this.page.locator("#cart_info_table > tbody")).toHaveCount(1);
  }
}
