import { expect } from "@playwright/test";
import { test } from "../../setup/baseTest";
import allproducts from "../api/allProducts.json";
import allBrands from "../api/allBrands.json";

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
