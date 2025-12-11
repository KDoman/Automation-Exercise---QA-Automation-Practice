import { Page } from "@playwright/test";

export class RegisterPage {
  constructor(private page: Page) {}

  async fillRegisterInputs(name: string, emailAddress: string) {
    await this.page.locator('[data-qa="signup-name"]').pressSequentially(name);
    await this.page.locator('[data-qa="signup-email"]').pressSequentially(emailAddress);
  }
}
