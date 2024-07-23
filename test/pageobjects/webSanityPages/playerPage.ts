class PlayerPage {
    get clickOnShowLink() {
        return $('(//a[@id="series-link"])[1]');
    }

    get mouseHoverOnSelectedEpisode() {
        return $('(//div[@class="top-10-wrapper"])[5]');
    }

    get clickOnPlayIcon() {
        return $('//button[@id="moreinfo_watch"]');
    }

    get verifyShowTitle() {
        return $('//h1[@class="detail-title"]');
    }

    get clickOnselectedEpisode() {
        return $('(//div[@class="Chapter-image-container"])[1]')
    }

    get resumebuttonInPlayerScreen() {
        return $(`//span[@class='icon icon-play icon-resume']`);
    }

    get verifyContentPlayBackIcon() {
        return $('//button[@class="bitdash-playpause bitdash-l"]');
    }

    get verifyPlayerSettingIcon() {
        return $('//button[@class="video-quality-custom"]');
    }

    get clickOnEpisodeIconInPlayerScreen() {
        return $('//button[@class="bitdash-seasons"]');
    }

    get verifyEpisodeList() {
        return $('//div[@class="bitdash-settings bitdash-settings--seasons is-shown"]');
    }

    get allSeason() {
        return $$('//ul[@id="SERIES_LIST"]//li/a');
    }

    get fetchAllEpisodeContent() {
        return $$('//ul[@id="CHAPTERS_LIST"]//li');
    }

    get clickOnArrowDownIcon() {
        return $('//a[@id="CHAPTER_DOWN"]');
    }

    get printSubtitle() {
        return $('//div[@class="bitdash-subs"]//div//ul//p')
    }



    async verifyScrollAcrossEpisodeList() {
        await (await this.clickOnShowLink).combinedClick("Show");
        (await this.mouseHoverOnSelectedEpisode).moveTo();
        await (await this.mouseHoverOnSelectedEpisode).combinedClick("Selected episode");
        await expect(this.verifyShowTitle).toBeDisplayed();
        (await this.clickOnselectedEpisode).moveTo();
        await browser.pause(3000);
        await (await this.clickOnselectedEpisode).combinedClick("Episode");
        await expect(this.resumebuttonInPlayerScreen).toBeDisplayed();
        await (await this.resumebuttonInPlayerScreen).combinedClick("Resume Button In Player Screen");
        await expect(this.verifyContentPlayBackIcon).toBeDisplayed();
        await expect(this.verifyPlayerSettingIcon).toBeDisplayed();
        await (await this.clickOnEpisodeIconInPlayerScreen).combinedClick("Episode Icon");
        await browser.pause(3000);
        await expect(this.verifyEpisodeList).toBeDisplayed();
        let seasons = await this.allSeason;
        for (let j = 0; j <= seasons.length - 1; j++) {
            await seasons[j].click();
            let contents = await this.fetchAllEpisodeContent;
            for (let i = 0; i <= contents.length - 1; i++) {
                await browser.pause(1000);
                // await contents[i].scrollIntoView();
                await contents[i].moveTo();
                console.log(await contents[i].getText());
                if (await (await this.clickOnArrowDownIcon).isDisplayed() === true) {
                    await (await this.clickOnArrowDownIcon).combinedClick("Arrow Down");
                }
                else {
                    console.log("Arrow Down Icon is not displayed");
                }
            }


        }

    }

    async clickOnAnyEpisode() {
        await (await this.clickOnShowLink).combinedClick("Show");
        (await this.mouseHoverOnSelectedEpisode).moveTo();
        await (await this.mouseHoverOnSelectedEpisode).combinedClick("Selected episode");
        await expect(this.verifyShowTitle).toBeDisplayed();
        (await this.clickOnselectedEpisode).moveTo();
        await browser.pause(3000);
        await (await this.clickOnselectedEpisode).combinedClick("Episode");
        await expect(this.resumebuttonInPlayerScreen).toBeDisplayed();
        await (await this.resumebuttonInPlayerScreen).combinedClick("Resume Button In Player Screen");
        await expect(this.verifyContentPlayBackIcon).toBeDisplayed();
        await expect(this.verifyPlayerSettingIcon).toBeDisplayed();
        await (await this.clickOnEpisodeIconInPlayerScreen).combinedClick("Episode Icon");
        await browser.pause(3000);
        await expect(this.verifyEpisodeList).toBeDisplayed();

        let contents = await this.fetchAllEpisodeContent;
        for (let i = 0; i <= contents.length - contents.length; i++) {
            await browser.pause(1000);
            // await contents[i].scrollIntoView();
            await contents[i].moveTo();
            console.log(await contents[i].getText());
            await contents[i].click();
            await browser.pause(3000);
        }
        await expect(this.resumebuttonInPlayerScreen).toBeDisplayed();
        await (await this.resumebuttonInPlayerScreen).combinedClick("Resume Button In Player Screen");
        await expect(this.verifyContentPlayBackIcon).toBeDisplayed();
        await expect(this.verifyPlayerSettingIcon).toBeDisplayed();

    }
}

export default new PlayerPage();
