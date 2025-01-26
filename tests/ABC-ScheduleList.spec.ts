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
  await page.goto(Authorize.URL);
  await page.locator('fieldset').filter({ hasText: 'Division ID' }).getByRole('textbox').click();
  await page.locator('fieldset').filter({ hasText: 'Division ID' }).getByRole('textbox').fill(Authorize.Division);
  await page.locator('fieldset').filter({ hasText: 'Division ID' }).getByRole('textbox').press('Tab');
  await page.locator('fieldset').filter({ hasText: 'Username' }).getByRole('textbox').fill(Authorize.username);
  await page.locator('fieldset').filter({ hasText: 'Username' }).getByRole('textbox').press('Tab');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill(Authorize.Password);
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  await page.waitForTimeout(10000);
  await page.getByText('Schedule').first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Show all', { exact: true }).check();
  await page.getByText('Ramonita').first();
  await page.waitForTimeout(7000);
  // await page.getByRole('gridcell', { name: 'Ramonita' }).dblclick();
});

//Load all clients test
test('LoadClient', async () => {
  await page.getByText('Client', { exact: true }).click();
  await page.getByRole('button', { name: 'Load All' }).click();
})