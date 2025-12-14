import { PropertiesPage } from "./../classes/properties.page";
import { NavBar } from "./../classes/navbar.page";
import { test } from "../setup/baseTest";
import { ProductPage } from "../classes/product.page";
import { CartPage } from "../classes/cart.page";
import { HomePage } from "../classes/home.page";

test.describe("Tests related to Products tab", () => {
  test("Test Case 8: Verify All Products and product detail page + count categories and brands", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);
    const propertiesPage = new PropertiesPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.expectCategoryCount(3);
    await productPage.expectBrandCount(8);
    await productPage.expectAllProductsTitleToBeVisible();
    await productPage.expectAllProductListToBeVisible();
    await productPage.clickViewProductButtonOfFirstProduct();
    await propertiesPage.expectPageToShowWithEndpoint("/product_details/1");
    await productPage.expectProductDetailsToBeVisible();
  });

  test("Test Case 12: Add Products in Cart", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);
    const propertiesPage = new PropertiesPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.hoverOnFirstItem();
    await productPage.clickOnAddToCartButton();
    await productPage.expectAddedModalToBeDisplayed();
    await productPage.clickOnViewCartLink();
    await productPage.expectOneItemInSummary();
    await propertiesPage.expectPageToShowWithEndpoint("/view_cart");
  });

  test("Test Case: 9 Search Product", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);
    const searchedWord = "Blue";

    await navBar.clickOnTab(" Products");
    await productPage.expectAllProductsTitleToBeVisible();
    await productPage.searchForProduct(searchedWord);
    await productPage.clickSearchButton();
    await productPage.expectSearchedProductsToBeDisplayed();
    await productPage.expectSearchedProductsToContainText(searchedWord);
  });
  test("Test Case 13: Verify Product quantity in Cart", async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.clickViewProductButtonFirstProduct();
    await productPage.expectProductDetailsToBeVisible();
    await productPage.increaseQuantityProductTo("4");
    await productPage.clickOnAddToCartButtonOnDetailsPage();
    await productPage.expectAddedModalToBeDisplayed();
    await productPage.clickOnViewCartLink();
    await cartPage.expectQuantityToEqual("4");
  });
});
