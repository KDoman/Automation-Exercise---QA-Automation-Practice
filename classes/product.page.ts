import { expect, Page } from "@playwright/test";
export class ProductPage {
  constructor(private page: Page) {}

  async expectCategoryCount(number: number) {
    await expect(this.page.locator(".category-products > .panel-default")).toHaveCount(number);
  }

  async expectBrandCount(number: number) {
    await expect(this.page.locator(".brands-name > ul > li")).toHaveCount(number);
  }

  async hoverOnFirstItem() {
    await this.page.locator(".col-sm-4").nth(1).hover();
  }
  async clickOnAddToCartButton() {
    await this.page.getByText("Add to cart").nth(1).click();
  }

  async clickOnAddToCartButtonOnDetailsPage() {
    await this.page.getByText("Add to cart").click();
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

  async expectAllProductsTitleToBeVisible() {
    await expect(this.page.getByRole("heading", { name: "All Products" })).toBeVisible();
  }

  async searchForProduct(searchedProduct: string) {
    await this.page.locator("#search_product").fill(searchedProduct);
  }

  async clickSearchButton() {
    await this.page.locator("#submit_search").click();
  }

  async expectSearchedProductsToBeDisplayed() {
    await expect(this.page.getByRole("heading", { name: "Searched Products" })).toBeVisible();
  }

  async expectSearchedProductsToContainText(searchedProduct: string) {
    const items = this.page.locator(".productinfo.text-center > p");
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      const text = (await items.nth(i).innerText()).toLocaleLowerCase();
      expect(text).toContain(searchedProduct.toLowerCase());
    }
  }

  async expectAllProductListToBeVisible() {
    await expect(this.page.locator(".features_items > .col-sm-4")).toHaveCount(34);
  }

  async clickViewProductButtonOfFirstProduct() {
    await this.page.locator(".features_items > .col-sm-4").nth(0).getByRole("link", { name: "View Product" }).click();
  }

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
}
