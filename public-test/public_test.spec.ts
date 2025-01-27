import { test, expect } from '@playwright/test';
import {Authorize} from '../cred.json'

test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  // await page.close();
});

//View Schedule List
test('test', async () => {
  await page.setViewportSize({
    width: 1536,
    height: 864,
  });
  await page.goto(Authorize.URL2);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(Authorize.username2);
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill(Authorize.password2);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Practice', exact: true }).click();
  await page.getByRole('link', { name: 'Test Exceptions' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('textbox').nth(1).fill('noodle');
  await page.getByRole('button', { name: 'Save' }).click();
});