import { test } from "../../setup/baseTest";
import { registerPageData } from "../../utils/data";

test("Test Case 1: Register User", async ({ navBar, registerPage, baseAssertions }) => {
  await navBar.clickOnTab(" Signup / Login");
  await registerPage.fillRegisterInputs(registerPageData.notRegisterName, registerPageData.notRegisterEmail);
  await registerPage.clickSignUpButton();
  await registerPage.expectAccountInformationTitle();
  await registerPage.fillFormDetails();
  await registerPage.clickCreateAccountButton();
  await registerPage.expectAccountToBeCreated();
  await registerPage.clickContinueButton();
  await baseAssertions.expectPageToShowHomepage();
});

test("Test Case 5: Register User with existing email", async ({ navBar, registerPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await registerPage.fillRegisterInputs(registerPageData.registeredName, registerPageData.registeredEmail);
  await registerPage.clickSignUpButton();
  await registerPage.expectErrorToBeDisplayed();
});
