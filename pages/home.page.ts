import { expect, Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async clickViewProductButtonFirstProduct() {
    await this.page.locator(".features_items").getByRole("link", { name: "View Product" }).first().click();
  }
  async expectUserToBeLoggedIn() {
    await expect(this.page.getByText("Logged in as")).toBeVisible();
  }

  async scrollDownToRecommendedItems() {
    await this.page.getByRole("heading", { name: "recommended items" }).scrollIntoViewIfNeeded();
  }

  async addRandomRecommendedItemToCart() {
    const randomItem: number = Math.floor(Math.random() * 3);
    await this.page.locator(".carousel-inner > .active > .col-sm-4 a.add-to-cart").nth(randomItem).click();
    const choosenRecomendedItem = await this.page.locator(".carousel-inner > .active > .col-sm-4 p").nth(randomItem).textContent();
    return choosenRecomendedItem;
  }
  async expectSubscriptionTitleToBeVisible() {
    const subscriptionTitle = this.page.getByRole("heading", { name: "Subscription" });
    await expect(subscriptionTitle).toBeVisible();
    await expect(subscriptionTitle).toBeInViewport();
  }
  async clickOnArrowIcon() {
    await this.page.locator("#scrollUp").click();
  }
}
