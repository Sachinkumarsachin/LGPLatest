import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import PlayerPage from "../../pageobjects/androidPageObjects/AndroidSanity/playerPage";
import SubscriptionsPage from "../../pageobjects/androidPageObjects/AndroidSanity/subscriptionsPage";

describe("Android Player sanity Test Cases", async () => {
    it("TC_027. Validate Seasons and Episode list in show detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.validateShowDetailScreen();
        await PlayerPage.validateSeasonsAnsEpisodeList();
    });

    //only
    it("TC_028. Validate that Movie playback intitiates when click on 'Play' CTA", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('truenon@yopmail.com');
        await SubscriptionsPage.validatePayLaterBtn()
        await OnBordingPage.validateHomePage();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn();
        await SubscriptionsPage.validateSubscribePopup();
        await PlayerPage.logoutAsUser();
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        // await OnBordingPage.validateHomePage();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn();
    });

    it("TC_029. Validate that Series playback intitiates when click on 'Play' CTA", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential('truenon@yopmail.com');
        await SubscriptionsPage.validatePayLaterBtn()
        await OnBordingPage.validateHomePage();
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn();
        await SubscriptionsPage.validateSubscribePopup();
        await PlayerPage.logoutAsUser();
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        // await OnBordingPage.validateHomePage();
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await OnBordingPage.validatePlayBtn();
    });

    it("TC_043. Validate that user is able to select and play contents from Episodes List ", async () => {
        await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
        await OnBordingPage.validateHomePage();
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await OnBordingPage.clickShowPlayIcon();
    });

    // it("TC_030. Validate that player controls are displayed on the movie player screen during content playback.", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_031. Validate that player controls are displayed on the episode player screen during content playback.", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_032. Validate the availabilty and functionality of 10 sec forward/backward button in player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_033. Validate the availabilty and functionality of Play/Pause button", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_034. Validate the availabilty of progress bar in player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_035. Validate the functionality of Subtitles option in player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_036. Validate the functionality of Audio option in player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_037. Validate the functionality of Video Quality option in player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_038. Validate that next content auto plays at the end of first content playback", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_039. Validate the availability and functionality of Subtitle option under settings in the player screen  ", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_040. Validate the availability and functionality of Audio option under settings in the player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_041. Validate the availability and functionality of Quality option under settings in the player screen", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_042. Validate that upnext card is displayed on the player at last 5secs of content playback time", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

    // it("TC_044. Validate Device limitation popup is displayed on player screen when played on 11th device", async () => {
    //     await OnBordingPage.enterLoginCredential('upitest2@yopmail.com');
    //     await OnBordingPage.validateHomePage();
    //     await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
    //     await OnBordingPage.validatePlayBtn();
    // });

});
