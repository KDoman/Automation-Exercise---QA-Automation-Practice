import { expect, Page } from "@playwright/test";
import { registerFormDataType } from "../types/interfaces";
import { getValuesFromLocators } from "../utils/helpers";

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterComment(comment: string) {
    await this.page.locator(".form-control").fill(comment);
  }

  async placeOrderClick() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
  }

  private async getAddressInformation(locator: string) {
    const firstAndLastNameDetails = await this.page.locator(`${locator} .address_firstname.address_lastname`).innerText();
    const addressAndCompanyDetails = await getValuesFromLocators(this.page, `${locator} .address_address1.address_address2`);
    const cityStateAndZipCodeDetails = await this.page.locator(`${locator} .address_city.address_state_name.address_postcode`).innerText();
    const countryDetails = await this.page.locator(`${locator} .address_country_name`).innerText();
    const phoneNumberDetails = await this.page.locator(`${locator} .address_phone`).innerText();

    return {
      name: firstAndLastNameDetails,
      address: addressAndCompanyDetails,
      city: cityStateAndZipCodeDetails,
      country: countryDetails,
      number: phoneNumberDetails,
    };
  }

  async verifyAddressInformation(accountData: registerFormDataType) {
    const accountDetails = {
      name: accountData.gender + " " + accountData.firstName + " " + accountData.lastName,
      address: accountData.company + " " + accountData.address1 + " " + accountData.address2,
      city: accountData.city + " " + accountData.state + " " + accountData.zipCode,
      country: accountData.country,
      number: accountData.mobileNumber,
    };
    const deliveryAddressDetails = await this.getAddressInformation("#address_delivery");
    const billingAddressDetails = await this.getAddressInformation("#address_invoice");

    expect(accountDetails).toEqual(expect.objectContaining(deliveryAddressDetails));
    expect(accountDetails).toEqual(expect.objectContaining(billingAddressDetails));
  }
}
