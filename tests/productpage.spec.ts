import { test } from "../setup/baseTest";

test.describe("Tests related to Products tab", () => {
  test("Test Case 8: Verify All Products and product detail page + count categories and brands", async ({ navBar, productPage, assertionsPage, productDetailsPage }) => {
    await navBar.clickOnTab(" Products");
    await productPage.expectCategoryCount(3);
    await productPage.expectBrandCount(8);
    await productPage.expectAllProductsTitleToBeVisible();
    await productPage.expectAllProductListToBeVisible();
    await productPage.clickViewProductButtonOfFirstProduct();
    await assertionsPage.expectPageToShowWithEndpoint("/product_details/1");
    await productDetailsPage.expectProductDetailsToBeVisible();
  });

  test("Test Case 12: Add Products in Cart", async ({ navBar, productPage, assertionsPage, modalElement }) => {
    await navBar.clickOnTab(" Products");
    await productPage.hoverOnFirstItem();
    await productPage.clickOnAddToCartButton();
    await modalElement.expectAddedModalToBeDisplayed();
    await modalElement.clickOnViewCartLink();
    await productPage.expectOneItemInSummary();
    await assertionsPage.expectPageToShowWithEndpoint("/view_cart");
  });

  test("Test Case: 9 Search Product", async ({ navBar, productPage }) => {
    const searchedWord = "Blue";

    await navBar.clickOnTab(" Products");
    await productPage.expectAllProductsTitleToBeVisible();
    await productPage.searchForProduct(searchedWord);
    await productPage.clickSearchButton();
    await productPage.expectSearchedProductsToBeDisplayed();
    await productPage.expectSearchedProductsToContainText(searchedWord);
  });
  test("Test Case 13: Verify Product quantity in Cart", async ({ homePage, productPage, cartPage, productDetailsPage, modalElement }) => {
    await homePage.clickViewProductButtonFirstProduct();
    await productDetailsPage.expectProductDetailsToBeVisible();
    await productDetailsPage.increaseQuantityProductTo("4");
    await productDetailsPage.clickOnAddToCartButtonOnDetailsPage();
    await modalElement.expectAddedModalToBeDisplayed();
    await modalElement.clickOnViewCartLink();
    await cartPage.expectQuantityToEqual("4");
  });
});
