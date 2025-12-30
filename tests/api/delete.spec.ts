import { expect } from "@playwright/test";
import { test } from "../../setup/baseTest";

test("API 9: DELETE To Verify Login", async ({ request }) => {
  const response = await request.delete("https://automationexercise.com/api/verifyLogin");
  const json = await response.json();

  expect(json.responseCode).toBe(405);
  expect(json.message).toBe("This request method is not supported.");
});
