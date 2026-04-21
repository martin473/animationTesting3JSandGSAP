import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const outDir = fileURLToPath(new URL("../public/case-study/", import.meta.url));
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const email = process.env.LAWBEE_EMAIL;
const password = process.env.LAWBEE_PASSWORD;

if (!email || !password) {
  throw new Error("Missing LAWBEE_EMAIL or LAWBEE_PASSWORD environment variables.");
}

async function signIn(page) {
  await page.goto("https://www.lawbee.org/login", { waitUntil: "networkidle" });
  const emailInput = page.locator('input[type="email"], input[name="email"], #email').first();
  const passwordInput = page.locator('input[type="password"], input[name="password"], #password').first();

  await emailInput.waitFor({ state: "visible", timeout: 15000 });
  await emailInput.fill(email);
  await passwordInput.fill(password);

  await page.getByRole("button", { name: /^log in$/i }).click();
  await page.waitForURL("https://www.lawbee.org/", { timeout: 15000 });
  await page.goto("https://www.lawbee.org/mybills", { waitUntil: "networkidle" });
  const signedOut = await page.getByRole("link", { name: /^sign in$/i }).isVisible();
  if (signedOut) {
    throw new Error("Login did not persist. Still seeing signed-out state.");
  }
}

const desktopPage = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await desktopPage.goto("https://www.lawbee.org", { waitUntil: "networkidle" });
await desktopPage.screenshot({
  path: path.join(outDir, "lawbee-home-desktop-auth.png"),
  fullPage: false,
});

await desktopPage.goto("https://www.lawbee.org/login", { waitUntil: "networkidle" });
await desktopPage.waitForTimeout(1000);
await desktopPage.screenshot({
  path: path.join(outDir, "lawbee-login-desktop.png"),
  fullPage: false,
});

await signIn(desktopPage);
await desktopPage.goto("https://www.lawbee.org", { waitUntil: "networkidle" });
const desktopSearch = desktopPage.getByPlaceholder("Search");
await desktopSearch.waitFor({ state: "visible", timeout: 15000 });
await desktopSearch.fill("industry");
await desktopSearch.press("Enter");
await desktopPage.waitForTimeout(2500);
await desktopPage.screenshot({
  path: path.join(outDir, "lawbee-search-industry-desktop-auth.png"),
  fullPage: false,
});

await desktopPage.goto("https://www.lawbee.org/mybills", { waitUntil: "networkidle" });
await desktopPage.waitForTimeout(1000);
await desktopPage.screenshot({
  path: path.join(outDir, "lawbee-mybills-desktop-auth.png"),
  fullPage: false,
});

const mobilePage = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 3,
});

await mobilePage.goto("https://www.lawbee.org", { waitUntil: "networkidle" });
await mobilePage.screenshot({
  path: path.join(outDir, "lawbee-home-mobile-auth.png"),
  fullPage: false,
});

await mobilePage.goto("https://www.lawbee.org/login", { waitUntil: "networkidle" });
await mobilePage.waitForTimeout(1000);
await mobilePage.screenshot({
  path: path.join(outDir, "lawbee-login-mobile.png"),
  fullPage: false,
});

await signIn(mobilePage);
await mobilePage.goto("https://www.lawbee.org", { waitUntil: "networkidle" });
const mobileSearch = mobilePage.getByPlaceholder("Search");
await mobileSearch.waitFor({ state: "visible", timeout: 15000 });
await mobileSearch.fill("industry");
await mobileSearch.press("Enter");
await mobilePage.waitForTimeout(2500);
await mobilePage.screenshot({
  path: path.join(outDir, "lawbee-search-industry-mobile-auth.png"),
  fullPage: false,
});

await mobilePage.goto("https://www.lawbee.org/mybills", { waitUntil: "networkidle" });
await mobilePage.waitForTimeout(1000);
await mobilePage.screenshot({
  path: path.join(outDir, "lawbee-mybills-mobile-auth.png"),
  fullPage: false,
});

await browser.close();
console.log("Wrote desktop and mobile Lawbee screenshots for home, login, search, and mybills.");
