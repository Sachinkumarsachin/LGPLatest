import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";
import onBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";

describe(" Subscription test cases", async()=>{

    it("Validate the different payment methods Credit card, UPI and Voucher option", async()=>{
        
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

    it("Validate that on click on Credit card option, proper price points are displayed", async()=>{
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
          await OnBoardingPage.paymentOptions("Credit Cards/Debit Cards")
        ).combinedClick("Credit cards/Debit cards Payment option");
        await (
          await OnBoardingPage.chooseYourPlanTextUnderCreditcardPaymentPage
        ).findElementAndVerifyText(
          "Choose your plan and enter your payment details"
        );
        await (
          await OnBoardingPage.subscriptionMonthsText("3 Months")
        ).findElementAndVerifyText("3 Months");
        const currencyType = await (
          await OnBoardingPage.subscriptionAmountCurrencyType(1)
        ).getText();
        console.log(currencyType);
        await (
          await OnBoardingPage.subscriptionAmountCurrencyType(1)
        ).findElementAndVerifyText("INR 399");
        await (
          await OnBoardingPage.subscriptionMonthsText("12 Months")
        ).findElementAndVerifyText("12 Months");
        const currencyType1 = await (
          await OnBoardingPage.subscriptionAmountCurrencyType(2)
        ).getText();
        console.log(currencyType1);
        await (
          await OnBoardingPage.subscriptionAmountCurrencyType(2)
        ).findElementAndVerifyText("INR 699");
    });

    it("Validate that on navigated to Enter your mobile number", async()=>{
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
          await OnBoardingPage.paymentOptions("UPI")
        ).combinedClick("UPI Payment Option");
        await (await OnBoardingPage.upiLogoInUPIPaymentPage).waitForDisplayed();
        await (
          await OnBoardingPage.upiLogoInUPIPaymentPage
        ).verifyElementIsDisplayedTrue("UPI Payment LOGO");
        await (
          await OnBoardingPage.enterMobileNumberTextInUPIPaymentPage
        ).findElementAndVerifyText("Enter mobile number to select a payment plan");
    });

    it("Validate that on click on Voucher Payment option", async()=>{
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
          await OnBoardingPage.paymentOptions("Voucher")
        ).combinedClick("Voucher Payment Option");
        await (await OnBoardingPage.voucherLogo).waitForDisplayed();
        await (
          await OnBoardingPage.voucherLogo
        ).verifyElementIsDisplayedTrue("Voucher Logo");
        await (
          await OnBoardingPage.reedemvoucherText
        ).findElementAndVerifyText("Redeem your voucher");
        await (
          await OnBoardingPage.pleaseVoucherCodeForSubscriptionText
        ).findElementAndVerifyText(
          "Please enter your voucher code to start your subscription"
        );
        await (
          await OnBoardingPage.voucherCodeInputTextField
        ).combinedClick("Vouched Code Input Field");
        await (
          await OnBoardingPage.voucherCodeTextInInputField
        ).findElementAndVerifyText("VOUCHER CODE");
    });

    it("Validate that on entering valid voucher", async()=>{
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
          await OnBoardingPage.paymentOptions("Voucher")
        ).combinedClick("Voucher Payment Option");
        await (
          await OnBoardingPage.voucherCodeInputTextField
        ).setValue(WebTestData.loginPage_Credentials.voucherCode, "Voucher code");
        await (
          await OnBoardingPage.continueButtonInVoucherCodePage
        ).verifyElementIsEnabledTrue("Continue Button");
        await (
          await OnBoardingPage.continueButtonInVoucherCodePage
        ).combinedClick("continue Button");
        await (
          await OnBoardingPage.congratulationsTextForVoucherCode
        ).findElementAndVerifyText("Congratulations!");
        await (
          await OnBoardingPage.thankYouVoucherLogoUnderVoucherPage
        ).verifyElementIsDisplayedTrue("LiongatesPlay thankyou Voucher");
        await (
          await OnBoardingPage.youCanEnjoyUnlimitedVouchedCodeText
        ).findElementAndVerifyText(
          "You can now enjoy unlimited streaming of your favourite content."
        );
        await (
          await OnBoardingPage.towardsVoucherCodeText
        ).findElementAndVerifyText(
          "Towards the end of your subscription we’ll send you a reminder email in case you wish to renew."
        );
        await (
          await OnBoardingPage.startWatchingButton
        ).verifyElementIsDisplayedTrue("starting watching button");
        await (
          await OnBoardingPage.startWatchingButton
        ).verifyElementIsEnabledTrue("starting watching button");
    });
    
    it("Validate that on successful purchase Voucher respective", async () =>{
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
          WebTestData.loginPage_Credentials.voucherSubscribed_username,
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
        ).combinedClick("Settings tooltip");
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
          await OnBoardingPage.yourCurrentPaymentMethodUnderManageSubscriptionText
        ).findElementAndVerifyText("Your current payment method:");
        await (
          await OnBoardingPage.imageofLionGatePlayVoucherLogoForPaymentMethod
        ).verifyElementIsDisplayedTrue(
          "LionGatesPlay Voucher Logo as Payment Method"
        );
    });
});