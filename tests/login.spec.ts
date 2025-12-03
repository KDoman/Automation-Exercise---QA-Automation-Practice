import { test } from "../setup/baseTest";
import { NavBar } from "../classes/navbar.page";
import { LoginPage } from "../classes/login.page";
import { loginPageData } from "../setup/data";

test("Login process", async ({ page }) => {
  const navBar = new NavBar(page);
  const loginPage = new LoginPage(page);

  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await loginPage.expectLoginSuccess();
});

test("Failed login process", async ({ page }) => {
  const navBar = new NavBar(page);
  const loginPage = new LoginPage(page);

  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.wrongLogin, loginPageData.wrongPassword);
  await loginPage.expectLoginFail();
});

test("Logout User", async ({ page }) => {
  const navBar = new NavBar(page);
  const loginPage = new LoginPage(page);

  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await navBar.expectedLoggedIn();
  await navBar.clickOnTab(" Logout");
  await navBar.expectedLoggedOut();
});
