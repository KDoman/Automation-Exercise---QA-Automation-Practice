import { test } from "../setup/baseTest";
import { loginPageData } from "../utils/data";

test("Test Case 2: Login User with correct email and password", async ({ navBar, loginPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await loginPage.expectLoginSuccess();
});

test("Test Case 3: Login User with incorrect email and password", async ({ navBar, loginPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.wrongLogin, loginPageData.wrongPassword);
  await loginPage.expectLoginFail();
});

test("Test Case 4: Logout User", async ({ navBar, loginPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await navBar.expectedLoggedIn();
  await navBar.clickOnTab(" Logout");
  await navBar.expectedLoggedOut();
});
