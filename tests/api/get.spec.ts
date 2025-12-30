import { expect } from "@playwright/test";
import { test } from "../../setup/baseTest";
import allproducts from "../api/allProducts.json";
import allBrands from "../api/allBrands.json";
import { loginPageData } from "../../utils/data";

test("API 1: Get All Products List", async ({ request }) => {
  const response = await request.get("https://automationexercise.com/api/productsList");
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.products).toStrictEqual(allproducts);
});

test("API 3: Get All Brands List", async ({ request }) => {
  const response = await request.get("https://automationexercise.com/api/brandsList");
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.brands).toStrictEqual(allBrands);
});

test("API 14: GET user account detail by email", async ({ request }) => {
  const response = await request.get("https://automationexercise.com/api/getUserDetailByEmail", {
    params: {
      email: loginPageData.correctLogin,
    },
  });
  const json = await response.json();
  expect(json.responseCode).toBe(200);
  expect(json.user).toMatchObject({
    id: expect.anything(),
    name: expect.anything(),
    email: expect.anything(),
    title: expect.anything(),
    birth_day: expect.anything(),
    birth_month: expect.anything(),
    birth_year: expect.anything(),
    first_name: expect.anything(),
    last_name: expect.anything(),
    company: expect.anything(),
    address1: expect.anything(),
    address2: expect.anything(),
    country: expect.anything(),
    state: expect.anything(),
    city: expect.anything(),
    zipcode: expect.anything(),
  });
});
