const puppeteer = require("puppeteer");
const winston = require("winston");

// Create a logger instance
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

async function test() {
  logger.info("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  logger.info("Navigating to https://www.google.com/...");
  await page.goto("https://www.google.com/");

  logger.info("Closing browser...");
  await browser.close();

  logger.info("Browser navigation completed");

  console.log("Test completed");
}

test();
