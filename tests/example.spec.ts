import { test, expect } from './baseTest';

test('首页加载测试', async ({ page }) => {
  await page.goto('http://localhost:5173');
  console.log(await page.title())
  await expect(page).toHaveTitle(/playwright/);
});
