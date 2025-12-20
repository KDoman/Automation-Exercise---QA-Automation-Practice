import { test } from "../setup/baseTest";

test("Test Case 17: Remove Products From Cart", async ({ navBar, productPage, cartPage, modalElement }) => {
  await navBar.clickOnTab(" Products");
  await productPage.clickOnAddToCartButton();
  await modalElement.clickOnViewCartLink();
  await cartPage.clickDeleteItemButton();
  await cartPage.expectCartToBeEmpty();
});
