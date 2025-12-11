import { NavBar } from "./../classes/navbar.page";
import { test } from "../setup/baseTest";
import { ContactPage } from "../classes/contact.page";
import { PropertiesPage } from "../classes/properties.page";
import { contactPageData } from "../setup/data";

test("Test Case 6: Contact Us Form", async ({ page }) => {
  const navBar = new NavBar(page);
  const contactPage = new ContactPage(page);
  const propertiesPage = new PropertiesPage(page);

  await navBar.clickOnTab(" Contact us");
  await contactPage.expectFormToBeVisible();
  await contactPage.fillContactPage(contactPageData.contactName, contactPageData.contactEmail, contactPageData.contactSubject, contactPageData.contactMessage, contactPageData.contactFile);
  await contactPage.sendContactPage();
  await contactPage.expectSuccessMessageToBeVisible();
  await contactPage.clickGreenHomeButton();
  await propertiesPage.expectPageToShowHomepage();
});

test("Test Case 10: Verify sign in to Subscription ", async ({ page }) => {
  const navBar = new NavBar(page);
  const contactPage = new ContactPage(page);

  await navBar.clickOnTab(" Contact us");
  await contactPage.typeInSubscribeEmail();
  await contactPage.clickSubscribeButton();
  await contactPage.expectSuccessPopupToBeVisibleFor3Seconds();
});
