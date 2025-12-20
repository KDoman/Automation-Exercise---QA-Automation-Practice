import { expect, Page } from "@playwright/test";

export class PaymentPage {
  constructor(private page: Page) {}

  private async fillPaymentForm() {
    await this.page.getByTestId("name-on-card").fill("Antonio");
    await this.page.getByTestId("card-number").fill("1234123412341234");
    await this.page.getByTestId("cvc").fill("123");
    await this.page.getByTestId("expiry-month").fill("11");
    await this.page.getByTestId("expiry-year").fill("2025");
  }

  private async clickPayAndConfirmOrderButton() {
    await this.page.getByTestId("pay-button").click();
  }

  async fillAndConfirmOrderPayment() {
    await this.fillPaymentForm();
    await this.clickPayAndConfirmOrderButton();
  }

  async expectSuccessMessage() {
    await expect(this.page.getByText("Congratulations! Your order has been confirmed!")).toBeVisible();
  }
}
