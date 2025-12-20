import { test } from "../setup/baseTest";

test("Has title", async ({ baseAssertions }) => {
  await baseAssertions.expectPageToHaveTitle("Automation Exercise");
});

test("If logo redirects to homepage", async ({ navBar, baseAssertions }) => {
  await navBar.clickOnTab(" Products");
  await navBar.clickOnLogo();
  await baseAssertions.expectPageToShowHomepage();
});
