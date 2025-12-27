import { expect } from "@playwright/test";
import { test } from "../../setup/baseTest";

test("API 4: PUT To All Brands List", async ({ request }) => {
  const response = await request.put("https://automationexercise.com/api/brandsList");
  const data = await response.json();
  expect(data.responseCode).toBe(405);
  expect(data.message).toBe("This request method is not supported.");
});
