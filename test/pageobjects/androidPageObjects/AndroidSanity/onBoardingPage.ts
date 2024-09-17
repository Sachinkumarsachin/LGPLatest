import WebOnboardingpage from "../../webSanityPages/onBoardingPage";
import AndroidTestData from "../../../testdata/AndroidTestData.json";
import { th } from "date-fns/locale";
import RandomApi from "../../../../test/api/api-tests/randomAPI";
import { Console } from "console";

class OnBordingPage {
    get splashScreen() {
        return $('//android.widget.VideoView[@resource-id="com.lionsgateplay.videoapp:id/videoView"]')
    }

    get banner() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/imageView"]');
    }

    get verifyGetStartedBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button"]');
    }

    get loginButton() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnLogin"]');
    }

    get exploreButton() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnExplore"]');
    }

    get emailOrMobileNumberTxtField() {
        return $('//android.widget.EditText[@resource-id="com.lionsgateplay.videoapp:id/editText"]');
    }

    get emailOrMobileNumberTxtFieldAsANonSubscribedUser() {
        return $('//android.widget.EditText[@resource-id="com.lionsgateplay.videoapp:id/editText" and @text="Email Address or Mobile Number"]');
    }

    get loginWithPasswordBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="LOGIN WITH PASSWORD"]');
    }

    get passwordTxtField() {
        return $('//android.widget.EditText[@resource-id="com.lionsgateplay.videoapp:id/editText" and @text="Password"]');
    }

    get clickShowPassword() {
        return $('//android.widget.ImageButton[@content-desc="Show password"]');
    }

    get loginBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="LOG IN"]');
    }

    get allowButton() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    }

    get verifyHomePage() {
        return $$("//*[@class='android.widget.LinearLayout']/child::android.widget.LinearLayout/child::android.widget.TextView");
    }

    get clickOnSignup() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textSignup"]');
    }

    get continueBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button"]');
    }

    get planListingPageTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/paymentTitle"]');
    }

    get createYourTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title"]');
    }

    get clickOnContent() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/image"])[2]');
    }

    get clickOnPlayButton() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="PLAY"]');
    }

    get verifySignUpOrLoginTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textTitle"]');
    }

    get verifyLoginPopupBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnKO"]');
    }

    get verifySigninPopupBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]')
    }

    get verifyLoginWithOTPTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title"]');
    }

    get clickOnShow() {
        return $('//android.widget.TextView[@text="Shows"]');
    }

    get clickOnMovie() {
        return $('//android.widget.TextView[@text="Movies"]');
    }

    get verifyLastEpisode() {
        return $('(//android.widget.LinearLayout[@resource-id="com.lionsgateplay.videoapp:id/ll_item_root"])[5]');
    }

    get clickOnDownloadIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/icon"])[1]');
    }

    get loginTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title"]');
    }

    get forgotPassword() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/forgotPassTextView"]');
    }

    get passwordRecoveryTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title"]');
    }

    get passworRecoveryEmailSentTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/emailSentTitle"]');
    }

    get verifyMailId() {
        return $('//*[@resource-id="com.lionsgateplay.videoapp:id/email"]');
    }

    get verifyTrailerIcon() {
        return $('//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/trailerButton"]/android.widget.LinearLayout');
    }

    get verifyCarousel() {
        return $('//androidx.viewpager.widget.ViewPager[@resource-id="com.lionsgateplay.videoapp:id/viewPager"]');
    }

    get verifyContinueWatchingTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title" and @text="Continue Watching"]');
    }

    get clickOnSeasonEpisode() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/playIcon"])[1]')
    }

    get verifyEpisodeVuttonIconInPlayer() {
        return $('//android.widget.ImageButton[@resource-id="com.lionsgateplay.videoapp:id/episodeButton"]');
    }

    get viewAllIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/iv_see_all"])[1]'); // Locate the scrollable element

        // // Perform a touch action to scroll
        // await browser.touchAction([
        //     { action: 'press', x: 100, y: 500 }, // Press at the starting point of the scroll
        //     { action: 'wait', ms: 1000 }, // Wait for 1 second
        //     { action: 'moveTo', x: 0, y: 200 }, // Move to the end point of the scroll
        //     { action: 'release' } // Release the touch action
        // ]);
    }

    /**
     * Method to validate Splash Screen
     */
    async verifySplashScreen() {
        await browser.pause(2500);
        await (await this.splashScreen).verifyElementIsDisplayedTrue("Splash Screen");
    }

    /**
     * Method to validate Intro Screen
     */
    async verifyIntroScreen() {
        await browser.pause(8000);
        await (await this.banner).verifyElementIsDisplayedTrue("Banner");
        await (await this.verifyGetStartedBtn).findElementAndVerifyText("GET STARTED");
        await (await this.loginButton).findElementAndVerifyText("LOGIN");
        await (await this.exploreButton).findElementAndVerifyText("EXPLORE");
    }

    /**
     * Method to validate Home Screen as Subscribed User
     * @param username 
     */
    async verifyHomeScreenForSubscribedUser(username: string) {
        await (await this.loginButton).combinedClick("LOGIN");
        await (await this.emailOrMobileNumberTxtField).setValue(username, "Email Text Field");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).combinedClick("Login");
        if(await(await this.allowButton).isDisplayed())
        {  
        await (await this.allowButton).combinedClick("Allow");
        }else{console.log("Popup not displayed");}
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
    }

    /**
   * Method to validate Home Screen as Subscribed User By Click on Get Start Button
   * @param username 
   */
    async verifyHomeScreenForSubscribedUserByClickOnGetStartedBtn(username: string) {
        await (await this.emailOrMobileNumberTxtField).setValue(username, "Email Text Field");
        await (await this.verifyGetStartedBtn).combinedClick("Get Started");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).combinedClick("Login");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
    }

    /**
     * Method to validate Home Screen as  Non Subscribed User
     */
    async verifyHomeScreenForNonSubscribedUser() {
        await (await this.loginButton).combinedClick("LOGIN");
        await (await this.clickOnSignup).combinedClick("Sgn up");
        await (await this.createYourTitle).verifyElementIsDisplayedTrue("Create Your Account Title")
        await (await this.emailOrMobileNumberTxtFieldAsANonSubscribedUser).setValue(await WebOnboardingpage.generateRandomString(12) + "@yopmail.com", "Email Text Field");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.continueBtn).combinedClick("Continue");
        await (await this.planListingPageTitle).verifyElementIsDisplayedTrue("Plan Listing Page Title");
        await browser.pause(3000);

    }

    /**
     * Method to validate Payment Method Screen
     */
    async verifyPaymentMethodScreenTitle() {
        await (await this.emailOrMobileNumberTxtField).setValue(await WebOnboardingpage.generateRandomString(12) + "@yopmail.com", "Email Text Field");
        await (await this.verifyGetStartedBtn).combinedClick("Get Started");
        await browser.pause(3000);
        await (await this.createYourTitle).verifyElementIsDisplayedTrue("Create Your Account Title")
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.continueBtn).combinedClick("Continue");
        await (await this.planListingPageTitle).verifyElementIsDisplayedTrue("Plan Listing Page Title");
    }

    /**
    * Method to validate Home Screen By Clicking on Explore button
    */
    async verifyHomeScreenForSubscribedUserByClickOnGetExploreBtn() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await (await this.clickOnMovie).combinedClick("Movie");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        await browser.pause(3000);
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
        await (await this.clickOnPlayButton).combinedClick("Play");
        await (await this.verifySignUpOrLoginTitle).verifyElementIsDisplayedTrue("Login Popup");
        await (await this.verifyLoginPopupBtn).verifyElementIsDisplayedTrue("Login Button");
        await (await this.verifySigninPopupBtn).verifyElementIsDisplayedTrue("Signup Button");
        await (await this.verifyLoginPopupBtn).combinedClick("Login");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login with OTP");
        await (await this.emailOrMobileNumberTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Username, "Email Text Field");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await browser.pause(3000);
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).combinedClick("Login");
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
    }

    /**
    * Method to validateScroll And Home Screen By Clicking on Explore button
    */
    async verifyScrollAndHomeScreenForSubscribedUserByClickOnGetExploreBtn() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await browser.pause(3000);
        await (await this.clickOnShow).combinedClick("Show");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");

        const rd1 = await browser.call(async () => await RandomApi.getToken());
        // console.log(await rd1.data['x-token']);
        const rd = await browser.call(async () => await RandomApi.getRandomApi());
        let movieTitle = await rd.data[1].titles[0].title;
        console.log("Movie Title is", movieTitle);

        await browser.pause(3000);
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.verifySignUpOrLoginTitle).findElementAndVerifyText(movieTitle);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await (await this.verifyLastEpisode).verifyElementIsDisplayedTrue("LastEpisode");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("PLAY")');

        await (await this.clickOnPlayButton).combinedClick("Play");
        await (await this.verifySignUpOrLoginTitle).verifyElementIsDisplayedTrue("Login Popup");
        await (await this.verifyLoginPopupBtn).verifyElementIsDisplayedTrue("Login Button");
        await (await this.verifySigninPopupBtn).verifyElementIsDisplayedTrue("Signup Button");
        await (await this.verifyLoginPopupBtn).combinedClick("Login");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login with OTP");
        await (await this.emailOrMobileNumberTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Username, "Email Text Field");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await browser.pause(3000);
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).verifyElementIsEnabledTrue("Login");
    }

    /**
 * Method to validate Home Screen By Clicking on Download Icon
 */
    async verifyHomeScreenForSubscribedUserByClickOnDownloadIcon() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await (await this.clickOnMovie).combinedClick("Movie");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(5000);
        await (await this.clickOnDownloadIcon).verifyElementIsDisplayedTrue("Download Icon");
        await (await this.clickOnDownloadIcon).combinedClick("Download");
        await (await this.verifySignUpOrLoginTitle).verifyElementIsDisplayedTrue("Login Popup");
        await (await this.verifyLoginPopupBtn).verifyElementIsDisplayedTrue("Login Button");
        await (await this.verifySigninPopupBtn).verifyElementIsDisplayedTrue("Signup Button");
        await (await this.verifyLoginPopupBtn).combinedClick("Login");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login with OTP");
        await (await this.emailOrMobileNumberTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Username, "Email Text Field");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await browser.pause(3000);
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).combinedClick("Login");
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
    }


    /**
    * Method to validate Home Screen By Clicking on Download In Show Section
    */
    async verifyHomeScreenForSubscribedUserByClickOnDownloadInShow() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await browser.pause(3000);
        await (await this.clickOnShow).combinedClick("Show");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
        //check once by entering locator
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("1. Entry")');
        await browser.pause(3000);
        await (await this.clickOnDownloadIcon).verifyElementIsDisplayedTrue("Download Icon");

        await (await this.clickOnDownloadIcon).combinedClick("Download");
        await (await this.verifySignUpOrLoginTitle).verifyElementIsDisplayedTrue("Login Popup");
        await (await this.verifyLoginPopupBtn).verifyElementIsDisplayedTrue("Login Button");
        await (await this.verifySigninPopupBtn).verifyElementIsDisplayedTrue("Signup Button");
        await (await this.verifyLoginPopupBtn).combinedClick("Login");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login with OTP");
        await (await this.emailOrMobileNumberTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Username, "Email Text Field");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await browser.pause(3000);
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).verifyElementIsEnabledTrue("Login");
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
    }

    /**
     * Method to validate Password Recovery Page
     * @param username 
     */
    async verifyPasswordRecoveryPage(username: string) {
        await (await this.loginButton).combinedClick("LOGIN");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login with OTP");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.loginTitle).verifyElementIsDisplayedTrue("Login");
        await (await this.forgotPassword).combinedClick("Forgot Password");
        await (await this.passwordRecoveryTitle).verifyElementIsDisplayedTrue("Password Recovery");
        await (await this.emailOrMobileNumberTxtField).setValue(username, "Email Text Field");
        await (await this.continueBtn).combinedClick("Continue");
        await (await this.passworRecoveryEmailSentTitle).verifyElementIsDisplayedTrue("Password Recovery:Email Sent");
        await (await this.verifyMailId).findElementAndVerifyText(username);
        await browser.pause(5000);

    }

    /**
    * Method to enter login credential
    * @param username 
    */
    async enterLoginCredential(username: string) {
        await (await this.loginButton).combinedClick("LOGIN");
        await (await this.emailOrMobileNumberTxtField).setValue(username, "Email Text Field");
        await (await this.loginWithPasswordBtn).combinedClick("Login with password");
        await (await this.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
        await (await this.clickShowPassword).combinedClick("Show Password Icon")
        await (await this.loginBtn).combinedClick("Login");

    }

    /**
     * Method to validate for Home Page
     */
    async validateHomePage() {
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await browser.pause(5000);
    }

    /**
     * Method to navigate Movie detail screen
     */
    async validateMovieDetailScreen() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await (await this.clickOnMovie).combinedClick("Movie");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        await browser.pause(3000);
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
    }

    /**
     * Method to navigate Show detail screen
     */
    async validateShowDetailScreen() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await browser.pause(3000);
        await (await this.clickOnShow).combinedClick("Show");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        await browser.pause(3000);
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
    }


    /**
    * Method to validate Trailer Icon
    */
    async validateTrailerIcon() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
        await browser.pause(3000);
        await (await this.clickOnShow).combinedClick("Show");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        await browser.pause(3000);
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
        await (await this.verifyTrailerIcon).verifyElementIsDisplayedTrue("Trailer");

    }

    /**
     * Method to navigate details screen by clicking on Movie
     */
    async clickOnMovieAndNavigateToDetailsScreen() {
        await (await this.clickOnMovie).combinedClick("Movie");
        await browser.pause(3000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        await browser.pause(3000);
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
    }

    /**
    * Method to navigate details screen by clicking on Show
    */
    async clickOnShowAndNavigateToDetailsScreen() {
        await (await this.clickOnShow).combinedClick("Show");
        await browser.pause(4000);
        await (await this.clickOnContent).verifyElementIsDisplayedTrue("Verify Content");
        await browser.pause(3000);
        //console.log(await this.clickOnContent.getText());
        await (await this.clickOnContent).combinedClick("Content");
        await browser.pause(3000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
    }

    async validateHomePageByClickingOnExplore() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
        }
    }

    async validatePlayBtn() {
        await (await this.clickOnPlayButton).combinedClick("Play")
        await browser.pause(5000);
    }

    async validateDownloadIcon() {
        await (await this.clickOnDownloadIcon).combinedClick("Download");
    }

    async validateAllowPopup() {
        await (await this.allowButton).combinedClick("Allow");

    }

    async validateCarouselForAllSection() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            await tabsSections[i].click();
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
            await (await this.verifyCarousel).verifyElementIsDisplayedTrue(`${tab} Carousel`);
        }
    }

    async validateAutoCarouselForAllSection() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            await tabsSections[i].click();
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
            for (let j = 1; j <= 8; j++) {
                await (await this.verifyCarousel).verifyElementIsDisplayedTrue(`${j} Carousel`);
            }
        }
    }

    /**
     * Method to validate Carousel Detail screen for all section
     */
    async validateCarouselDetailScreenForAllSection() {
        await (await this.exploreButton).combinedClick("Explore");
        await (await this.allowButton).combinedClick("Allow");
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            await tabsSections[i].click();
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).verifyElementIsDisplayedTrue(`${tab} Tab`);
            await (await this.verifyCarousel).combinedClick("Carousel");
            await browser.pause(2000);
            await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("Play Button");
            await driver.back();

        }
    }

    async scrollTillEnd() {
        await browser.actions([
            browser.action('pointer')
                .move(500, 2400)
                .down()
                .move(250, 250)
                .up()
        ])

    }

    async validateViewAllIcon() {
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            await tabsSections[i].click();
            let tab = await tabsSections[i].getText();

            await browser.actions([
                browser.action('pointer')
                    .move(500, 2400)
                    .down()
                    .move(250, 250)
                    .up()
            ])

        }
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,4)');
    }

    async clickOnViewAllIcon() {
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            await tabsSections[i].click();
            let tab = await tabsSections[i].getText();

            await browser.actions([
                browser.action('pointer')
                    .move(500, 2400)
                    .down()
                    .move(250, 250)
                    .up()
            ])
            await browser.pause(3000);
            if (await (await this.viewAllIcon).isDisplayed()) {
                await (await this.viewAllIcon).combinedClick("View All");
                await browser.pause(3000);
            }
            else {
                console.log("Not Displayed");
            }

        }
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,4)');
    }

    async validateCintentDetailsPage() {
        let tabsSections = await this.verifyHomePage;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            await tabsSections[i].click();
            let tab = await tabsSections[i].getText();

            await browser.actions([
                browser.action('pointer')
                    .move(500, 2400)
                    .down()
                    .move(250, 250)
                    .up()
            ])
            await browser.pause(3000);
            if (await (await this.viewAllIcon).isDisplayed()) {
                await (await this.viewAllIcon).combinedClick("View All");
                await (await this.clickOnContent).combinedClick("Content");
                await browser.pause(3000);
            }
            else {
                console.log("Not Displayed");
            }

        }
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,4)');
    }


    async clickShowPlayIcon() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SEASON 1")');
        await browser.pause(3000);
        await (await this.clickOnSeasonEpisode).verifyElementIsDisplayedTrue("Episode");

        await (await this.clickOnSeasonEpisode).combinedClick("Episode");
        // await browser.pause(10000);
        //await (await this.verifyEpisodeVuttonIconInPlayer).verifyElementIsDisplayedTrue("Episode Button");
    }



}

export default new OnBordingPage();
