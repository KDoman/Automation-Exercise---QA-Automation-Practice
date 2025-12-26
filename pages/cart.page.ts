import { expect, Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async expectQuantityToEqual(quantity: string) {
    await expect(this.page.locator(".cart_quantity").getByRole("button")).toHaveText(quantity);
  }
  async clickProceedToCheckoutButton() {
    await this.page.locator(".check_out").click();
  }

  async clickDeleteItemButton() {
    await this.page.locator(".cart_quantity_delete").click();
  }

  async expectCartToBeEmpty() {
    await expect(this.page.locator("#empty_cart")).toContainText("Cart is empty!");
  }

  async expectCartToHaveItems(itemsCount: number) {
    const cartItemsCount = await this.page.locator("#cart_info_table > tbody > tr").count();
    expect(cartItemsCount).toBe(itemsCount);
  }

  async expectAddedItemToBeInCart(itemName: string) {
    await expect(this.page.locator(".cart_description h4 a")).toHaveText(itemName, { ignoreCase: true });
  }
}
