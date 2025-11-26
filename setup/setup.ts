import { test } from '@playwright/test';
import { StartPage } from '../classes/start.page';

export const url = 'https://automationexercise.com/';

test.beforeEach(async ({ page }) => {
  const startPage = new StartPage(page)
  await startPage.openBrowser();
});
