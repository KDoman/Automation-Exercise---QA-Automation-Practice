import { expect, Page } from "@playwright/test";
import fs from "fs";
import { registerFormDataType } from "../types/interfaces";

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

  async downloadAndVerifyFile(accountData: registerFormDataType) {
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.getByRole("link", { name: "Download Invoice" }).click();
    const download = await downloadPromise;
    await download.saveAs("./utils/" + download.suggestedFilename());
    fs.readFile("./utils/invoice.txt", "utf8", (err: string, data: string) => {
      if (err) {
        console.error(err);
        return;
      }
      expect(data).toContain(accountData.firstName);
      expect(data).toContain(accountData.lastName);
    });
  }
}
