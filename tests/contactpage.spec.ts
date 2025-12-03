import { test } from "../setup/baseTest";
import { NavBar } from "../classes/navbar.page";
import { ContactPage } from "../classes/contact.page";
import { PropertiesPage } from "../classes/properties.page";
import { contactPageData } from "../setup/data";

test("Displaying and sending form", async ({ page }) => {
  const navBar = new NavBar(page);
  const contactPage = new ContactPage(page);
  const propertiesPage = new PropertiesPage(page);

  await navBar.clickOnTab(" Contact us");
  await contactPage.expectFormToBeVisible();
  await contactPage.fillContactPage(contactPageData.contactName, contactPageData.contactEmail, contactPageData.contactSubject, contactPageData.contactMessage, contactPageData.contactFile);
  await contactPage.sendContactPage();
  await contactPage.expectSuccessMessageToBeVisible();
  await contactPage.clickGreenHomeButton();
  await propertiesPage.expectPageToHaveURL("https://automationexercise.com/");
});
