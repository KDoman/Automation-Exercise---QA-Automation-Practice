import { PropertiesPage } from "./../classes/properties.page";
import { NavBar } from "./../classes/navbar.page";
import { test } from "../setup/baseTest";
import { ProductPage } from "../classes/product.page";

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
