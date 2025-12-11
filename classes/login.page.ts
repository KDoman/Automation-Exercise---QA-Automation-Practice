import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  private async fillInputs(email: string, password: string) {
    await this.page.locator('[data-qa="login-email"]').pressSequentially(email, { delay: 100 });
    await this.page.locator('[data-qa="login-password"]').pressSequentially(password, { delay: 100 });
  }

  private async sendForm() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async expectLoginSuccess() {
    await expect(this.page.getByRole("link", { name: " Delete Account" })).toBeVisible();
  }

  async expectLoginFail() {
    await expect(this.page.getByText("Your email or password is incorrect!")).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.fillInputs(email, password);
    await this.sendForm();
  }
}
