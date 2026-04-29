// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const TARGET_URL = process.env.TARGET_URL || 'https://zenith-blue.github.io/Sales-AI/';

const baseChromium = {
  ...devices['Desktop Chrome'],
};

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: TARGET_URL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'mobile-320',  use: { ...baseChromium, viewport: { width: 320,  height: 800  }, isMobile: false, hasTouch: true } },
    { name: 'mobile-375',  use: { ...baseChromium, viewport: { width: 375,  height: 812  }, isMobile: false, hasTouch: true } },
    { name: 'mobile-390',  use: { ...baseChromium, viewport: { width: 390,  height: 844  }, isMobile: false, hasTouch: true } },
    { name: 'mobile-414',  use: { ...baseChromium, viewport: { width: 414,  height: 896  }, isMobile: false, hasTouch: true } },
    { name: 'tablet-768',  use: { ...baseChromium, viewport: { width: 768,  height: 1024 }, isMobile: false, hasTouch: true } },
    { name: 'tablet-1024', use: { ...baseChromium, viewport: { width: 1024, height: 1366 }, isMobile: false, hasTouch: true } },
    { name: 'desktop-1280', use: { ...baseChromium, viewport: { width: 1280, height: 800  } } },
    { name: 'desktop-1440', use: { ...baseChromium, viewport: { width: 1440, height: 900  } } },
    { name: 'desktop-1920', use: { ...baseChromium, viewport: { width: 1920, height: 1080 } } },
  ],
});
