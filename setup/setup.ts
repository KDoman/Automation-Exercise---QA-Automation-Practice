import { test } from '@playwright/test';
import { PropertiesPage } from '../classes/properties.page';

test.beforeEach(async ({ page }) => {
  const startPage = new PropertiesPage(page)
  await startPage.openBrowser();
});
