import { test, expect } from '@playwright/test';

test.describe('Shang-Wei (David) Lin Portfolio Site E2E Tests', () => {
  test('should load the Chinese version by default and show key info', async ({ page }) => {
    await page.goto('/');

    // Check title containing David Lin / 林尚緯
    await expect(page).toHaveTitle(/林尚緯/);

    // Check Chinese hero text
    await expect(page.locator('h1')).toContainText('林尚緯 David Lin');
    await expect(page.locator('h2')).toContainText('資深後端工程師');

    // Confirm that Lawsnote is shown in the experience list
    await expect(page.locator('#experience')).toContainText('Lawsnote 七法股份有限公司');
  });

  test('should switch language to English and show English details', async ({ page }) => {
    await page.goto('/');

    // Click language switcher
    const switcher = page.locator('#lang-switcher');
    await expect(switcher).toContainText('English');
    await switcher.click();

    // Verify URL contains /en
    await expect(page).toHaveURL(/\/en/);

    // Verify English title & contents
    await expect(page).toHaveTitle(/David.*Lin/);
    await expect(page.locator('h1')).toContainText('David Lin');
    await expect(page.locator('h2')).toContainText('Senior Backend Engineer');

    // Confirm that Lawsnote achievements are in English
    await expect(page.locator('#experience')).toContainText('Lawsnote Inc.');
    await expect(page.locator('#experience')).toContainText('Architecture & Scaling:');
  });

  test('should submit the contact form successfully', async ({ page }) => {
    // Intercept contact API request
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Message received successfully!' }),
      });
    });

    await page.goto('/');

    // Fill contact form
    await page.fill('#name', 'Test Recruiter');
    await page.fill('#email', 'recruiter@example.com');
    await page.fill(
      '#message',
      'Hi David, we are impressed by your spider-man2 crawler project and would love to discuss a remote role with you.',
    );

    // Click send message
    await page.click('#submit-btn');

    // Verify success message is visible
    const successMsg = page.locator('#form-success');
    await expect(successMsg).toBeVisible();
    await expect(successMsg).toContainText('感謝您的留言');
  });
});
