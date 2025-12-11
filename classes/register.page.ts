import { expect, Page } from "@playwright/test";

export class RegisterPage {
  constructor(private page: Page) {}

  async fillRegisterInputs(name: string, emailAddress: string) {
    await this.page.locator('[data-qa="signup-name"]').pressSequentially(name);
    await this.page.locator('[data-qa="signup-email"]').pressSequentially(emailAddress);
  }

  async expectErrorToBeDisplayed() {
    await expect(this.page.getByText("Email Address already exist!")).toBeVisible();
  }
  async clickSignUpButton() {
    await this.page.getByRole("button", { name: "Signup" }).click();
  }
  async expectAccountInformationTitle() {
    await expect(this.page.getByRole("heading", { name: "Enter Account Information" })).toBeVisible();
  }
  async fillFormDetails() {
    await this.page.getByLabel("Mr.").check();
    await this.page.getByTestId("password").fill("Password/QA");
    await this.page.getByTestId("days").selectOption("1");
    await this.page.getByTestId("months").selectOption("1");
    await this.page.getByTestId("years").selectOption("2021");
    await this.page.getByTestId("first_name").fill("first_name_QA");
    await this.page.getByTestId("last_name").fill("last_name_QA");
    await this.page.getByTestId("address").fill("address_QA");
    await this.page.getByTestId("country").selectOption("United States");
    await this.page.getByTestId("state").fill("state_QA");
    await this.page.getByTestId("city").fill("city_QA");
    await this.page.getByTestId("zipcode").fill("00-111");
    await this.page.getByTestId("mobile_number").fill("111-222-333");
  }

  async clickCreateAccountButton() {
    await this.page.getByTestId("create-account").click();
  }

  async expectAccountToBeCreated() {
    await expect(this.page.getByTestId("account-created")).toBeVisible();
  }

  async clickContinueButton() {
    await this.page.getByTestId("continue-button").click();
  }
}
