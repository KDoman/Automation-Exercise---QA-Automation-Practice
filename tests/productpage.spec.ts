import { PropertiesPage } from "./../classes/properties.page";
import { NavBar } from "./../classes/navbar.page";
import { test } from "../setup/baseTest";
import { ProductPage } from "../classes/product.page";

test.describe("Tests for product page - functionality", () => {
  test("Count categories and brands", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.expectThreeCategories();
    await productPage.expectEightCategories();
  });

  test("Add products in Card", async ({ page }) => {
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

  test.only("Test Case: 9 Search Product", async ({ page }) => {
    const navBar = new NavBar(page);
    const productPage = new ProductPage(page);

    await navBar.clickOnTab(" Products");
    await productPage.expectAllProductsTitle();
    await productPage.fillSearchBar();
    await productPage.clickSearchButton();
    await productPage.expectSearchedProductsToBeDisplayed();
    await productPage.expectSearchedProductsToContainText();
  });
});
