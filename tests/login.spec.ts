import { test, expect } from '@playwright/test';

test.only('Amazon has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
});