import { test } from "../setup/baseTest";

test("Test Case 8: Verify All Products and product detail page + count categories and brands", async ({ navBar, productPage, baseAssertions, productDetailsPage }) => {
  await navBar.clickOnTab(" Products");
  await productPage.expectCategoryCount(3);
  await productPage.expectBrandCount(8);
  await productPage.expectAllProductsTitleToBeVisible();
  await productPage.expectAllProductListToBeVisible();
  await productPage.clickViewProductButtonOfFirstProduct();
  await baseAssertions.expectPageToShowWithEndpoint("/product_details/1");
  await productDetailsPage.expectProductDetailsToBeVisible();
});

test("Test Case 12: Add Products in Cart", async ({ navBar, productPage, baseAssertions, modalElement }) => {
  await navBar.clickOnTab(" Products");
  await productPage.hoverOnFirstItem();
  await productPage.clickOnAddToCartButton();
  await modalElement.expectAddedModalToBeDisplayed();
  await modalElement.clickOnViewCartLink();
  await productPage.expectOneItemInSummary();
  await baseAssertions.expectPageToShowWithEndpoint("/view_cart");
});

test("Test Case: 9 Search Product", async ({ navBar, productPage }) => {
  const searchedWord = "Blue";

  await navBar.clickOnTab(" Products");
  await productPage.expectAllProductsTitleToBeVisible();
  await productPage.searchForProduct(searchedWord);
  await productPage.clickSearchButton();
  await productPage.expectSearchedProductsToBeDisplayed();
  await productPage.expectSearchedProductsToContainText();
});
test("Test Case 13: Verify Product quantity in Cart", async ({ homePage, cartPage, productDetailsPage, modalElement }) => {
  await homePage.clickViewProductButtonFirstProduct();
  await productDetailsPage.expectProductDetailsToBeVisible();
  await productDetailsPage.increaseQuantityProductTo("4");
  await productDetailsPage.clickOnAddToCartButtonOnDetailsPage();
  await modalElement.expectAddedModalToBeDisplayed();
  await modalElement.clickOnViewCartLink();
  await cartPage.expectQuantityToEqual("4");
});
test("Test Case 18: View Category Products", async ({ navBar, productPage }) => {
  await navBar.clickOnTab(" Products");
  await productPage.expectCategoriesOnLeftSideBar();
  await productPage.clickOnWomenCategory();
  await productPage.expectWomenCategoryToExpand();
  await productPage.clickOnFirstCategory();
  await productPage.expectCategoryAsTitle();
});

test("Test Case 19: View & Cart Brand Products", async ({ navBar, productPage }) => {
  await navBar.clickOnTab(" Products");
  await productPage.expectBrandsOnLeftSideBar();
  await productPage.clickOnRandomBrandCategory();
  await productPage.expectBrandAsTitle();
});

test("Test Case 20: Search Products and Verify Cart After Login", async ({ navBar, productPage, modalElement, cartPage }) => {
  await navBar.clickOnTab(" Products");
  await productPage.expectAllProductsTitleToBeVisible();
  await productPage.searchForProduct("red");
  await productPage.clickSearchButton();
  await productPage.expectSearchedProductsToBeDisplayed();
  await productPage.expectSearchedProductsToContainText();
  const countOfItemsInCart = await productPage.addAllSearchedProductsToCart(modalElement);
  await cartPage.expectCartToHaveItems(countOfItemsInCart);
});
