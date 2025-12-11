import { PropertiesPage } from "./../classes/properties.page";
import { NavBar } from "../classes/navbar.page";
import { test } from "../setup/baseTest";
import { RegisterPage } from "../classes/register.page";
import { registerPageData } from "../setup/data";

test("Test Case 1: Register User", async ({ page }) => {
  const navBar = new NavBar(page);
  const registerPage = new RegisterPage(page);
  const proppertiesPage = new PropertiesPage(page);

  await navBar.clickOnTab(" Signup / Login");
  await registerPage.fillRegisterInputs(registerPageData.notRegisterName, registerPageData.notRegisterEmail);
  await registerPage.clickSignUpButton();
  await registerPage.expectAccountInformationTitle();
  await registerPage.fillFormDetails();
  await registerPage.clickCreateAccountButton();
  await registerPage.expectAccountToBeCreated();
  await registerPage.clickContinueButton();
  await proppertiesPage.expectPageToShowHomepage();
});

test("Test Case 5: Register User with existing email", async ({ page }) => {
  const navBar = new NavBar(page);
  const registerPage = new RegisterPage(page);

  await navBar.clickOnTab(" Signup / Login");
  await registerPage.fillRegisterInputs(registerPageData.registeredName, registerPageData.registeredEmail);
  await registerPage.clickSignUpButton();
  await registerPage.expectErrorToBeDisplayed();
});
