import { test } from "../../setup/baseTest";

test("Has title", async ({ baseAssertions }) => {
  await baseAssertions.expectPageToHaveTitle("Automation Exercise");
});

test("If logo redirects to homepage", async ({ navBar, baseAssertions }) => {
  await navBar.clickOnTab(" Products");
  await navBar.clickOnLogo();
  await baseAssertions.expectPageToShowHomepage();
});

test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality by keyboard", async ({ baseAssertions, homePage }) => {
  await baseAssertions.scrollDownByUsingArrow();
  await homePage.expectSubscriptionTitleToBeVisible();
  await homePage.clickOnArrowIcon();
  await baseAssertions.expectPageToBeScrolledUp();
});

test("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality by mousewheel", async ({ baseAssertions, homePage }) => {
  await baseAssertions.scrollDownByMousewheel();
  await homePage.expectSubscriptionTitleToBeVisible();
  await homePage.clickOnArrowIcon();
  await baseAssertions.expectPageToBeScrolledUp();
});
