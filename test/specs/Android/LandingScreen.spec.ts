import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import LandingScreenPage from "../../pageobjects/androidPageObjects/AndroidSanity/landingScreenPage";


describe("Android LandingScreen and MyList sanity Test Cases", async () => {
    it("TC_054. Verify that feature carousel unit is available on Home/Shows/Movies screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateCarouselForAllSection();
    });

    it("TC_055. Verify that Banners available in feature carousel unit rotate from right to left at a fixed time interval.", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateAutoCarouselForAllSection();

    });
    //only
    it("TC_057. Verify that user is taken to respective content detail screen on tap of any carousel banner", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateCarouselDetailScreenForAllSection();

    });

    it("TC_058. Verify that Continue watching rail is available for logged in user(if user watches the contents partially)", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUser("freetest25@yopmail.com");
        await OnBordingPage.scrollTillEnd();

    });

    it("TC_025. Validate that My List is not displayed for Guest User in Movies details page", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateMovieDetailScreen();
        await LandingScreenPage.validateMyListByClickOnMovieOrShowAsGuestUser();

    });

    it("TC_026. Validate that My List is not displayed for Guest User in Shows details page", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateShowDetailScreen();
        await LandingScreenPage.validateMyListByClickOnMovieOrShowAsGuestUser();

    });


});
