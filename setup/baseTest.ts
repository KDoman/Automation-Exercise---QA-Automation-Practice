import { TestCasesPage } from "./../classes/testcases.page";
import { RegisterPage } from "./../classes/register.page";
import { CartPage } from "./../classes/cart.page";
import { HomePage } from "./../classes/home.page";
import { test as base } from "@playwright/test";
import { NavBar } from "../classes/navbar.page";
import { ContactPage } from "../classes/contact.page";
import { AssertionsPage } from "../classes/assertions.page";
import { LoginPage } from "../classes/login.page";
import { ProductPage } from "../classes/product.page";
import { ProductDetailsPage } from "../classes/productdetails.page";
import { ModalElement } from "../classes/modal.element";

type MyPages = {
  navBar: NavBar;
  contactPage: ContactPage;
  assertionsPage: AssertionsPage;
  loginPage: LoginPage;
  productPage: ProductPage;
  homePage: HomePage;
  cartPage: CartPage;
  registerPage: RegisterPage;
  testCasesPage: TestCasesPage;
  productDetailsPage: ProductDetailsPage;
  modalElement: ModalElement;
};

export const test = base.extend<MyPages>({
  page: async ({ page }, use) => {
    await page.goto("https://automationexercise.com/");
    const consent = page.getByRole("button", { name: "Consent" });
    if (await consent.isVisible()) {
      await consent.click();
    }
    await use(page);
  },
  navBar: async ({ page }, use) => {
    await use(new NavBar(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  assertionsPage: async ({ page }, use) => {
    await use(new AssertionsPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  testCasesPage: async ({ page }, use) => {
    await use(new TestCasesPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  modalElement: async ({ page }, use) => {
    await use(new ModalElement(page));
  },
});
