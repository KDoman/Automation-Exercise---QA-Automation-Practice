import { test } from "../setup/baseTest";

test("Has title", async ({ assertionsPage }) => {
  await assertionsPage.expectPageToHaveTitle("Automation Exercise");
});

test("If logo redirects to homepage", async ({ navBar, assertionsPage }) => {
  await navBar.clickOnTab(" Products");
  await navBar.clickOnLogo();
  await assertionsPage.expectPageToShowHomepage();
});
