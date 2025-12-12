import { PropertiesPage } from "./../classes/properties.page";
import { NavBar } from "./../classes/navbar.page";
import { test } from "../setup/baseTest";
import { ProductPage } from "../classes/product.page";

test.describe("Tests related to Products tab", () => {
  test("Test Case 8: Verify All Products and product detail page + count categories and brands", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);
    const propertiesPage = new PropertiesPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.expectThreeCategories();
    await productPage.expectEightBrands();
    await productPage.expectAllProductsTitleToBeVisible();
    await productPage.expectAllProductListToBeVisible();
    await productPage.clickViewProductButtonOfFirstProduct();
    await propertiesPage.expectPageToShowWithEndpoint("product_details/1");
    await productPage.expectProductDetailsToBeVisible();
  });

  test("Test Case 12: Add Products in Cart", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);
    const propertiesPage = new PropertiesPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.hoverOnFirstItem();
    await productPage.clickOnAddToCardButton();
    await productPage.expectAddedModalToBeDisplayed();
    await productPage.clickOnViewCartLink();
    await productPage.expectOneItemInSummary();
    await propertiesPage.expectPageToShowWithEndpoint("/view_cart");
  });

  test("Test Case: 9 Search Product", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.expectAllProductsTitleToBeVisible();
    await productPage.fillSearchBar();
    await productPage.clickSearchButton();
    await productPage.expectSearchedProductsToBeDisplayed();
    await productPage.expectSearchedProductsToContainText();
  });
});
