import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import DetailScreenPage from "../../pageobjects/androidPageObjects/AndroidSanity/detailScreenPage";


describe("Android DetailScreen sanity Test Cases", async () => {
    it("TC_018. Validate that user is navigated to detail screen post tapping on any Show thumbnail from any rail", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateShowDetailScreen();
    });

    it("TC_019. Validate that user is navigated to detail screen post tapping on any Movie thumbnail from any rail", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateMovieDetailScreen();
    });

    it("TC_020. Validate the availability and fuctionality of 'Trailer playback' under detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateTrailerIcon();
    });

    //only
    it("TC_021. Validate the attributes in movie detail screen as a Non-subscribed/Subscribed user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUser("upitest2@yopmail.com");
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await DetailScreenPage.ValidateYearTimeRatingTitle();
        await DetailScreenPage.ValidateContentDescription();
        await DetailScreenPage.ValidateDirectorAndCast();
        await DetailScreenPage.ValidateContentDescriptor();
        await DetailScreenPage.ValidateTrailer_WatchList_Download_Icon();
    });

    it("TC_022. Validate the attributes in shows detail screen as a Non-subscribed/Subscribed user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUser("upitest2@yopmail.com");
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await DetailScreenPage.ValidateYearTimeRatingTitle();
        await DetailScreenPage.ValidateContentDescription();
        await DetailScreenPage.ValidateDirectorAndCast();
        await DetailScreenPage.ValidateContentDescriptor();
        await DetailScreenPage.ValidateTrailer_WatchList_Icon();
        await DetailScreenPage.verifySeasonAndEpisode();
    });

    it("TC_023. Validate the trailer preview in Movie detail screen ", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateMovieDetailScreen();
        await DetailScreenPage.validateCloseIcon();
    });

    it("TC_024. Validate the trailer preview in Show detail screen  ", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateShowDetailScreen();
        await DetailScreenPage.validateCloseIcon();
    });

});
