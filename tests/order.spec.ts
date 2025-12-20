import { test } from "../setup/baseTest";
import { registerPageData, loginPageData } from "../utils/data";

test("Test Case 14: Place Order: Register while Checkout", async ({ navBar, productPage, modalElement, cartPage, registerPage, homePage, checkoutPage, paymentPage }) => {
  await navBar.clickOnTab(" Products");
  await productPage.clickOnAddToCartButton();
  await modalElement.clickOnViewCartLink();
  await cartPage.clickProceedToCheckoutButton();
  await modalElement.clickOnRegisterLoginButton();
  await registerPage.registerProcess(registerPageData.notRegisterName, registerPageData.notRegisterEmail);
  await homePage.expectUserToBeLoggedIn();
  await navBar.clickOnTab(" Cart");
  await cartPage.clickProceedToCheckoutButton();
  await checkoutPage.enterComment("Thank you for the products!");
  await checkoutPage.placeOrderClick();
  await paymentPage.fillAndConfirmOrderPayment();
  await paymentPage.expectSuccessMessage();
});

test("Test Case 15: Place Order: Register before Checkout", async ({ navBar, productPage, modalElement, cartPage, registerPage, checkoutPage, paymentPage, homePage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await registerPage.registerProcess(registerPageData.notRegisterName, registerPageData.notRegisterEmail);
  await homePage.expectUserToBeLoggedIn();
  await navBar.clickOnTab(" Products");
  await productPage.clickOnAddToCartButton();
  await modalElement.clickOnViewCartLink();
  await cartPage.clickProceedToCheckoutButton();
  await checkoutPage.enterComment("Test comment!");
  await checkoutPage.placeOrderClick();
  await paymentPage.fillAndConfirmOrderPayment();
  await paymentPage.expectSuccessMessage();
});

test("Test Case 16: Place Order: Login before Checkout", async ({ navBar, productPage, modalElement, cartPage, loginPage, homePage, checkoutPage, paymentPage }) => {
  await navBar.clickOnTab(" Signup / Login");
  await loginPage.login(loginPageData.correctLogin, loginPageData.correctPassword);
  await homePage.expectUserToBeLoggedIn();
  await navBar.clickOnTab(" Products");
  await productPage.clickOnAddToCartButton();
  await modalElement.clickOnViewCartLink();
  await cartPage.clickProceedToCheckoutButton();
  await checkoutPage.enterComment("Order after login");
  await checkoutPage.placeOrderClick();
  await paymentPage.fillAndConfirmOrderPayment();
  await paymentPage.expectSuccessMessage();
});
