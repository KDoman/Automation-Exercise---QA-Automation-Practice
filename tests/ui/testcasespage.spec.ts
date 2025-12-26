import { test } from "../../setup/baseTest";

test("Test Case 7: Verify Test Cases Page", async ({ page, navBar, testCasesPage }) => {
  await navBar.clickOnTab(" Test Cases");
  await testCasesPage.expectTestCasesTitleToBeVisible();
});
