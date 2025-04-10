const { promises: fs } = require('node:fs');
const path = require('node:path');

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
      break;
    }

    if (response.status() >= 400) {
      console.error(
        `Error: Page ${url.toString()} returned status code ${response.status()}`
      );
      process.exitCode = 4;
      await page.close();
      break;
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

      await page.evaluate(() => {
        document.querySelectorAll('video').forEach((video) => {
          // hide controls
          video.controls = false;
          // set currentTime
          video.currentTime = 0;
          // wait for video to be ready
          if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
            video.addEventListener(
              'canplaythrough',
              () => {
                video.currentTime = 0;
              },
              { once: true }
            );
          }
        });
      });
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
