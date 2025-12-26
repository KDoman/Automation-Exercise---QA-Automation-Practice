import { expect, Page } from "@playwright/test";
import { randomString } from "../utils/helpers";
import { registerForm } from "../utils/data";

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
    await this.page.getByLabel(registerForm.gender).check();
    await this.page.getByTestId("password").fill("password" + randomString(5));
    await this.page.getByTestId("days").selectOption("1");
    await this.page.getByTestId("months").selectOption("1");
    await this.page.getByTestId("years").selectOption("2021");
    await this.page.getByTestId("first_name").fill(registerForm.firstName);
    await this.page.getByTestId("last_name").fill(registerForm.lastName);
    await this.page.getByTestId("company").fill(registerForm.company);
    await this.page.getByTestId("address").fill(registerForm.address1);
    await this.page.getByTestId("address2").fill(registerForm.address2);
    await this.page.getByTestId("country").selectOption(registerForm.country);
    await this.page.getByTestId("state").fill(registerForm.state);
    await this.page.getByTestId("city").fill(registerForm.city);
    await this.page.getByTestId("zipcode").fill(registerForm.zipCode);
    await this.page.getByTestId("mobile_number").fill(registerForm.mobileNumber);

    return registerForm;
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

  async registerProcess(name: string, emailAddress: string) {
    await this.fillRegisterInputs(name, emailAddress);
    await this.clickSignUpButton();
    const accountData = await this.fillFormDetails();
    await this.clickCreateAccountButton();
    await this.expectAccountToBeCreated();
    await this.clickContinueButton();

    return accountData;
  }
}
