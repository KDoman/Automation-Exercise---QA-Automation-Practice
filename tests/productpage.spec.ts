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
