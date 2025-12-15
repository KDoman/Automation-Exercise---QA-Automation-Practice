import { expect, Page } from "@playwright/test";

export class ProductDetailsPage {
  constructor(private page: Page) {}

  async expectProductDetailsToBeVisible() {
    await expect(this.page.locator(".product-information").getByRole("heading")).toBeVisible();
    await expect(this.page.locator(".product-information > p").nth(0)).toContainText("Category:");
    await expect(this.page.locator(".product-information > span > span").nth(0)).toContainText("Rs.");
    await expect(this.page.locator(".product-information > p").nth(1)).toContainText("Availability:");
    await expect(this.page.locator(".product-information > p").nth(2)).toContainText("Condition:");
    await expect(this.page.locator(".product-information > p").nth(3)).toContainText("Brand:");
  }
  async increaseQuantityProductTo(quantity: string) {
    await this.page.locator("#quantity").fill(quantity);
  }
  async clickOnAddToCartButtonOnDetailsPage() {
    await this.page.getByText("Add to cart").click();
  }
}
