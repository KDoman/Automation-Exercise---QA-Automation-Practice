import { PaymentPage } from "./../pages/payment.page";
import { TestCasesPage } from "../pages/testcases.page";
import { RegisterPage } from "../pages/register.page";
import { CartPage } from "../pages/cart.page";
import { HomePage } from "../pages/home.page";
import { test as base } from "@playwright/test";
import { NavBar } from "../components/navbar.component";
import { ContactPage } from "../pages/contact.page";
import { LoginPage } from "../pages/login.page";
import { ProductPage } from "../pages/product.page";
import { ProductDetailsPage } from "../pages/productdetails.page";
import { ModalElement } from "../components/modal.component";
import { BaseAssertions } from "../utils/base.assertions";
import { CheckoutPage } from "../pages/checkout.page";

type MyPages = {
  navBar: NavBar;
  contactPage: ContactPage;
  baseAssertions: BaseAssertions;
  loginPage: LoginPage;
  productPage: ProductPage;
  homePage: HomePage;
  cartPage: CartPage;
  registerPage: RegisterPage;
  testCasesPage: TestCasesPage;
  productDetailsPage: ProductDetailsPage;
  modalElement: ModalElement;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
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
  baseAssertions: async ({ page }, use) => {
    await use(new BaseAssertions(page));
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
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
});
