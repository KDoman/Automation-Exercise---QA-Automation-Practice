import { expect, Page } from "@playwright/test";
import { randomBrand } from "../utils/helpers";
import { ModalElement } from "../components/modal.component";

export class ProductPage {
  private brandName!: string;
  private searchedProduct!: string;
  public itemsCartCount: number = 0;

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
    await this.page.getByText("Add to cart").nth(0).click();
  }

  async expectOneItemInSummary() {
    await expect(this.page.locator("#cart_info_table > tbody")).toHaveCount(1);
  }

  async expectAllProductsTitleToBeVisible() {
    await expect(this.page.getByRole("heading", { name: "All Products" })).toBeVisible();
  }

  async searchForProduct(searchedProduct: string) {
    await this.page.locator("#search_product").fill(searchedProduct);
    this.searchedProduct = searchedProduct;
  }

  async clickSearchButton() {
    await this.page.locator("#submit_search").click();
  }

  async expectSearchedProductsToBeDisplayed() {
    await expect(this.page.getByRole("heading", { name: "Searched Products" })).toBeVisible();
  }

  async expectSearchedProductsToContainText() {
    const items = this.page.locator(".productinfo.text-center > p");
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      const text = (await items.nth(i).innerText()).toLocaleLowerCase();
      expect(text).toContain(this.searchedProduct.toLowerCase());
    }
  }

  async expectAllProductListToBeVisible() {
    await expect(this.page.locator(".features_items > .col-sm-4")).toHaveCount(34);
  }

  async clickViewProductButtonOfFirstProduct() {
    await this.page.locator(".features_items > .col-sm-4").nth(0).getByRole("link", { name: "View Product" }).click();
  }

  async expectCategoriesOnLeftSideBar() {
    await expect(this.page.locator(".left-sidebar > .category-products")).toBeVisible();
    await this.expectCategoryCount(3);
  }

  async clickOnWomenCategory() {
    await this.page.getByRole("link", { name: "Women" }).click();
  }

  async expectWomenCategoryToExpand() {
    await expect(this.page.locator("#Women")).toContainClass("in");
  }

  async clickOnFirstCategory() {
    await this.page.locator("#Women > .panel-body > ul > li > a").first().click();
  }
  async expectCategoryAsTitle() {
    await expect(this.page.locator(".title")).toContainText("dress", { ignoreCase: true });
  }

  async expectBrandsOnLeftSideBar() {
    await expect(this.page.locator(".brands-name")).toBeVisible();
    await this.expectBrandCount(8);
  }

  async clickOnRandomBrandCategory() {
    const randomPickedBrand = this.page.locator(".brands-name >  ul > li > a").nth(randomBrand());
    this.brandName = await randomPickedBrand.evaluate((el) =>
      Array.from(el.childNodes)
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent)
        .join("")
        .trim()
    );
    await randomPickedBrand.click();
  }

  async expectBrandAsTitle() {
    await expect(this.page.locator(".title")).toContainText(this.brandName, { ignoreCase: true });
  }

  async addAllSearchedProductsToCart(modalElement: ModalElement): Promise<number> {
    const searchedItems = await this.page.locator(".features_items > .col-sm-4").count();

    for (let i = 0; i < searchedItems; i++) {
      await this.page.locator(".productinfo > a").nth(i).click();

      if (i < searchedItems - 1) {
        await modalElement.clickOnContinueShopping();
      } else {
        await modalElement.clickOnViewCartLink();
      }
    }

    return searchedItems;
  }
}
