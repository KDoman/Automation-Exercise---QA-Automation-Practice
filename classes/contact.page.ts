import { expect, Page } from "@playwright/test";

export class ContactPage {
  constructor(private page: Page) {}

  async expectFormToBeVisible() {
    await expect(this.page.getByText("Get In Touch")).toBeVisible();
  }

  async fillContactPage(name: string, email: string, subject: string, message: string, file: string) {
    await this.page.getByTestId("name").fill(name);
    await this.page.getByTestId("email").fill(email);
    await this.page.getByTestId("subject").fill(subject);
    await this.page.getByTestId("message").fill(message);
    await this.page.locator('[type="file"]').setInputFiles(file);
  }

  async sendContactPage() {
    this.page.once("dialog", (dialog) => dialog.accept());
    await this.page.getByTestId("submit-button").click();
  }

  async expectSuccessMessageToBeVisible() {
    await expect(this.page.locator("#contact-page").getByText("Success! Your details have")).toBeVisible();
  }

  async clickGreenHomeButton() {
    await this.page.locator(".btn.btn-success").click();
  }

  async typeInSubscribeEmail() {
    await this.page.locator("#susbscribe_email").fill("test@test.test");
  }

  async clickSubscribeButton() {
    await this.page.locator("#subscribe").click();
  }

  async expectSuccessPopupToBeVisibleFor3Seconds() {
    await expect(this.page.locator(".col-md-9.form-group")).toContainClass("hide");
    await this.page.waitForTimeout(2500);
    await expect(this.page.getByText("You have been successfully subscribed!")).not.toBeVisible();
  }
}
