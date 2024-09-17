import { config, expect } from "chai";
import { beforeEach } from "mocha";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";
import onBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";

describe(`Login/Signup page Test Cases`, async () => {
  it(`Validate the Login Functionality via Email ID`, async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
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
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    driver.logUtil("Info", "Home page is displayed");
  });

  it("Validate the Login Functionality via Mobile number", async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.login_MobileNumber,
      "Login Mobile Number"
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
    driver.logUtil("Info", "Home page is displayed");
  });

  it("Validate the Sign-up functionality via Email", async () => {
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
      WebTestData.loginPage_Credentials.subscribed_Username,
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
      await OnBoardingPage.chooseYouAccountPaymentPageTitle
    ).findElementAndVerifyText(
      "Choose a payment method to activate your account"
    );
    await (
      await OnBoardingPage.paymentOptions("Credit Cards/Debit Cards")
    ).findElementAndVerifyText("Credit Cards/Debit Cards");
    await (
      await OnBoardingPage.paymentOptions("UPI")
    ).findElementAndVerifyText("UPI");
    await (
      await OnBoardingPage.paymentOptions("Voucher")
    ).findElementAndVerifyText("Voucher");
    await (
      await OnBoardingPage.payLaterOption
    ).findElementAndVerifyText("Pay later");
    driver.logUtil(
      "Pass",
      "Payment Page and Payment options are displayed for Non-subscribed User"
    );
  });

  it("Validate the availablity of Activate TV page in web as Subscribed user", async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
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
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Activate TV")
    ).findElementAndVerifyText("ACTIVATE TV");
  });

  it("Validate the availablity of Activate TV page in web as  Non Subscribed user", async () => {
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
      WebTestData.loginPage_Credentials.subscribed_Username,
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
      await OnBoardingPage.navbarItemsInMainPage("Activate TV")
    ).findElementAndVerifyText("ACTIVATE TV");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Activate TV")
    ).combinedClick("Activate TV Option");
    await (
      await OnBoardingPage.subscribeToLionsGateOption
    ).findElementAndVerifyText("Subscribe to LIONSGATEPLAY");
    await (
      await OnBoardingPage.susbcribeTag
    ).findElementAndVerifyText(
      "Do you want to subscribe to LIONSGATEPLAY before linking to your TV?"
    );
    await (
      await OnBoardingPage.subscribeNowOption
    ).findElementAndVerifyText("SUBSCRIBE NOW");
    await (
      await OnBoardingPage.subscribeLaterOption
    ).findElementAndVerifyText("SUBSCRIBE LATER");
  });

  it("Validate Login from Popup on clicking Play icon in detail screen", async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).findElementAndVerifyText("LOG IN");
    await (
      await OnBoardingPage.signUpOptionInPlayerDetailScreen
    ).findElementAndVerifyText("SIGN UP");
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).combinedClick("LOG IN Button");
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
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
  });

  it("Validate Login from Popup on clicking Play icon in detail poster thumbnail", async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");

    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    // const movieName = await (
    //   await OnBoardingPage.Courouselbannername
    // ).getAttribute("href");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).combinedClick("Movies Tab");
    await (
      await OnBoardingPage.courouselBannerWithCenter
    ).combinedClick("Courousel Banner");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).findElementAndVerifyText("LOG IN");
    await (
      await OnBoardingPage.signUpOptionInPlayerDetailScreen
    ).findElementAndVerifyText("SIGN UP");
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).combinedClick("LOG IN Button");
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
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
  });

  it("Validate Login from Popup on clicking play icon in episode card", async () => {
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
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).combinedClick("Shows Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First content Under shows");
    // await (
    //   await OnBoardingPage.playButtonInDetailScreen
    // ).combinedClick("Play Button");
    // await (await OnBoardingPage.episodeInContentUnderShowsTab).scrollIntoView();
    await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
    await (
      await OnBoardingPage.episodeInContentUnderShowsTab
    ).combinedClick("Episode 1 Under shows Content");
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).findElementAndVerifyText("LOG IN");
    await (
      await OnBoardingPage.signUpOptionInPlayerDetailScreen
    ).findElementAndVerifyText("SIGN UP");
    await (
      await OnBoardingPage.loginOptionInPlayerDetailScreen
    ).combinedClick("LOG IN Button");
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
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
  });
});
