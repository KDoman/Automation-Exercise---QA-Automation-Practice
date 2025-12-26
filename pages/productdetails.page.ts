import { expect, Page } from "@playwright/test";
import { randomEmail, randomString } from "../utils/helpers";

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
  async expectReviewTitleToBeVisible() {
    await expect(this.page.getByText("Write Your Review")).toBeVisible();
  }
  async fillandSendReviewForm() {
    await this.page.locator("#name").fill(randomString(5));
    await this.page.locator("#email").fill(randomEmail());
    await this.page.locator("#review").fill(randomString(20));
    await this.page.getByRole("button", { name: "Submit" }).click();
  }

  async expectSuccessfullMessage() {
    await expect(this.page.getByText("Thank you for your review.")).toBeVisible();
  }
}
