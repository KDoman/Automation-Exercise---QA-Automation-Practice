import { expect, Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async clickViewProductButtonFirstProduct() {
    await this.page.locator(".features_items").getByRole("link", { name: "View Product" }).first().click();
  }
  async expectUserToBeLoggedIn() {
    await expect(this.page.getByText("Logged in as")).toBeVisible();
  }
}
