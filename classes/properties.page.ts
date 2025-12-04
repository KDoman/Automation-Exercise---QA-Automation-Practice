import { Page, expect } from "@playwright/test";

export class PropertiesPage {
  constructor(private page: Page) {}

  async expectPageToHaveTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }
  async expectPageToShowHomepage() {
    await expect(this.page).toHaveURL("https://automationexercise.com/");
  }
}
