import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import SubscriptionsPage from "../../pageobjects/androidPageObjects/AndroidSanity/subscriptionsPage";


describe("Android Expired User sanity Test Cases", async () => {
    it("TC_066. Verify that Plan listing page is displayed post login to the App as expired user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("atvbetaotp@yopmail.com");
        await SubscriptionsPage.validateListScreenWithBillAndPeriodFor3MonthsPlan();
    });
    //only
    it("TC_067. Verify that Subscribe popup is displayed post tapping on Play icon and Download icon", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("atvbetaotp@yopmail.com");
        await SubscriptionsPage.validatePayLaterBtn();
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn()
        await SubscriptionsPage.validateSubscribePopup();
        await OnBordingPage.validateDownloadIcon();
        await SubscriptionsPage.validateSubscribePopup();
    });

});
