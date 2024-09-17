import ParentalControlPage from "../../pageobjects/webSanityPages/ParentalControlPage"
import onBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";
import { expect as expect } from "chai";

describe("Parental Control Test Cases", async()=>{

  it("Verify that parental control menu is displayed under Select Parental Control from below section", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");

    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");

    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");

    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    const parentalControlOptions =
    await ParentalControlPage.parentalControlOptions;
    const Length1 = parentalControlOptions.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await parentalControlOptions[i].getText();
      driver.logUtil("Pass", `Seasons :${arr1[i]}`);
    }
    driver.logUtil("Pass","parental Control ratings are displayed.");
  });

  it(`Verify that user is able to enable parental control options`, async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(15)).combinedClick("UA-13 age rating");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    await (await ParentalControlPage.contentHeadersAccordingToRatings).scrollIntoView();
    await (await ParentalControlPage.contentHeadersAccordingToRatings).verifyElementIsDisplayedTrue("Top 10 In India");
    await (await ParentalControlPage.contentRailHeadersForTopInIndia(1)).combinedClick("Content selected From Tray List");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).combinedClick("Shows Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).combinedClick("Movies Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);

    // Select the carousel header based on the random index
    const carouselHeader = arr1[randomIndex];
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader).scrollIntoView());
    // Construct XPath selector to find and click the element with the selected header text
  await(await ParentalControlPage.contentRailHeaders(carouselHeader,1)).combinedClick("First content");
  await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
  });

  it("Verify that user is able to disable parental control options", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(15)).combinedClick("UA-13 age rating");
    // await (await ParentalControlPage.parentalSettingsCanChangeAratingText).verifyElementIsDisplayedTrue("Change parental control to A");
    await (await ParentalControlPage.parentalSettingsCanChangeAratingText).findElementAndVerifyText("To access the full settings, please ensure your Parental Control is set to 'A'");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(18)).combinedClick("A age rating ");
    await (await ParentalControlPage.parentalControlChangePasswordField).setValue(WebTestData.loginPage_Credentials.subscribed_Password,"password Field");
    await (await ParentalControlPage.submitButtonInParentPasswordPopupPage).combinedClick("submit Button");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).waitForDisplayed();
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).scrollIntoView();
    await (await ParentalControlPage.parentalSettingsCanChangeAratingText).verifyElementIsDisplayedFalse("Change parental control to A");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);

    // Select the carousel header based on the random index
    const carouselHeader = arr1[randomIndex];
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader).scrollIntoView());
    // Construct XPath selector to find and click the element with the selected header text
  await(await ParentalControlPage.contentRailHeaders(carouselHeader,1)).combinedClick("First content");
  await (await ParentalControlPage.AgeRatingsFromContentDetailScreen("A")).findElementAndVerifyText("A");
  });

  it("Verify that appropriate contents displayed accross landing screens based on the PC option selected", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Username,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(7)).combinedClick("UA-7 age rating");
    // await (await ParentalControlPage.parentalSettingsCanChangeAratingText).verifyElementIsDisplayedTrue("Change parental control to A");
    await (await ParentalControlPage.parentalSettingsCanChangeAratingText).findElementAndVerifyText("To access the full settings, please ensure your Parental Control is set to 'A'");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);

    // Select the carousel header based on the random index
    const carouselHeader = arr1[randomIndex];
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
  await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
  await (await ParentalControlPage.AgeRatingsFromContentDetailScreen("UA-7")).findElementAndVerifyText("UA-7" ?? "U");
  await (
    await OnBoardingPage.settingsButtonWithTooltip
  ).combinedClick("Settings Tooltip");
  await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
  await (await ParentalControlPage.selectparentalOptionAccordingToAge(18)).combinedClick("A age rating ");
    await (await ParentalControlPage.parentalControlChangePasswordField).setValue(WebTestData.loginPage_Credentials.subscribed_Password,"password Field");
    await (await ParentalControlPage.submitButtonInParentPasswordPopupPage).combinedClick("submit Button");
  });


  it("Verify that appropriate contents displayed in Continue watching rail", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(15)).combinedClick("UA-13 age rating");
    await (await OnBoardingPage.navbarItemsInMainPage("Movies")).combinedClick("Movies Tab");
    const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);

    // Select the carousel header based on the random index
    const carouselHeader = arr1[randomIndex];
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
  await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
  const contentTitle = await (
    await OnBoardingPage.contentDetailTitleText
  ).getText();
  driver.logUtil("Pass", `Description : ${contentTitle}`);
  await (
    await OnBoardingPage.playButtonInDetailScreen
  ).combinedClick("Play Button");
  await browser.pause(3000);
  await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
  await browser.pause(1000);
  await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
  await (
    await OnBoardingPage.resumebuttonInPlayerScreen
  ).waitForDisplayed();
  await (
    await OnBoardingPage.resumebuttonInPlayerScreen
  ).combinedClick("Resume button");
  // await (await OnBoardingPage.centerOfPLayerScreen).waitForDisplayed();
  // await (await OnBoardingPage.centerOfPLayerScreen).moveTo();
  (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  console.log(timer);
  


  const timeString = timer;

  // Split the string by "/"
  const splitTime = timeString.split("/");

  // Extract the time after the slash
  const timeAfterSlash = splitTime[1].trim();

  // Split the time by ":" to extract hours, minutes, and seconds
  const timeParts = timeAfterSlash.split(":");

  // Convert hours and minutes to minutes and add them together
  const minutes = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);

  console.log("Total Minutes:", minutes);

 const seconds=parseInt(timeParts[2]);
  console.log(parseInt(timeParts[2]));

  // const scrollbar = await (await OnBoardingPage.seekbar).combinedClick("seek bar");
  //     // // const scrollbar = await browser.$('//xpath/to/scrollbar'); // Replace XPath with actual XPath
  //     // // const pressright = 5;
  //     // // Simulate scrolling right to fast forward
  //     // // await scrollbar.dragAndDrop({ xOffset: 100, yOffset: 0 }); // Adjust xOffset as needed
  //     // for (let i = 0; i < 5; i++) {
  //     //   await browser.keys(["ArrowRight"]);
  //     //   console.log(i);
 await browser.pause(5000);
  //     // }

      const skipDurationInMinutes = 4;
      const secondsPerPress = 5;
      const totalSecondsToSkip = skipDurationInMinutes * 60;
      const pressesNeeded = totalSecondsToSkip / secondsPerPress;
      console.log(pressesNeeded);

  for (let i = 0; i < pressesNeeded; i++) {
    await browser.keys(["ArrowRight"]);
    await browser.pause(100); // Small pause to ensure the player registers each key press
    console.log(i);
  }
