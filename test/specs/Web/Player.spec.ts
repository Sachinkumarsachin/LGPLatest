import { config, expect } from "chai";
import { beforeEach } from "mocha";
import WebTestData from "../../testdata/WebTestData.json";
import SubCriptionPage from "../../pageobjects/webSanityPages/subcriptionPage";
import PlayerPage from "../../pageobjects/webSanityPages/playerPage";

describe("Player related Test Scripts", async () => {
    it("TC_044. Validate that user is able to select contents from Episodes List", async () => {
        await SubCriptionPage.navigateToApplication();
        await SubCriptionPage.entersubLoginCredential(WebTestData.loginPage_Credentials.subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
        await PlayerPage.clickOnAnyEpisode();
    })

    it("TC_045. Validate that user is able to scroll across Episodes list", async () => {
        await SubCriptionPage.navigateToApplication();
        await SubCriptionPage.entersubLoginCredential(WebTestData.loginPage_Credentials.subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
        await PlayerPage.verifyScrollAcrossEpisodeList();
    })


})


