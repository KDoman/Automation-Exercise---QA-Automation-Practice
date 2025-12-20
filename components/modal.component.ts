import { expect, Page } from "@playwright/test";

export class ModalElement {
  constructor(private page: Page) {}

  async expectAddedModalToBeDisplayed() {
    await expect(this.page.locator(".modal-content")).toBeVisible();
  }

  async clickOnViewCartLink() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
  }

  async clickOnRegisterLoginButton() {
    await this.page.getByRole("link", { name: "Register / Login" }).click();
  }

  async clickOnContinueShopping() {
    await this.page.getByRole("button", { name: "Continue Shopping" }).click();
  }
}