await browser.pause(3000);
await (await OnBoardingPage.backButtonInPlayerScreen).combinedClick("backButton");
  // await (await ParentalControlPage.AgeRatingsFromContentDetailScreen("UA-7" ? "U" : "UA-13")).findElementAndVerifyText("UA-7" ? "U" : "UA-13");
  await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    await (await ParentalControlPage.contentHeadersList("Continue Watching")).scrollIntoView();
        const courouselbanners = await ParentalControlPage.continueWatchingRailContents;
    const Length = courouselbanners.length;
    console.log(Length);
    const arr: string[] = [];
    for (let i = 0; i < Length; i++) {
      arr.push(await courouselbanners[i].getAttribute("alt"));
      driver.logUtil("Pass", `Corousels:-${arr[i]}`);
      
    }
    let data: string[] = await Array.from(new Set(arr));
    console.log(data.length);
    driver.logUtil("Pass", `Corousels content Names:- ${data.join(", ")}`);
expect(data.includes(contentTitle)).to.be.true;
driver.logUtil("Pass", `contents are matched in Continue watching Rail contents`);
await (
  await OnBoardingPage.settingsButtonWithTooltip
).combinedClick("Settings Tooltip");
await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
await (await ParentalControlPage.selectparentalOptionAccordingToAge(18)).combinedClick("A age rating ");
  await (await ParentalControlPage.parentalControlChangePasswordField).setValue(WebTestData.loginPage_Credentials.subscribed_Password,"password Field");
  await (await ParentalControlPage.submitButtonInParentPasswordPopupPage).combinedClick("submit Button");
  });

  it("Verify that Subscribe popup is displayed post tapping on  episode card, Play CTA for Non subscribed user", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Sign up")
    ).combinedClick("Sign Up button");
    await (
      await OnBoardingPage.createAccountTextUnderSignUpPage
    ).verifyElementIsDisplayedTrue("Create Your Account Page");
    await (
      await OnBoardingPage.createAccountTextUnderSignUpPage
    ).findElementAndVerifyText("Create your account");
    await (
      await OnBoardingPage.signupEmailTextField
    ).setValue(
      "Lion" + (await onBoardingPage.generateRandomString(4)) + "@yopmail.com",
      "Sign up Username"
    );
    await (
      await OnBoardingPage.signupPasswordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Password Field"
    );
    await (
      await OnBoardingPage.continueButtonInCreateYourAccountPage
    ).verifyElementIsDisplayedTrue("Continute Button");
    await (
      await OnBoardingPage.continueButtonInCreateYourAccountPage
    ).verifyElementIsEnabledTrue("Continue Button");
    await (
      await OnBoardingPage.continueButtonInCreateYourAccountPage
    ).combinedClick("Continue Button");
    await (
      await OnBoardingPage.payLaterOption
    ).combinedClick("Pay later Option");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(15)).combinedClick("UA-13 age rating");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    await (await ParentalControlPage.contentHeadersAccordingToRatings).scrollIntoView();
    await (await ParentalControlPage.contentHeadersAccordingToRatings).verifyElementIsDisplayedTrue("Top 10 In India");
    await (await ParentalControlPage.contentRailHeadersForTopInIndia(1)).combinedClick("Content selected From Tray List");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).combinedClick("Shows Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).combinedClick("Movies Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);
    const carouselHeader = arr1[randomIndex];
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader).scrollIntoView());
  await(await ParentalControlPage.contentRailHeaders(carouselHeader,1)).combinedClick("First content");
  await (
    await OnBoardingPage.playButtonInDetailScreen
  ).combinedClick("Play Button");
  await browser.pause(3000);
  const texter=await (await ParentalControlPage.activateLionsgatePlayPopupForNonSubscribedUser
  ).getText();
  console.log(texter);
  await (await ParentalControlPage.activateLionsgatePlayPopupForNonSubscribedUser).findElementAndVerifyText("To watch this content, please enter valid payment details to activate your account.");
  await (await ParentalControlPage.activateLionsGatePlayButtonInPopup).findElementAndVerifyText("ACTIVATE LIONSGATEPLAY");
  await (await ParentalControlPage.activateLionsGatePlayButtonInPopup).verifyElementIsDisplayedTrue("ACTIVATE LIONSGATEPLAY Button");

  });

  it("Verify that user is able to add content to watchlist, play the content post applying parental control  for subscribed user", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).combinedClick("Setting Option");
    await (await ParentalControlPage.parentalControlOptionUnderSettingsPage).findElementAndVerifyText("PARENTAL CONTROL");
    await (await ParentalControlPage.selectParentalControlText).findElementAndVerifyText("Select Parental Control from below:");
    await (await ParentalControlPage.selectparentalOptionAccordingToAge(15)).combinedClick("UA-13 age rating");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
    await (await ParentalControlPage.contentHeadersAccordingToRatings).scrollIntoView();
    await (await ParentalControlPage.contentHeadersAccordingToRatings).verifyElementIsDisplayedTrue("Top 10 In India");
    await (await ParentalControlPage.contentRailHeadersForTopInIndia(1)).combinedClick("Content selected From Tray List");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).combinedClick("Shows Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).combinedClick("Movies Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (await ParentalControlPage.AgeRatingFromContentDetailScreen).findElementAndVerifyText("UA-13");
    await (await OnBoardingPage.navbarItemsInMainPage("Home")).combinedClick("Home Tab");
   const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);

    // Select the carousel header based on the random index
    const carouselHeader = arr1[randomIndex];
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
  await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
  const contentTitle = await (
    await OnBoardingPage.contentDetailTitleText
  ).getText();
  driver.logUtil("Pass", `Description : ${contentTitle}`);
  // await (
  //   await OnBoardingPage.playButtonInDetailScreen
  // ).combinedClick("Play Button");
  await (
    await OnBoardingPage.myListOptionUnderContentDetailsInContentPage
  ).findElementAndVerifyText("MY LIST");
  await (
    await OnBoardingPage.myListImageOptionUnderContentDetailsPage
  ).verifyElementIsDisplayedTrue("My LIST Image");
  await (
    await OnBoardingPage.myListOptionUnderContentDetailsInContentPage
  ).combinedClick("My List Option");

  await (
    await OnBoardingPage.settingsButtonWithTooltip
  ).combinedClick("Settings Tooltip");
  await (
    await OnBoardingPage.myListOptionUnderSettingsTooltip
  ).combinedClick("MY LIST option");
  await browser.pause(5000);
  const myListContents = await OnBoardingPage.myListcontents;
  const Length = myListContents.length;
  let movies;
  for (let i = 1; i <= Length; i++) {
    const split = await OnBoardingPage.moviName(i).getAttribute("href");
    let text = split.split("/");
    console.log(text);
    if (contentTitle == text[2]) {
      movies = text[2];
      // console.log(movies);
      console.log(text);
    }
  }
  
  expect(contentTitle).to.eql(movies);
  driver.logUtil(
    "Pass",
    `WatchList Added content From Home Page ${movies} is present in the List of My List Page.`
  );
  await (await OnBoardingPage.myListAddedContents).moveTo();
  await (
    await OnBoardingPage.trashIconInMyListPage
  ).combinedClick("Trash Icon");
  
  });
});