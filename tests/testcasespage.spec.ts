import { TestCasesPage } from "./../classes/testCases.page";
import { NavBar } from "./../classes/navbar.page";
import { test } from "../setup/baseTest";

test("Test Case 7: Verify Test Cases Page", async ({ page }) => {
  const navBar = new NavBar(page);
  const testCasesPage = new TestCasesPage(page);

  await navBar.clickOnTab(" Test Cases");
  await testCasesPage.expectTestCasesTitleToBeVisible();
});
