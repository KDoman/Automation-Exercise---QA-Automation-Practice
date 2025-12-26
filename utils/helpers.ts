import { Page } from "@playwright/test";

export function randomString(length: number): string {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomNumber(length: number): string {
  let result = "";
  const characters = "123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomMonth(): number {
  return Math.floor(Math.random() * 12) + 1;
}

export function randomBrand(): number {
  return Math.floor(Math.random() * 8) + 1;
}

export function randomEmail(): string {
  return randomString(8) + "@" + randomString(4) + ".com";
}

export async function getValuesFromLocators(page: Page, locator: string) {
  let value: string = "";
  const valuesArray = await page.locator(locator).all();
  for (let i = 0; i < valuesArray.length; i++) {
    value += await valuesArray[i].innerText();
    if (valuesArray.length - 1 !== i) {
      value += " ";
    }
  }

  return value;
}
