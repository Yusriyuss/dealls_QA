
const { chromium, firefox, webkit } = require('playwright');

(async () => {
  // Choose the browser you want to use: chromium, firefox, or webkit
  const browserType = chromium; // Change to firefox or webkit as needed
  const browser = await browserType.launch({ headless: false }); // Set headless: true for headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the mentoring page
  await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');

  // Click the "Register" button
  await page.click(".mt-6 > div:nth-of-type(1) .text-white"); // Adjust selector if necessary

  // Wait for the registration form to appear
  await page.fill('id=fullName', 'John Doe'); // Adjust selector if necessary
  await page.click('id=jobSearchStatus');
  await page.getByRole('type', {name : 'hired'}).click();

  // Fill in identitiy fields
  await page.fill('input[type="Whatsapp Number"]', '081234567890');
  await page.fill('input[type="email"]', 'greenwater.yusri@gmail.com'); // Adjust selector if necessary
  await page.fill('input[type="Last Education Institution"]', 'Oxford University'); // Adjust selector if necessary
  await page.click('id=jobSearchStatus');
  await page.getByRole('type', {name : 'fresh graduate'}).click();

  // Submit the registration form
  await page.click('button[type="selanjutnya"]'); // Adjust selector if necessary

  // Optional: wait for navigation or confirmation
  await page.waitForTimeout(5000); // Adjust as needed

  await browser.close();
})();
