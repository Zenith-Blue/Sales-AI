// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Responsive layout audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('horizontal scroll should not occur', async ({ page }, testInfo) => {
    const result = await page.evaluate(() => {
      const docEl = document.documentElement;
      return {
        scrollWidth: docEl.scrollWidth,
        clientWidth: docEl.clientWidth,
        innerWidth: window.innerWidth,
        overflowX: getComputedStyle(document.body).overflowX,
      };
    });

    testInfo.attach('viewport-info', {
      body: JSON.stringify(result, null, 2),
      contentType: 'application/json',
    });

    expect(
      result.scrollWidth,
      `Horizontal scroll detected: scrollWidth=${result.scrollWidth} > innerWidth=${result.innerWidth}`,
    ).toBeLessThanOrEqual(result.innerWidth + 1);
  });

  test('no element should overflow viewport horizontally', async ({ page }, testInfo) => {
    const overflowing = await page.evaluate(() => {
      const vw = window.innerWidth;
      const results = [];
      const all = document.querySelectorAll('body *');
      all.forEach((el) => {
        const style = getComputedStyle(el);
        if (style.position === 'fixed' || style.display === 'none' || style.visibility === 'hidden') return;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        if (rect.right > vw + 1 || rect.left < -1) {
          results.push({
            tag: el.tagName.toLowerCase(),
            class: typeof el.className === 'string' ? el.className : '',
            id: el.id || '',
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          });
        }
      });
      return results.slice(0, 50);
    });

    testInfo.attach('overflowing-elements', {
      body: JSON.stringify(overflowing, null, 2),
      contentType: 'application/json',
    });

    expect(
      overflowing,
      `${overflowing.length} elements overflow viewport horizontally`,
    ).toEqual([]);
  });

  test('full-page screenshot', async ({ page }, testInfo) => {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('full-page', { body: screenshot, contentType: 'image/png' });
  });

  test('no broken images', async ({ page }, testInfo) => {
    const broken = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => ({ src: img.src, alt: img.alt }));
    });

    testInfo.attach('broken-images', {
      body: JSON.stringify(broken, null, 2),
      contentType: 'application/json',
    });

    expect(broken, `${broken.length} images failed to load`).toEqual([]);
  });
});
