import { test } from "../setup/baseTest";
import { contactPageData } from "../utils/data";

test("Test Case 6: Contact Us Form", async ({ navBar, contactPage, baseAssertions }) => {
  await navBar.clickOnTab(" Contact us");
  await contactPage.expectFormToBeVisible();
  await contactPage.fillContactPage(contactPageData.contactName, contactPageData.contactEmail, contactPageData.contactSubject, contactPageData.contactMessage, contactPageData.contactFile);
  await contactPage.sendContactPage();
  await contactPage.expectSuccessMessageToBeVisible();
  await contactPage.clickGreenHomeButton();
  await baseAssertions.expectPageToShowHomepage();
});

test("Test Case 10: Verify sign in to Subscription ", async ({ navBar, contactPage }) => {
  await navBar.clickOnTab(" Contact us");
  await contactPage.typeInSubscribeEmail();
  await contactPage.clickSubscribeButton();
  await contactPage.expectSuccessPopupToBeVisibleFor3Seconds();
});
