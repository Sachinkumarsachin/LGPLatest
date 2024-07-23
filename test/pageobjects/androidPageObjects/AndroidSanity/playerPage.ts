import OnBordingPage from "../../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import AndroidTestData from "../../../testdata/AndroidTestData.json";

class PlayerPage {

    get clickOnSeasonDropDown() {
        return $('(//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/main_view"])[2]');
    }

    get selectSeasons() {
        return $$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/rvSeasons"]//android.widget.LinearLayout');
    }

    get selectLastSeason() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/rvSeasons"]//android.widget.LinearLayout[3]');
    }

    get clickOnAccountMenu() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/navigation_bar_item_small_label_view" and @text="ACCOUNT"]');
    }

    get clickOnLogoutTxt() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/logout"]');
    }

    get clickOnYesBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    get verifySettingTitle() {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get clickOnAccountSettingOption() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/settingSection" and @text="Account Settings"]');
    }

    get verifyAccountSettingTitle() {
        return $('//android.widget.TextView[@text="Account Settings"]');
    }

    get verifyParentalControlOption() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/settingSection" and @text="Parental Control"]');
    }

    get verifyParentalControlTitle() {
        return $('//android.widget.TextView[@text="Parental Control"]');
    }

    get verifyParentalIcon_A() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/buttonR"]');
    }

    get verifyParentalIcon_A_Text() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textParentalR"]');
    }

    get verifyParentalIcon_UA_13() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/button15"]');
    }

    get verifyParentalIcon_UA_13_Text() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textParental15"]');
    }

    get verifyParentalIcon_UA_7() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/buttonPG"]');
    }

    get verifyParentalIcon_U() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/buttonG"]');
    }

    get verifyParentalSettingsUpdatedPopup() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textTitle"]');
    }

    get verifyParentalSettingsUpdatedPopupYesBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    get verifyParentalControlText() {
        return $('(//*[@resource-id="com.lionsgateplay.videoapp:id/subSettingSectionText"])[1]');
    }

    get verifywatchList() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/buttonTitle" and @text="WATCHLIST"]');
    }

    /**
     * Method to validate Seasons and Episode List
     */
    async validateSeasonsAnsEpisodeList() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("EPISODES")');
        for (let i = 1; i <= 2; i++) {
            await (await this.clickOnSeasonDropDown).combinedClick("Season DropDown")
            await (await this.selectSeasons[i]).combinedClick("Season");
            await browser.pause(2000);
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await (await OnBordingPage.verifyLastEpisode).verifyElementIsDisplayedTrue("LastEpisode");
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("EPISODES")');
        }

        await (await this.clickOnSeasonDropDown).combinedClick("Season DropDown")
        await (await this.selectLastSeason).combinedClick("Season");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await (await OnBordingPage.verifyLastEpisode).verifyElementIsDisplayedTrue("LastEpisode");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("EPISODES")');
    }

    async logoutAsUser() {
        await (await this.clickOnAccountMenu).combinedClick("Account");
        await browser.pause(3000);
        await this.passwordTxtField();
        await (await this.clickOnLogoutTxt).combinedClick("Logout");
        await (await this.clickOnYesBtn).combinedClick("Yes");
        await browser.pause(3000);
        await (await OnBordingPage.loginButton).verifyElementIsDisplayedTrue("Login Button");
    }

    /**
     * Method to validate Parental Control in Account Setting
     */
    async validateParentalControlOption() {
        await (await this.clickOnAccountMenu).combinedClick("Account");
        await this.passwordTxtField();
        await (await this.verifySettingTitle).verifyElementIsDisplayedTrue("Setting");
        await (await this.clickOnAccountSettingOption).combinedClick("Account Setting");
        await (await this.verifyAccountSettingTitle).verifyElementIsDisplayedTrue("Account Setting");
        await (await this.verifyParentalControlOption).verifyElementIsDisplayedTrue("Parental Control");
    }

    async validateParentalControlPage() {
        let parentalControlTxt = await this.verifyParentalControlText.getText();
        console.log("text is", parentalControlTxt);
        await (await this.verifyParentalControlOption).combinedClick("Parental Control");
        if (parentalControlTxt === 'A') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        }
        else if (parentalControlTxt === 'UA-13') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_A).combinedClick("Parental Control A Icon");
        }
        else if (parentalControlTxt === 'UA-7') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_A).combinedClick("Parental Control A Icon");
        }
    }

    async validateParentalControl() {
        let parentalControlTxt = await this.verifyParentalControlText.getText();
        console.log("text is", parentalControlTxt);
        await (await this.verifyParentalControlOption).combinedClick("Parental Control");
        if (parentalControlTxt === 'A') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        }
        else if (parentalControlTxt === 'UA-13') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 7 Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_7).combinedClick("Parental Control UA 7 Icon");

        }
        else if (parentalControlTxt === 'UA-7') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 7 Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");

        }
    }

    /**
     * Method to validate Parental Control From A to UA-13
     */
    async validateParentalSettingsUpdatedPopup() {
        // await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
        // await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
        // await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        await (await this.verifyParentalSettingsUpdatedPopup).verifyElementIsDisplayedTrue("Parental settings updated");
        await (await this.verifyParentalSettingsUpdatedPopupYesBtn).combinedClick("OK");
        await browser.pause(10000);
        await (await OnBordingPage.clickOnMovie).verifyElementIsDisplayedTrue("Movie");
        await browser.pause(2000);
    }

    async passwordTxtField() {
        if (await (await OnBordingPage.passwordTxtField).isDisplayed()) {
            await (await OnBordingPage.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
            await (await OnBordingPage.continueBtn).combinedClick("Continue");
        }
        else {
            console.log("Not displayed");
        }
    }

    async validateWatchList() {
        await (await this.verifywatchList).verifyElementIsDisplayedTrue("WatchList");
        await (await this.verifywatchList).combinedClick("WatchList");
    }

}
export default new PlayerPage();
