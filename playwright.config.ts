import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config = ({
  //using below what all tests are under tests folder will be executed
  testDir: './tests',
  timeout: 30 * 1000,// given in milliseconds ; override default timeout of 30 seconds for each test; applies to each test
  //for assertions
  expect: {
    timeout: 5000 // max time expect() should wait for the condition to be met
  },
  //to generate html report
 reporter: 'html',
 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    headless : false,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  }
});
//using below we can use the config across the project
 module.exports = config
