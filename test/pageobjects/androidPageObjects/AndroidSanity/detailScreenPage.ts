class DetailScreenPage {
    get verifyYearTimeRatingTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textSubtitle"]');
    }

    get verifyContentDescription() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textDescription"]');
    }

    get verifyDirectorAndCast() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textCast"]');
    }

    get verifyContentDescriptor() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textContentDescriptor"]');
    }

    get verifyDownloadIcon() {
        return $('//android.widget.LinearLayout[@resource-id="com.lionsgateplay.videoapp:id/parentView"]');
    }

    get verifyTrailerIcon() {
        return $('//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/trailerButton"]/android.widget.LinearLayout');
    }

    get verifyWatchListIcon() {
        return $('//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/watchlistButton"]/android.widget.LinearLayout');
    }

    get verifySeasonDropDown() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="SEASON 1"]');
    }

    get verifyEpisode() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/tvSeasonEpisodes"]');
    }

    get verifyCloseIcon() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/action_close"]');
    }

    get verifyMuteIcon() {
        return $('//*[@resource-id="com.lionsgateplay.videoapp:id/muteButton"]');
    }

    get verifyPlayAndPauseIcon() {
        return $('//android.widget.ImageButton[@resource-id="com.lionsgateplay.videoapp:id/pauseMobileButton"]');
    }

    get verifyExpandIcon() {
        return $('//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/fullScreenButton"]')
    }

    get clickOnSurfaceView() {
        return $('//android.view.View[@resource-id="com.lionsgateplay.videoapp:id/surfaceView"]');
    }

    get clickOnDownloadIconBottomMenu() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/navigation_bar_item_icon_view"])[3]');
    }

    get clickOnShowDownloadIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/icon"])[1]')
    }

    get verifyDownloadPageTitle() {
        return $('(//android.widget.TextView[@text="My Downloads"])[1]');
    }

    get verifyMovieTextInEmptyDownloadPage() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/moviesText"]')
    }

    get verifyShowTextInEmptyDownloadPage() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/seriesText"]')
    }

    get clickOnDownloadedContent() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/image"]');
    }

    get clickOnDownloadedContentPlayBtn() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/playIcon"]');
    }

    get clickOnPauseDownload() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/text" and @text="Pause Download"]');
    }

    get clickOnResumeDownload() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/text" and @text="Resume Download"]');
    }

    get clickOnCancelDownload() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/text" and @text="Cancel Download"]');
    }

    /**
     * Method to validate Year|Time|Genre|Rating In Content Details Page
     */
    async ValidateYearTimeRatingTitle() {
        await (await this.verifyYearTimeRatingTitle).verifyElementIsDisplayedTrue("Year|Time|Genre|Rating");
        console.log("Year|Time|Genre|Rating:", await (await this.verifyYearTimeRatingTitle).getText());
    }

    async ValidateContentDescription() {
        await (await this.verifyContentDescription).verifyElementIsDisplayedTrue("Content Description");
        console.log("Content Description:", await (await this.verifyContentDescription).getText());
    }

    async ValidateDirectorAndCast() {
        await (await this.verifyDirectorAndCast).verifyElementIsDisplayedTrue("Director and Cast");
        console.log("Director and Cast:", await (await this.verifyDirectorAndCast).getText());
    }

    async ValidateContentDescriptor() {
        await (await this.verifyContentDescriptor).verifyElementIsDisplayedTrue("Content Descriptor");
        console.log("Content Descriptor:", await (await this.verifyContentDescriptor).getText());
    }

    async ValidateTrailer_WatchList_Download_Icon() {
        await (await this.verifyTrailerIcon).verifyElementIsDisplayedTrue("Trailer");
        await (await this.verifyWatchListIcon).verifyElementIsDisplayedTrue("WatchList");
        await (await this.verifyDownloadIcon).verifyElementIsDisplayedTrue("Download");
    }

    async ValidateTrailer_WatchList_Icon() {
        await (await this.verifyTrailerIcon).verifyElementIsDisplayedTrue("Trailer");
        await (await this.verifyWatchListIcon).verifyElementIsDisplayedTrue("WatchList");
    }

    async verifySeasonAndEpisode() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SEASON 1")');
        await (await this.verifySeasonDropDown).verifyElementIsDisplayedTrue("Season");
        await (await this.verifyEpisode).verifyElementIsDisplayedTrue("Episode");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }

    async verifyDownloadByClickingOnShow() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SEASON 1")');
        await (await this.verifySeasonDropDown).verifyElementIsDisplayedTrue("Season");
        await (await this.clickOnShowDownloadIcon).verifyElementIsDisplayedTrue("Show Download");
    }

    async clickOnShowDownload() {
        await (await this.clickOnShowDownloadIcon).combinedClick("Download");
        await browser.pause(2000);
    }

    async clickOnMovieDownload() {
        await (await this.verifyDownloadIcon).combinedClick("Download");
        await browser.pause(2000);
    }

    async verifyBottomMenuDownloadIcon() {
        await (await this.clickOnDownloadIconBottomMenu).verifyElementIsDisplayedTrue("Bottom Menu Download Icon");
        await (await this.clickOnDownloadIconBottomMenu).combinedClick("Bottom Menu Download");
        await (await this.verifyDownloadPageTitle).verifyElementIsDisplayedTrue("My Download");

    }

    async validateMovieAndShowTextInEmptyDownloadPage() {
        await (await this.verifyMovieTextInEmptyDownloadPage).verifyElementIsDisplayedTrue("Movies");
        await (await this.verifyShowTextInEmptyDownloadPage).verifyElementIsDisplayedTrue("Shows");
    }

    async validateDownloadedContent() {
        await (await this.clickOnDownloadedContent).combinedClick("Download Content");
        await (await this.clickOnDownloadedContentPlayBtn).combinedClick("Download Content Play");
        await browser.pause(2000);
    }

    async validatePauseResumeCancelInContentDetails() {
        await (await this.verifyDownloadIcon).combinedClick("Download");
        await (await this.clickOnPauseDownload).combinedClick("Pause Download");
        await (await this.verifyDownloadIcon).combinedClick("Download");
        await (await this.clickOnResumeDownload).combinedClick("Resume Download");
        await (await this.verifyDownloadIcon).combinedClick("Download");
        await (await this.clickOnCancelDownload).combinedClick("Cancel Download");
        await browser.pause(5000);
    }

    async validatePauseResumeCancelInContentDownload() {
        await (await this.clickOnShowDownloadIcon).combinedClick("Download");
        await (await this.clickOnPauseDownload).combinedClick("Pause Download");
        await (await this.clickOnShowDownloadIcon).combinedClick("Download");
        await (await this.clickOnResumeDownload).combinedClick("Resume Download");
        await (await this.clickOnShowDownloadIcon).combinedClick("Download");
        await (await this.clickOnCancelDownload).combinedClick("Cancel Download");
        await browser.pause(5000);
    }

    //clickOnShowDownloadIcon
    //

    async validateCloseIcon() {
        await (await this.verifyCloseIcon).verifyElementIsDisplayedTrue("Close Icon");

        // await browser.actions().moveToElement(await $("#password")).click().pause(2000).click(await $('button[type="submit"]')).perform();

        // for (let i = 1; i <= 10; i++) {
        //     await (await this.clickOnSurfaceView).combinedClick("Surface View");
        //     if (await (await this.verifyMuteIcon).isDisplayed()) {
        //         console.log("pass");
        //         await this.verifyMuteIcon.click();
        //         break;
        //     }

        ////  }
        //const element1 = await $('//android.view.View[@resource-id="com.lionsgateplay.videoapp:id/surfaceView"]');
        // await browser.touchAction([
        //     //'press',
        //     { action: 'tap', element: await this.clickOnSurfaceView },
        //     { action: 'wait', ms: 1000 },
        //     { action: 'tap', element: await this.verifyMuteIcon },


        //     'release'
        // ])
        // await (await this.verifyMuteIcon).verifyElementIsDisplayedTrue("Mute Icon");
        // await (await this.verifyPlayAndPauseIcon).verifyElementIsDisplayedTrue("Puase Icon");
        // await (await this.verifyExpandIcon).verifyElementIsDisplayedTrue("Expand Icon");
        // await (await this.verifyCloseIcon).verifyElementIsDisplayedTrue("Close Icon");
    }
}

export default new DetailScreenPage();
