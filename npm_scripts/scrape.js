const { promises: fs } = require('fs');
const path = require('path');

const puppeteer = require('puppeteer');

const dist = process.argv[2];
const base = process.argv[3];
const pathnames = process.argv.slice(4);

async function capture(pathnames) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (const pathname of pathnames) {
    const url = new URL(pathname, base);
    console.log(url.toString());

    const file = path.join(dist, pathname);
    console.log(file);

    const dir = path.dirname(file);
    console.log(dir);

    const output = path.join(dir, `${path.basename(file, '.html')}.png`);
    console.log(output);

    await fs.mkdir(dir, { recursive: true });

    await page.goto(url.toString(), { waitUntil: 'networkidle0' });

    const videos = await page.$$('video');

    if (videos.length > 0) {
      await page.waitForTimeout(1000);
    }

    await page.screenshot({
      fullPage: true,
      path: output
    });
  }

  await page.close();
  await browser.close();
}

capture(pathnames);
