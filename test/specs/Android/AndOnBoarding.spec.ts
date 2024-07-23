import AndroidPage from "../../pageobjects/androidPageObjects/AndroidSanity/AndroidPage";
import AllureReporter from "@wdio/allure-reporter";

describe("Android sanity Test Cases", () => {
  it("OnBoarding Test Cases", async () => {
    await (
      await AndroidPage.useWithoutAnAccountText
    ).combinedClick("Use without an account");
    await (
      await AndroidPage.gotItButtonInPrivacyPage
    ).combinedClick("GOT IT button");
    await (
      await AndroidPage.googleSearchTextField
    ).setValue("https:://lionsgateplay.com/", "URL");
    await (
      await AndroidPage.firstSuggestionUnderSearchField
    ).combinedClick("First Suggestion");
    await browser.pause(3000);

    await (
      await AndroidPage.lionsgateplayTextInMainPage
    ).verifyElementIsDisplayedTrue("Logo");
    AllureReporter.addStep("Login page is displaywd");
    await console.log(`Home Page is displayed`);
  });

  it.only("Validate user is redirected for Non Subscribed user", async () => {
    await AndroidPage.validateHomePageIsDisplayedOrNot();
  });

  it("should measure page load time on Android", async () => {
    // Navigate to the page or interact with your app
    // Make sure your app is in a state where the page load event is relevant
    // Example: launch the app
    // browser.execute('mobile: launchApp', { appId: 'your.app.id' });

    // Execute JavaScript to mark the start time
    const startTime = browser.execute(() => performance.now());

    // Wait for the page to load completely or for relevant elements to appear
    // Example: wait for an element to be visible
    // $('yourElementSelector').waitForDisplayed({ timeout: 10000 });

    // Execute JavaScript to mark the end time
    const endTime = await browser.execute(() => performance.now());

    // Calculate the page load time
    const pageLoadTime = endTime - (await startTime);

    console.log("Page load time:", pageLoadTime, "milliseconds");
  });

  it("should measure launching page screen time on Android", async () => {
    // Measure the time taken for the app to launch
    const startTime = Date.now();
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const formattedTime = `${seconds.toString().padStart(2, "0")}`;
    console.log("Current time with seconds:", formattedTime);
    // Launch the application
    // You can use Appium's `startActivity` method to launch your application
    // Replace 'your.app.package' and 'your.app.activity' with your app's package name and activity name
    // browser.execute("mobile: startActivity", {
    //   appPackage: "com.lionsgateplay.videoapp",
    //   appActivity: "com.parsifal.starz.ui.features.launcher.LauncherActivity",
    // });

    // Wait for the launching page to be displayed
    // You can use WebDriverIO's `waitForDisplayed` or other synchronization methods
    // Example: wait for an element to be visible on the launching page
    // $('yourElementSelector').waitForDisplayed({ timeout: 10000 });

    // Measure the time after the launching page is displayed
    const endTime = Date.now();
    const endTTime = new Date();

    const seconds1 = currentTime.getSeconds();
    const formattedTime1 = `${seconds1.toString().padStart(2, "0")}`;
    console.log("Current time with seconds:", formattedTime1);

    // Calculate the launching page screen time
    const launchingPageScreenTime = formattedTime1 + formattedTime;

    console.log(
      "Launching page screen time:",
      launchingPageScreenTime,
      "milliseconds"
    );
    await browser.pause(6000);
    await (await AndroidPage.titleLogoInHomePage).isDisplayed();
    console.log("home page is displayed");
  });

  it("should print current time with seconds", () => {
    // Get the current time
    const currentTime = new Date();

    // Extract hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format the time string with leading zeros if needed
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Print the formatted time
    console.log("Current time with seconds:", formattedTime);
  });
});
