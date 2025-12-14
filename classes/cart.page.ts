import { expect, Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async expectQuantityToEqual(quantity: string) {
    await expect(this.page.locator(".cart_quantity").getByRole("button")).toHaveText(quantity);
  }
}
