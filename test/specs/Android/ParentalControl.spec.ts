import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import PlayerPage from "../../pageobjects/androidPageObjects/AndroidSanity/playerPage";
import SubscriptionsPage from "../../pageobjects/androidPageObjects/AndroidSanity/subscriptionsPage";

describe("Android Parental Control sanity Test Cases", async () => {
    it("TC_059. Verify that parental control menu is displayed under Account settings section in More screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        await OnBordingPage.validateHomePage();
        await PlayerPage.validateParentalControlOption()
    });

    it("TC_060,TC_061. Verify that user is able to change parental control options", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        await OnBordingPage.validateHomePage();
        await PlayerPage.validateParentalControlOption();
        await PlayerPage.validateParentalControlPage();
        await PlayerPage.validateParentalSettingsUpdatedPopup()

    });

    it("TC_062. Verify that appropriate contents displayed accross landing screens based on the PC option selected", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        await OnBordingPage.validateHomePage();
        await PlayerPage.validateParentalControlOption();
        await PlayerPage.validateParentalControlPage();
        await PlayerPage.validateParentalSettingsUpdatedPopup()
        await OnBordingPage.validateViewAllIcon();

    });

    it("TC_063. Verify that Subscribe popup is displayed post tapping on Play CTA & download icon in  content detail page post applying parental control option  for Non subscribed user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('truenon@yopmail.com');
        await SubscriptionsPage.validatePayLaterBtn()
        await OnBordingPage.validateHomePage();
        await PlayerPage.validateParentalControlOption();
        await PlayerPage.validateParentalControl();
        await PlayerPage.validateParentalSettingsUpdatedPopup()
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn();
        await SubscriptionsPage.validateSubscribePopup();
        await OnBordingPage.validateDownloadIcon();
        await SubscriptionsPage.validateSubscribePopup();
    });

    it.only("TC_064,TC_065. Verify that user is able to add content to watchlist, play & download the content post applying parental control  for subscribed user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        await OnBordingPage.validateHomePage();
        await PlayerPage.validateParentalControlOption();
        await PlayerPage.validateParentalControl();
        await PlayerPage.validateParentalSettingsUpdatedPopup()
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn();
        await driver.back();
        await PlayerPage.validateWatchList()
        await OnBordingPage.validateDownloadIcon();
    });

});
