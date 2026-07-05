import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [['html'], ['list'], ['json', { outputFile: 'playwright-report/results.json' }]]
    : 'html',
  use: {
    baseURL: process.env.WRANGLER === 'true' ? 'http://localhost:8788' : 'http://localhost:4321',
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command:
      process.env.WRANGLER === 'true'
        ? 'npm run preview'
        : 'npx astro build && npx -y http-server dist/client -p 4321',
    url: process.env.WRANGLER === 'true' ? 'http://localhost:8788' : 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
