// @ts-check
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const TARGET_URL = process.env.TARGET_URL || 'https://zenith-blue.github.io/Sales-AI/';
const OUT_DIR = path.join(__dirname, '..', 'docs', 'screenshots');

const VIEWPORTS = [
  // mobile-320 is intentionally unsupported (design min-width is 375px).
  { name: 'mobile-375',  width: 375,  height: 812 },
  { name: 'mobile-390',  width: 390,  height: 844 },
  { name: 'mobile-414',  width: 414,  height: 896 },
  { name: 'tablet-768',  width: 768,  height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 1366 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
];

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    const filePath = path.join(OUT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: filePath, fullPage: true });
    console.log(`saved: ${filePath} (${vp.width}x${vp.height})`);
    await ctx.close();
  }
  await browser.close();
})();
