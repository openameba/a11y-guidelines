const { promises: fs } = require('node:fs');
const path = require('node:path');
const { setTimeout } = require('node:timers/promises');

const puppeteer = require('puppeteer');

const dist = process.argv[2];
const base = process.argv[3];
const pathnames = process.argv.slice(4);

async function capture(pathnames) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
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

    let response;
    try {
      response = await page.goto(url.toString(), {
        waitUntil: 'load',
        timeout: 60000,
      });
    } catch (error) {
      console.error(
        `Error: Page ${url.toString()} loading timed out or failed: ${
          error.message
        }`
      );
      process.exitCode = 3;
      await page.close();
      await browser.close();
      return;
    }

    if (response.status() >= 400) {
      console.error(
        `Error: Page ${url.toString()} returned status code ${response.status()}`
      );
      process.exitCode = 4;
      await page.close();
      await browser.close();
      return;
    }

    const videos = await page.$$('video');

    if (videos.length > 0) {
      // hide some controls
      await page.addStyleTag({
        content: `
          video::-webkit-media-controls-timeline { display: none !important; }
          video::-webkit-media-controls-loading-indicator { display: none !important; }
          video::-webkit-media-controls-current-time-display { display: none !important; }
          video::-webkit-media-controls { visibility: hidden !important; }
          video::-webkit-media-controls-overlay-enclosure { display: none !important; }
        `,
      });

      const tasks = videos.map(async (videoElement) => {
        await page.evaluate((video) => {
          // loaded
          if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            video.addEventListener('canplaythrough', resolve, false);
            // timeout
            setTimeout(resolve, 10000);
          });
        }, videoElement);
      });

      tasks.push(
        page.evaluate(() => {
          const videoElements = document.querySelectorAll('video');
          videoElements.forEach((video) => {
            // hide controls
            video.controls = false;
            // show first frame
            if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
              video.currentTime = 0;
            }
          });
        })
      );

      await Promise.all(tasks);
    }

    const images = await page.$$('img');

    if (images.length > 0) {
      const imageTasks = images.map(async (imageElement) => {
        await page.evaluate((image) => {
          // loaded
          if (image.complete && image.naturalWidth > 0) {
            return Promise.resolve();
          }

          return new Promise((resolve, reject) => {
            image.addEventListener('load', resolve, false);
            image.addEventListener('error', reject, false);
            image.addEventListener('abort', reject, false);
            // timeout
            setTimeout(resolve, 10000);
          });
        }, imageElement);
      });

      try {
        await Promise.all(imageTasks);
      } catch (error) {
        console.error(error);
        process.exitCode = 5;
      }
    }

    await page.screenshot({
      fullPage: true,
      path: output,
    });
  }

  await page.close();
  await browser.close();
}

capture(pathnames);
