import { NavBar } from "../classes/navbar.page";
import { test } from "@playwright/test";
import { RegisterPage } from "../classes/register.page";
import { registerPageData } from "../setup/data";

test("Test Case 5: Register User with existing email", async ({ page }) => {
  const navBar = new NavBar(page);
  const registerPage = new RegisterPage(page);

  await navBar.clickOnTab(" Signup / Login");
  await registerPage.fillRegisterInputs(registerPageData.registeredName, registerPageData.registeredEmail);
});
