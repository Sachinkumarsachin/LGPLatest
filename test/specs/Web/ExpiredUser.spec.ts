import { config, expect } from "chai";
import { beforeEach } from "mocha";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";

describe("Expired User Test Cases", async () => {

  it("Verify that Payment option page is displayed post login to the App", async () => {
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
      WebTestData.loginPage_Credentials.expiredUser_Username,
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
      await OnBoardingPage.chooseYouReactivateAccountTextForExpiredUser
    ).findElementAndVerifyText(
      "Choose a payment method to reactivate your account"
    );
    await (
      await OnBoardingPage.paymentOptionsForReactivateAccount(
        "Credit Cards/Debit Cards"
      )
    ).findElementAndVerifyText("Credit Cards/Debit Cards");
    await (
      await OnBoardingPage.paymentOptionsForReactivateAccount("UPI")
    ).findElementAndVerifyText("UPI");
    await (
      await OnBoardingPage.paymentOptionsForReactivateAccount("Voucher")
    ).findElementAndVerifyText("Voucher");
    await (
      await OnBoardingPage.payLaterOptionForReactivateAccount
    ).findElementAndVerifyText("Pay later");
    driver.logUtil(
      "Pass",
      "Payment Page and Payment options are displayed for Non-subscribed User"
    );
  });

  it("Verify that 'Add payment details' CTA is displayed under 'Manage Subscription' section in settings page", async () => {
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
      WebTestData.loginPage_Credentials.expiredUser_Username,
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
      await OnBoardingPage.payLaterOptionForReactivateAccount
    ).combinedClick("Pay Later Option");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).verifyElementIsDisplayedTrue("Home Tab Option");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).waitForDisplayed();
    await (
      await OnBoardingPage.settingsOptionUnderTooltip
    ).combinedClick("Settings Option");
    await (
      await OnBoardingPage.manageSubscriptionsUnderSettingsPage
    ).scrollIntoView();
    await (
      await OnBoardingPage.manageSubscriptionsUnderSettingsPage
    ).verifyElementIsDisplayedTrue("Manage Subscriptions option");
    await (
      await OnBoardingPage.manageSubscriptionsUnderSettingsPage
    ).findElementAndVerifyText("MANAGE SUBSCRIPTIONS");
    await (
      await OnBoardingPage.addPaymentDetailsForReactiveAccountUnderManageSubscriptions
    ).findElementAndVerifyTextContains("ADD PAYMENT DETAILS");
    await (
      await OnBoardingPage.inactiveAccountTextForExpireduser
    ).findElementAndVerifyTextContains(
      "Your LIONSGATEPLAY subscription is currently Inactive."
    );
  });

  it("Verify that 'Reactivate your susbcription ' popup is displayed post tapping on Play icon", async () => {
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
      WebTestData.loginPage_Credentials.expiredUser_Username,
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
      await OnBoardingPage.payLaterOptionForReactivateAccount
    ).combinedClick("Pay Later Option");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).verifyElementIsDisplayedTrue("Home Tab Option");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(1000);
    // await (
    //   await OnBoardingPage.playButtonInDetailScreen
    // ).combinedClick("Play Button");
    await (
      await OnBoardingPage.deactivatedSubscriptionTextInContentDetailScreen
    ).findElementAndVerifyText(
      "You cannot watch this content as your subscription is currently deactivated.\nTo reactivate your subscription, please enter valid payment details to your account."
    );
    await (
      await OnBoardingPage.reactivateYourSubscriptionText
    ).findElementAndVerifyText("reactivate your subscription");
    await (
      await OnBoardingPage.reactiveLiongatesPlayOptionForExiperUser
    ).findElementAndVerifyText("REACTIVATE LIONSGATEPLAY");
  });
});
