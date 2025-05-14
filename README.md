# dealls_QA
1.	Outline test strategy
a.	Types of testing needed :
i.	Functional testing : testing every function of the component of new feature. Because highly possible the new feature does not have function as expected.
ii.	Black box testing : testing without knowing the code behind of the website’s new features. Positioning as a real customer that have no authorities to reach the code
iii.	Regression testing : testing whether the new feature is smoothly integrated with other feature, for example for login, register new member, from home page to the new feature, and action after reaching the new feature such as contacting mentor
b.	Key areas of focuses
i.	Register page : create new member identity & background
ii.	Login page : login using registered member. Testing whether the data is already integrated or not
iii.	Searching for mentors : testing whether the mentors are related with the search based on related topic and level
iv.	Create mentoring schedule : testing whether the website is able to create the schedule with selected mentor, and test with creating several schedule in the same time. The result expected is website cannot create the different schedule in the same time
c.	Environments 
i.	Browser : google chrome version 136.0 & Microsoft edge version 136.0
ii.	Device : 
1.	PC : OS windows 11
2.	Handphone : OS Android 14
iii.	Automation : playwright using javascript language
d.	Assumption : …
2.	Identify high-level Test Scenario
i.	Register page
1.	Register using correct username and correct password based on requirement
Coding :

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
  await page.fill('input[type="Whatsapp Number"]', '6281234567890');
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



2.	Register using incorrect username and correct password based on requirement
Coding :

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


3.	Register using correct username and incorrect password based on requirement

Code :

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


4.	Register using incorrect username and incorrect password based on requirement
ii.	Log in page
1.	Login using correct username and correct password based on registered member data
2.	Login using incorrect username and correct password based on registered member data
3.	Login using correct username and incorrect password based on registered member data
4.	Login using incorrect username and incorrect password based on registered member data
iii.	Searching mentor
1.	Searching mentor based on related topic
2.	Searching mentor based on level
iv.	Mentoring session schedule
1.	Create mentoring schedule with selected mentor based on related topic
2.	Create 2 or more mentoring schedule that have the same time
b.	
