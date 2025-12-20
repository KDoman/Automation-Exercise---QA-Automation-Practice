import { Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterComment(comment: string) {
    await this.page.locator(".form-control").fill(comment);
  }

  async placeOrderClick() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
  }
}
