import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import RandomApi from "../../../test/api/api-tests/randomAPI";

describe("Android LoginAndSignup sanity Test Cases", async () => {
    it("TC_007. Validate Login via Password through Mobile number from Onboarding screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUser("917483546862");
    });

    //only
    it("TC_008. Validate Login via Password through Email address from Onboarding screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUserByClickOnGetStartedBtn("upitest2@yopmail.com");
    });

    it("TC_010. Validate Sign-up through Email from Onboarding screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyPaymentMethodScreenTitle();
    });

    it("TC_011. Validate Login/Sign Up from Popup on clicking Play icon in Movie detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUserByClickOnGetExploreBtn();
    });

    //only
    it("TC_012. Validate Login/Sign Up from Popup on clicking play icon in episode card", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyScrollAndHomeScreenForSubscribedUserByClickOnGetExploreBtn();
    });

    it("TC_013. Validate that Login/Sign Up from Popup from tapping on Download icon in Movie detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUserByClickOnDownloadIcon();
    });


    it("TC_014. Validate Login/Sign Up from Popup from tapping on Download icon in Show detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUserByClickOnDownloadInShow();
    });

    //only
    it("TC_015. Validate user is able to reset the password from Login page", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyPasswordRecoveryPage("truenon@yopmail.com");
    });


});
