import { expect, Page } from "@playwright/test";

export class TestCasesPage {
  constructor(private page: Page) {}

  async expectTestCasesTitleToBeVisible() {
    await expect(this.page.getByRole("heading", { name: "Test Cases", exact: true })).toBeVisible();
  }
}
