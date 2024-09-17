import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import DetailScreenPage from "../../pageobjects/androidPageObjects/AndroidSanity/detailScreenPage";


describe("Android Download sanity Test Cases", async () => {
    it("TC_045. Validate if Download icon is displayed for Shows contents in Detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await DetailScreenPage.verifyDownloadByClickingOnShow();
    });

    it("TC_046. Validate if Download icon is displayed for Movies content in Detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await DetailScreenPage.ValidateTrailer_WatchList_Download_Icon();
    });

    it("TC_049. Validate if user is able to Navigate to Downloads screen by tapping on Download button from bottom navigation bar", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest27@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await DetailScreenPage.verifyBottomMenuDownloadIcon();
    });

    it("TC_050. Validate if 'Movies' and 'Shows' is available in the Empty-state screen to Download the contents", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await DetailScreenPage.verifyBottomMenuDownloadIcon();
        await DetailScreenPage.validateMovieAndShowTextInEmptyDownloadPage();
    });

    it("TC_047. Validate if user is able to download Shows - Episodes", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await DetailScreenPage.verifyDownloadByClickingOnShow();
        await DetailScreenPage.clickOnShowDownload()
    });

    it("TC_048. Validate if user is able to download  Movies", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await DetailScreenPage.ValidateTrailer_WatchList_Download_Icon();
        await DetailScreenPage.clickOnMovieDownload();
    });

    //only
    it("TC_051. Verify if user is able to play downloaded content in online mode", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnShowAndNavigateToDetailsScreen();
        await DetailScreenPage.verifyDownloadByClickingOnShow();
        await DetailScreenPage.clickOnShowDownload()
        await browser.pause(35000);
        await driver.back();
        await DetailScreenPage.verifyBottomMenuDownloadIcon();
        await DetailScreenPage.validateDownloadedContent();
    });

    //only
    it("TC_052. Verify if user is able to Pause ,Resume and Cancel the downloading  content in Detail screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("payutest256@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await DetailScreenPage.clickOnMovieDownload();
        await DetailScreenPage.validatePauseResumeCancelInContentDetails()
    });

    it("TC_053. Verify if user is able to Pause,Resume and Cancel the downloading  content in Downloads page", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.enterLoginCredential("upitest2@yopmail.com");
        await OnBordingPage.validateAllowPopup();
        await OnBordingPage.clickOnMovieAndNavigateToDetailsScreen();
        await DetailScreenPage.clickOnMovieDownload();
        await DetailScreenPage.verifyBottomMenuDownloadIcon()
        await DetailScreenPage.validatePauseResumeCancelInContentDownload();
    });

});
