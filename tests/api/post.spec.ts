import { expect } from "@playwright/test";
import { test } from "../../setup/baseTest";

test("API 2: PUT To All Products List", async ({ request }) => {
  const response = await (await request.post("https://automationexercise.com/api/productsList")).json();

  expect(response.responseCode).toBe(405);
  expect(response.message).toBe("This request method is not supported.");
});
