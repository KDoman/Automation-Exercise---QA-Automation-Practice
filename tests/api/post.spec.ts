import { expect } from "@playwright/test";
import { test } from "../../setup/baseTest";
import { loginPageData, registerPageData } from "../../utils/data";

test("API 2: PUT To All Products List", async ({ request }) => {
  const response = await (await request.post("https://automationexercise.com/api/productsList")).json();
  expect(response.responseCode).toBe(405);
  expect(response.message).toBe("This request method is not supported.");
});

test("API 5: POST To Search Product", async ({ request }) => {
  const parameter = "tshirt";

  const response = await request.post("https://automationexercise.com/api/searchProduct", {
    form: {
      search_product: parameter,
    },
  });

  const json = await response.json();
  const products = json.products;

  await products.map((product: { name: string }) => {
    const lowercaseName = product.name.toLowerCase();
    expect(lowercaseName.replace(/[\s-]/g, "")).toContain(parameter);
  });
});

test("API 6: POST To Search Product without search_product parameter", async ({ request }) => {
  const response = await request.post("https://automationexercise.com/api/searchProduct");
  const json = await response.json();
  expect(json.responseCode).toBe(400);
  expect(json.message).toBe("Bad request, search_product parameter is missing in POST request.");
});

test("API 7: POST To Verify Login with valid details", async ({ request }) => {
  const response = await request.post("https://automationexercise.com/api/verifyLogin", {
    form: {
      email: loginPageData.correctLogin,
      password: loginPageData.correctPassword,
    },
  });
  const json = await response.json();
  expect(json.responseCode).toBe(200);
  expect(json.message).toBe("User exists!");
});

test("API 8: POST To Verify Login without email parameter", async ({ request }) => {
  const response = await request.post("https://automationexercise.com/api/verifyLogin", {
    form: {
      password: loginPageData.correctPassword,
    },
  });
  const json = await response.json();
  expect(json.responseCode).toBe(400);
  expect(json.message).toBe("Bad request, email or password parameter is missing in POST request.");
});

test("API 10: POST To Verify Login with invalid details", async ({ request }) => {
  const response = await request.post("https://automationexercise.com/api/verifyLogin", {
    form: {
      email: loginPageData.wrongLogin,
      password: loginPageData.wrongPassword,
    },
  });
  const json = await response.json();
  expect(json.responseCode).toBe(404);
  expect(json.message).toBe("User not found!");
});

test("API 11: POST To Create/Register User Account", async ({ request }) => {
  const response = await request.post("https://automationexercise.com/api/createAccount", {
    form: {
      name: registerPageData.notRegisterName,
      email: registerPageData.notRegisterEmail,
      password: "passwordTest",
      title: "Mr",
      birth_date: 21,
      birth_month: 10,
      birth_year: 1999,
      firstname: "testFirstName",
      lastname: "testLastName",
      company: "companyTest",
      address1: "address1Test",
      address2: "address2Test",
      country: "contryTest",
      zipcode: "00-000",
      state: "stateTest",
      city: "cityTest",
      mobile_number: "111-222-333",
    },
  });
  const json = await response.json();
  expect(json.responseCode).toBe(201);
  expect(json.message).toBe("User created!");
});

test("API 12: DELETE METHOD To Delete User Account", async ({ request }) => {
  await request.post("https://automationexercise.com/api/createAccount", {
    form: {
      name: registerPageData.notRegisterName,
      email: registerPageData.notRegisterEmail,
      password: "passwordTest",
      title: "Mr",
      birth_date: 21,
      birth_month: 10,
      birth_year: 1999,
      firstname: "testFirstName",
      lastname: "testLastName",
      company: "companyTest",
      address1: "address1Test",
      address2: "address2Test",
      country: "contryTest",
      zipcode: "00-000",
      state: "stateTest",
      city: "cityTest",
      mobile_number: "111-222-333",
    },
  });

  const response = await request.delete("https://automationexercise.com/api/deleteAccount", {
    form: {
      email: registerPageData.notRegisterEmail,
      password: "passwordTest",
    },
  });

  const json = await response.json();
  expect(json.responseCode).toBe(200);
  expect(json.message).toBe("Account deleted!");
});
