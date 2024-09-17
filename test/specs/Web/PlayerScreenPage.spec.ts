import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";
import ParentalControlPage from "../../pageobjects/webSanityPages/ParentalControlPage";
// import { expect } from "chai";
import SubCriptionPage from "../../pageobjects/webSanityPages/subcriptionPage";
import PlayerPage from "../../pageobjects/webSanityPages/playerPage";
import { config, expect } from "chai";
import { beforeEach } from "mocha";




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
});

describe("Player Screen Test cases", async()=>{

    it("Test case:28 Validate that Series playback intitiates when click on Play CTA" ,async()=>{
        const onlineStatus = await browser.execute(() => navigator.onLine);
        driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
        await OnBoardingPage.loginToApplication();
        await (
          await OnBoardingPage.noThanksPopupBeforeLogin
        ).combinedClick("No Thanks Button");
        await (
          await OnBoardingPage.navbarItemsInMainPage("Home")
        ).findElementAndVerifyText("HOME");
        await (
          await OnBoardingPage.navbarItemsInMainPage("Shows")
        ).combinedClick("Shows Tab");
        await (await OnBoardingPage.contentHeaders).scrollIntoView();
        await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
        await (
          await OnBoardingPage.contentRailHeaders(1)
        ).combinedClick("First content Under shows");
        await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
        await (
          await OnBoardingPage.episodeInContentUnderShowsTab
        ).combinedClick("Episode 1 Under shows Content");
        await (
          await OnBoardingPage.loginOptionInPlayerDetailScreen
        ).waitForDisplayed();
        await (await OnBoardingPage.toWatchThisContentTextInSubscriptionPopup).findElementAndVerifyText("To watch this content, please sign up or log in to your account.");
        await (
          await OnBoardingPage.loginOptionInPlayerDetailScreen
        ).findElementAndVerifyText("LOG IN");
        await (
          await OnBoardingPage.signUpOptionInPlayerDetailScreen
        ).findElementAndVerifyText("SIGN UP");
        await (await OnBoardingPage.crossXButtonInSignUPORLoginpopup).combinedClick("Cross X button");
        driver.logUtil("Info",`Login as Subscribed User`);

        await (
            await OnBoardingPage.navbarItemsInMainPage("Home")
          ).findElementAndVerifyText("HOME");
          await (
            await OnBoardingPage.loginAndSignUpButtons("Log in")
          ).combinedClick("Login button");
          await (
            await OnBoardingPage.usernameTextField
          ).setValue(
            WebTestData.loginPage_Credentials.subscribed_Username,
            "Subscribed Username"
          );
          await (
            await OnBoardingPage.loginWithPasswordButton
          ).combinedClick("Login with Password");
          await (
            await OnBoardingPage.passwordTextField
          ).setValue(
            WebTestData.loginPage_Credentials.subscribed_Password,
            "Password Field"
          );
          await (
            await OnBoardingPage.loginButton
          ).combinedClick("Login Button in Login with Password page");
          await browser.pause(1000)
          await (
            await OnBoardingPage.navbarItemsInMainPage("Shows")
          ).combinedClick("Shows Tab");
          await (await OnBoardingPage.contentHeaders).scrollIntoView();
          await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
          await (
            await OnBoardingPage.contentRailHeaders(1)
          ).combinedClick("First content Under shows");
          await browser.pause(1000);
          // await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
          await (
            await OnBoardingPage.episodeInContentUnderShowsTab
          ).combinedClick("Episode 1 Under shows Content");
          await browser.pause(3000);
          // await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
          await (
            await OnBoardingPage.resumebuttonInPlayerScreen
          ).waitForDisplayed();
          await (
            await OnBoardingPage.resumebuttonInPlayerScreen
          ).combinedClick("Resume button");

          (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    
    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass",`Movie duration : ${timer}`);
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
    const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
    driver.logUtil("Pass",`Play Button :- ${playText}`);
    const skipDurationInMinutes = 6;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    driver.logUtil("Pass", pressesNeeded);

for (let i = 0; i < pressesNeeded; i++) {
  await browser.keys(["ArrowRight"]);
  await browser.pause(500); // Small pause to ensure the player registers each key press
  // driver.logUtil("Pass", i);
}
    const widthOfProgressBar = await (
    await OnBoardingPage.progressPlaybar).getAttribute("style");
    driver.logUtil("Pass",`content of the Progress bar Initiated Percentage : ${widthOfProgressBar}`);
    const timerAterScrubbing = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass",`Movie duration After Scrubbing: ${timerAterScrubbing}`);
    driver.logUtil("Pass",`Content Playback is Initiated`);
    });

    it("Test case:27 Validate that Movie playback intitiates when click on Play CTA", async()=>{
        const onlineStatus = await browser.execute(() => navigator.onLine);
        driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
        await OnBoardingPage.loginToApplication();
        driver.logUtil("Info",`Login as Non-subscribed User`);
        await (
          await OnBoardingPage.noThanksPopupBeforeLogin
        ).combinedClick("No Thanks Button");
        await (
          await OnBoardingPage.navbarItemsInMainPage("Home")
        ).findElementAndVerifyText("HOME");
    
        await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
        // const movieName = await (
        //   await OnBoardingPage.Courouselbannername
        // ).getAttribute("href");
        await (
          await OnBoardingPage.navbarItemsInMainPage("Movies")
        ).combinedClick("Movies Tab");
        await (
          await OnBoardingPage.courouselBannerWithCenter
        ).combinedClick("Courousel Banner");
        await (
          await OnBoardingPage.playButtonInDetailScreen
        ).combinedClick("Play Button");
       await (await OnBoardingPage.toWatchThisContentTextInSubscriptionPopup).findElementAndVerifyText("To watch this content, please sign up or log in to your account.");
        await (
          await OnBoardingPage.loginOptionInPlayerDetailScreen
        ).findElementAndVerifyText("LOG IN");
        await (
          await OnBoardingPage.signUpOptionInPlayerDetailScreen
        ).findElementAndVerifyText("SIGN UP");
        await (await OnBoardingPage.crossXButtonInSignUPORLoginpopup).combinedClick("Cross X button");

        driver.logUtil("Info",`Login as Subscribed User`);
        await (
            await OnBoardingPage.navbarItemsInMainPage("Home")
          ).findElementAndVerifyText("HOME");
          await (
            await OnBoardingPage.loginAndSignUpButtons("Log in")
          ).combinedClick("Login button");
          await (
            await OnBoardingPage.usernameTextField
          ).setValue(
            WebTestData.loginPage_Credentials.subscribed_Username,
            "Subscribed Username"
          );
          await (
            await OnBoardingPage.loginWithPasswordButton
          ).combinedClick("Login with Password");
          await (
            await OnBoardingPage.passwordTextField
          ).setValue(
            WebTestData.loginPage_Credentials.subscribed_Password,
            "Password Field"
          );
          await (
            await OnBoardingPage.loginButton
          ).combinedClick("Login Button in Login with Password page");
          await (
            await OnBoardingPage.navbarItemsInMainPage("Movies")
          ).waitForDisplayed();
          await (
            await OnBoardingPage.navbarItemsInMainPage("Movies")
          ).combinedClick("Movies Tab");
      
          await (await OnBoardingPage.contentHeaders).scrollIntoView();
          await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
          await (
            await OnBoardingPage.contentRailHeaders(1)
          ).combinedClick("First content Under Movies");
          await (
             await OnBoardingPage.playButtonInDetailScreen
           ).combinedClick("Play Button");
         await browser.pause(5000);
          await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Pause Button");
          //await browser.pause(15000);
          await (
            await OnBoardingPage.resumebuttonInPlayerScreen
          ).waitForDisplayed();
      
          await (
            await OnBoardingPage.resumebuttonInPlayerScreen
          ).combinedClick("Resume button");

          (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    
    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass",`Movie duration : ${timer}`);
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    //await browser.pause(5000);
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
    //await browser.pause(5000);
    //await (await OnBoardingPage.playAndPauseButton).findElementAndVerifyText("Play Button");
    const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
    driver.logUtil("Pass",`Play Button :- ${playText}`);
    const skipDurationInMinutes = 5;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    driver.logUtil("Pass", pressesNeeded);

for (let i = 0; i < pressesNeeded; i++) {
  await browser.keys(["ArrowRight"]);
  await browser.pause(200); // Small pause to ensure the player registers each key press
  // driver.logUtil("Pass", i);
}
    const widthOfProgressBar = await (
    await OnBoardingPage.progressPlaybar).getAttribute("style");
    driver.logUtil("Pass",`content of the Progress bar Initiated Percentage : ${widthOfProgressBar}`);
    const timerAterScrubbing = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass",`Movie duration After Scrubbing: ${timerAterScrubbing}`);
    driver.logUtil("Pass",`Content Playback is Initiated`);
    });

    it("Test case:29 Validate that player control for Movies during content playback", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.SubscribedUser3,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
        await OnBoardingPage.navbarItemsInMainPage("Movies")
      ).combinedClick("Movies Tab");
      const allcorousels =
    await ParentalControlPage.allCorouselHeadersInHomePage;
    const Length1 = allcorousels.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await allcorousels[i].getText();
      driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
    }
    const randomIndex = Math.floor(Math.random() * arr1.length);

    // Select the carousel header based on the random index
    const carouselHeader = arr1[randomIndex];
    driver.logUtil("Pass", `Selected Carousel Header:${carouselHeader}`);
    await browser.pause(3000);
     await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
  await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
  const contentTitle = await (
    await OnBoardingPage.contentDetailTitleText
  ).getText();
  driver.logUtil("Pass", `Description : ${contentTitle}`);
  const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
  driver.logUtil("Pass", languagesList);
  await (
    await OnBoardingPage.playButtonInDetailScreen
  ).combinedClick("Play Button");
  await browser.pause(1000);
//   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
//   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
  await (
    await OnBoardingPage.resumebuttonInPlayerScreen
  ).waitForDisplayed();
  await (
    await OnBoardingPage.resumebuttonInPlayerScreen
  ).combinedClick("Resume button");

  (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
await (await OnBoardingPage.contentTitleInPlayerPage).click();

const contentName = await (
await OnBoardingPage.contentTitleInPlayerPage
).getText();
driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
const timer = await (await OnBoardingPage.timerofTheContent).getText();
driver.logUtil("Pass",`Movie duration : ${timer}`);
await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
driver.logUtil("Pass",`Play Button :- ${playText}`);
await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
const selectedOption=await (await OnBoardingPage.languageSelectedWithTickMark).getText();
driver.logUtil("Pass", selectedOption);
 const AudioLanguages=await (await OnBoardingPage.audioLanguagesList);
 const Length = AudioLanguages.length;
 const audioLanguages= [];
 for (let i = 0; i < Length; i++) {
    audioLanguages[i] = await AudioLanguages[i].getText();
   driver.logUtil("Pass", `Audio  Languages:-${audioLanguages[i]}`);
 }
 let languagesArray = languagesList.split(', ').map(lang => lang.trim());
 expect(audioLanguages).to.include.members(languagesArray);
 driver.logUtil("Pass", `Details Screen Languages ${languagesList} are matched with Player Screen Audio options ${audioLanguages}`);
 const randomIndex1 = Math.floor(Math.random() * audioLanguages.length);

    // Select the carousel header based on the random index
    const audioLanguageSelector = audioLanguages[randomIndex1];
    driver.logUtil("Pass", `Selected Audio Languages:${audioLanguageSelector}`);
    await browser.pause(3000);

    //  await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
//   await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
await (await OnBoardingPage.nonSelectedLangauagesInAudio(audioLanguageSelector)).combinedClick("Selected Audio Language");
// await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
    await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
    await browser.pause(2000);
    const windowSize = browser.getWindowSize();
    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
    driver.logUtil("Pass",`Screen orientation: ${orientation}`);
    await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
    await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
    const windowSize1 = browser.getWindowSize();
    const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
    driver.logUtil("Pass",`Screen orientation: ${orientation1}`);
    await browser.pause(2000);
    await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
    await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
    await (await OnBoardingPage.backButtonInPlayerScreen).waitForDisplayed();
    // await (await OnBoardingPage.backButtonInPlayerScreen).findElementAndVerifyText("Back");
    await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");
    });

    it("Test case:30 Validate that player control For Shows during content playback", async()=>{
        const onlineStatus = await browser.execute(() => navigator.onLine);
        driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
        await OnBoardingPage.loginToApplication();
        await (
          await OnBoardingPage.noThanksPopupBeforeLogin
        ).combinedClick("No Thanks Button");
        await (
          await OnBoardingPage.navbarItemsInMainPage("Home")
        ).findElementAndVerifyText("HOME");
        await (
          await OnBoardingPage.loginAndSignUpButtons("Log in")
        ).combinedClick("Login button");
        await (
          await OnBoardingPage.usernameTextField
        ).setValue(
          WebTestData.loginPage_Credentials.SubscribedUser3,
          "Subscribed Username"
        );
        await (
          await OnBoardingPage.loginWithPasswordButton
        ).combinedClick("Login with Password");
        await (
          await OnBoardingPage.passwordTextField
        ).setValue(
          WebTestData.loginPage_Credentials.subscribed_Password,
          "Password Field"
        );
        await (
          await OnBoardingPage.loginButton
        ).combinedClick("Login Button in Login with Password page");
        await browser.pause(1000)
        await (
          await OnBoardingPage.navbarItemsInMainPage("Shows")
        ).waitForDisplayed();
        await (
          await OnBoardingPage.navbarItemsInMainPage("Shows")
        ).combinedClick("Shows Tab");
        await (await OnBoardingPage.contentHeaders).scrollIntoView();
        await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
        await (
          await OnBoardingPage.contentRailHeaders(1)
        ).combinedClick("First content Under shows");
        await browser.pause(3000);
        // await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
        const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
        driver.logUtil("Pass", languagesList);
        await (
          await OnBoardingPage.episodeInContentUnderShowsTab
        ).combinedClick("Episode 1 Under shows Content");
        await browser.pause(3000);
    //   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
    //   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
      await (
        await OnBoardingPage.resumebuttonInPlayerScreen
      ).waitForDisplayed();
      await (
        await OnBoardingPage.resumebuttonInPlayerScreen
      ).combinedClick("Resume button");
    
      (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    
    const contentName = await (
    await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass",`Movie duration : ${timer}`);
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
    const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
    driver.logUtil("Pass",`Play Button :- ${playText}`);
    await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
    await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
    await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
    await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
    const selectedOption=await (await OnBoardingPage.languageSelectedWithTickMark).getText();
    driver.logUtil("Pass", selectedOption);
  //   const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
  // driver.logUtil("Pass", languagesList);
     const AudioLanguages=await (await OnBoardingPage.audioLanguagesList);
     const Length = AudioLanguages.length;
     const audioLanguages= [];
     for (let i = 0; i < Length; i++) {
        audioLanguages[i] = await AudioLanguages[i].getText();
       driver.logUtil("Pass", `Audio  Languages:-${audioLanguages[i]}`);
     }
     let languagesArray = languagesList.split(', ').map(lang => lang.trim());
     expect(audioLanguages).to.include.members(languagesArray);
     driver.logUtil("Pass", `Details Screen Languages ${languagesList} are matched with Player Screen Audio options ${audioLanguages}`);
     const randomIndex1 = Math.floor(Math.random() * audioLanguages.length);
    
        // Select the carousel header based on the random index
        const audioLanguageSelector = audioLanguages[randomIndex1];
        driver.logUtil("Pass", `Selected Audio Languages:${audioLanguageSelector}`);
        await browser.pause(3000);
    
        //  await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    //   await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    await (await OnBoardingPage.nonSelectedLangauagesInAudio(audioLanguageSelector)).combinedClick("Selected Audio Language");
    // await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
        await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
        await browser.pause(2000);
        const windowSize = browser.getWindowSize();
        const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
        driver.logUtil("Pass",`Screen orientation: ${orientation}`);
        await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
        await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
        const windowSize1 = browser.getWindowSize();
        const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
        driver.logUtil("Pass",`Screen orientation: ${orientation1}`);
        await browser.pause(2000);
        await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
        await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
        await (await OnBoardingPage.backButtonInPlayerScreen).waitForDisplayed();
        // await (await OnBoardingPage.backButtonInPlayerScreen).findElementAndVerifyText("Back");
        await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");
    });


    it("Test case :32 Validate the availabilty and functionality of progress bar", async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await browser.pause(1000)
      await (
        await OnBoardingPage.navbarItemsInMainPage("Shows")
      ).combinedClick("Shows Tab");
      await (await OnBoardingPage.contentHeaders).scrollIntoView();
      await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
      await (
        await OnBoardingPage.contentRailHeaders(1)
      ).combinedClick("First content Under shows");
      await browser.pause(3000);
      // await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
      const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
      driver.logUtil("Pass", languagesList);
      await (
        await OnBoardingPage.episodeInContentUnderShowsTab
      ).combinedClick("Episode 1 Under shows Content");
      await browser.pause(3000);
      await (
        await OnBoardingPage.resumebuttonInPlayerScreen
      ).waitForDisplayed();
      await (
        await OnBoardingPage.resumebuttonInPlayerScreen
      ).combinedClick("Resume button");
    
      (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    
    const contentName = await (
    await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass",`Movie duration : ${timer}`);
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
    const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
    driver.logUtil("Pass",`Play Button :- ${playText}`);
    const skipDurationInMinutes = 6;
      const secondsPerPress = 5;
      const totalSecondsToSkip = skipDurationInMinutes * 60;
      const pressesNeeded = totalSecondsToSkip / secondsPerPress;
      driver.logUtil("Pass", pressesNeeded);
  
  for (let i = 0; i < pressesNeeded; i++) {
    await browser.keys(["ArrowRight"]);
    await browser.pause(1000); // Small pause to ensure the player registers each key press
    // driver.logUtil("Pass", i);
  }
  const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
      driver.logUtil("Pass", `Timer of the content After scrubbing : ${timer1}`);
      await browser.pause(1000);
      // await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Pause Button");
      const pauseText=await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).getAttribute("data-state");
      driver.logUtil("Pass", `Play Button :- ${pauseText}`);
  
      await (await OnBoardingPage.pauseButtonInPlayerScreen).combinedClick("Pause Button");
      await browser.pause(1000);
      await (await OnBoardingPage.playButtonInPlayerScreen).combinedClick("Play Button");
  
  //Progress Bar is moving back
  const skipDurationInMinutes1 = 4;
  const secondsPerPress1 = 5;
  const totalSecondsToSkip1 = skipDurationInMinutes1 * 60;
  const pressesNeeded1 = totalSecondsToSkip1 / secondsPerPress1;
  driver.logUtil("Pass", pressesNeeded);
  
  for (let i = 0; i < pressesNeeded1; i++) {
  await browser.keys(["ArrowLeft"]);
  await browser.pause(500); // Small pause to ensure the player registers each key press
  // driver.logUtil("Pass", i);
  }
  const timer2 = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass", `Timer of the content After scrubbing back  : ${timer2}`);
    });

    it("Test case:37 Validate the functionality of Video Quality option in player screen", async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
          await OnBoardingPage.navbarItemsInMainPage("Movies")
        ).combinedClick("Movies Tab");
        const allcorousels =
      await ParentalControlPage.allCorouselHeadersInHomePage;
      const Length1 = allcorousels.length;
      const arr1 = [];
      for (let i = 0; i < Length1; i++) {
        arr1[i] = await allcorousels[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      driver.logUtil("Pass", `Selected Carousel Header:${carouselHeader}`);
      await browser.pause(3000);
       await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(1000);
  //   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
  //   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
  
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  
  const contentName = await (
  await OnBoardingPage.contentTitleInPlayerPage
  ).getText();
  driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass",`Movie duration : ${timer}`);
  await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
  await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
  const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
  driver.logUtil("Pass",`Play Button :- ${playText}`);
  await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
  await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
  await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
  await (await OnBoardingPage.videoQualityButton).combinedClick("Video Quality Button");
  await browser.pause(2000);
  await (await OnBoardingPage.videoQualityOptionText).waitForDisplayed();
  const qualityText=await (await OnBoardingPage.videoQualityOptionText).getAttribute("text");
  driver.logUtil("Pass", qualityText);
  // await (await OnBoardingPage.videoQualityOptionText).findElementAndVerifyText("Quality");
  const videoQualityOptions=await OnBoardingPage.videoQualityOptions;
  const Length2 = videoQualityOptions.length;
  const arr2 = [];
  const arr3=[]
  for (let i = 0; i < Length2; i++) {
    arr2[i] = await videoQualityOptions[i].getAttribute("data-key");
     await videoQualityOptions[i].click();
     arr3[i] = await videoQualityOptions[i].getAttribute("data-val");
    driver.logUtil("Pass", `video Quality options :${arr2[i]} - ${arr3[i]}`);
  }
    });

    it("Test case 36 :Validate the functionality of Subtitles option in player screen", async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
          await OnBoardingPage.navbarItemsInMainPage("Movies")
        ).combinedClick("Movies Tab");
        const allcorousels =
      await ParentalControlPage.allCorouselHeadersInHomePage;
      const Length1 = allcorousels.length;
      const arr1 = [];
      for (let i = 0; i < Length1; i++) {
        arr1[i] = await allcorousels[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      driver.logUtil("Pass", `Selected Carousel Header:${carouselHeader}`);
      await browser.pause(3000);
       await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
    driver.logUtil("Pass", languagesList);
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(1000);
  //   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
  //   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
  
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  
  const contentName = await (
  await OnBoardingPage.contentTitleInPlayerPage
  ).getText();
  driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass",`Movie duration : ${timer}`);
  await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
  await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
  const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
  driver.logUtil("Pass",`Play Button :- ${playText}`);
  await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
  await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
 
  const selectedOption=await (await OnBoardingPage.languageSelectedWithTickMark).getText();
driver.logUtil("Pass", selectedOption);
 const AudioLanguages=await (await OnBoardingPage.audioLanguagesList);
 const Length = AudioLanguages.length;
 const audioLanguages= [];
 for (let i = 0; i < Length; i++) {
    audioLanguages[i] = await AudioLanguages[i].getText();
   driver.logUtil("Pass", `Audio  Languages:-${audioLanguages[i]}`);
 }
await browser.pause(1000);
 await (await OnBoardingPage.subtitlesEnglishOption).combinedClick("English CC option");
 await browser.pause(1000);
 await (await OnBoardingPage.subtitlesEnglishOption).combinedClick("English CC option");
  const skipDurationInMinutes = 10;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    driver.logUtil("Pass", pressesNeeded);

for (let i = 0; i < pressesNeeded; i++) {
  await browser.keys(["ArrowRight"]);
  await browser.pause(1000); // Small pause to ensure the player registers each key press
  // driver.logUtil("Pass", i);
  if(await (await OnBoardingPage.subtitlesTextInPlayerScreen).isDisplayed()===true){
    const ar = await OnBoardingPage.subtitlesTextInPlayerScreen.getText();
    driver.logUtil("Pass", `subtitles :${ar}`);
  }else{
    // driver.logUtil("Pass", "Continue execution");
    
  }
}
    });

    it("Test case 31:Validate the availabilty and functionality of Play/Pause button", async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await browser.pause(1000)
      await (
        await OnBoardingPage.navbarItemsInMainPage("Shows")
      ).combinedClick("Shows Tab");
      await (await OnBoardingPage.contentHeaders).scrollIntoView();
      await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
      await (
        await OnBoardingPage.contentRailHeaders(1)
      ).combinedClick("First content Under shows");
      await browser.pause(3000);
      // await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
      const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
      driver.logUtil("Pass", languagesList);
      await (
        await OnBoardingPage.episodeInContentUnderShowsTab
      ).combinedClick("Episode 1 Under shows Content");
      await browser.pause(3000);
  //   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
  //   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
  
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  
  const contentName = await (
  await OnBoardingPage.contentTitleInPlayerPage
  ).getText();
  driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass",`Movie duration : ${timer}`);
  await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
  await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
  const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
  driver.logUtil("Pass",`Play Button :- ${playText}`);
  const skipDurationInMinutes = 6;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    driver.logUtil("Pass", pressesNeeded);

for (let i = 0; i < pressesNeeded; i++) {
  await browser.keys(["ArrowRight"]);
  await browser.pause(1000); // Small pause to ensure the player registers each key press
  // driver.logUtil("Pass", i);
}
const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", `Timer of the content After scrubbing : ${timer1}`);
    await browser.pause(1000);
    // await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Pause Button");
    const pauseText=await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).getAttribute("data-state");
    driver.logUtil("Pass", `Play Button :- ${pauseText}`);

    await (await OnBoardingPage.pauseButtonInPlayerScreen).combinedClick("Pause Button");
    await browser.pause(1000);
    await (await OnBoardingPage.playButtonInPlayerScreen).combinedClick("Play Button");

//Progress Bar is moving back
const skipDurationInMinutes1 = 4;
const secondsPerPress1 = 5;
const totalSecondsToSkip1 = skipDurationInMinutes1 * 60;
const pressesNeeded1 = totalSecondsToSkip1 / secondsPerPress1;
driver.logUtil("Pass", pressesNeeded);

for (let i = 0; i < pressesNeeded1; i++) {
await browser.keys(["ArrowLeft"]);
await browser.pause(1000); // Small pause to ensure the player registers each key press
// driver.logUtil("Pass", i);
}
const timer2 = await (await OnBoardingPage.timerofTheContent).getText();
driver.logUtil("Pass", `Timer of the content After scrubbing back  : ${timer2}`);

    });

    it(`Test case 33:Validate the availability and Functionality of Player in landscape mode for Movies`, async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
          await OnBoardingPage.navbarItemsInMainPage("Movies")
        ).combinedClick("Movies Tab");
        const allcorousels =
      await ParentalControlPage.allCorouselHeadersInHomePage;
      const Length1 = allcorousels.length;
      const arr1 = [];
      for (let i = 0; i < Length1; i++) {
        arr1[i] = await allcorousels[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      driver.logUtil("Pass", `Selected Carousel Header: ${carouselHeader}`);
      await browser.pause(3000);
       await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
    driver.logUtil("Pass", languagesList);
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(1000);
  //   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
  //   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
  
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  
  const contentName = await (
  await OnBoardingPage.contentTitleInPlayerPage
  ).getText();
  driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass",`Movie duration : ${timer}`);
  await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
  await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
  const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
  driver.logUtil("Pass",`Play Button :- ${playText}`);
  await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
  await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
  const selectedOption=await (await OnBoardingPage.languageSelectedWithTickMark).getText();
  driver.logUtil("Pass", selectedOption);
   const AudioLanguages=await (await OnBoardingPage.audioLanguagesList);
   const Length = AudioLanguages.length;
   const audioLanguages= [];
   for (let i = 0; i < Length; i++) {
      audioLanguages[i] = await AudioLanguages[i].getText();
     driver.logUtil("Pass", `Audio  Languages:-${audioLanguages[i]}`);
   }
   let languagesArray = languagesList.split(', ').map(lang => lang.trim());
   expect(audioLanguages).to.include.members(languagesArray);
   driver.logUtil("Pass", `Details Screen Languages ${languagesList} are matched with Player Screen Audio options ${audioLanguages}`);
   const randomIndex1 = Math.floor(Math.random() * audioLanguages.length);
  
      // Select the carousel header based on the random index
      const audioLanguageSelector = audioLanguages[randomIndex1];
      driver.logUtil("Pass", `Selected Audio Languages: ${audioLanguageSelector}`);
      await browser.pause(3000);
  await (await OnBoardingPage.nonSelectedLangauagesInAudio(audioLanguageSelector)).combinedClick("Selected Audio Language");
      await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
      await browser.pause(2000);
      const windowSize = browser.getWindowSize();
      const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
      driver.logUtil("Pass",`Screen orientation: ${orientation}`);
      await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
      await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
      const windowSize1 = browser.getWindowSize();
      const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
      driver.logUtil("Pass",`Screen orientation: ${orientation1}`);
      await browser.pause(2000);
      await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
      await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
      await (await OnBoardingPage.backButtonInPlayerScreen).waitForDisplayed();
      await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");
    });

    it(`Test case 34:Validate the availability and Functionality of Player controls in landscape mode for Series`, async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
          await OnBoardingPage.navbarItemsInMainPage("Shows")
        ).combinedClick("Shows Tab");
        const allcorousels =
      await ParentalControlPage.allCorouselHeadersInHomePage;
      const Length1 = allcorousels.length;
      const arr1 = [];
      for (let i = 0; i < Length1; i++) {
        arr1[i] = await allcorousels[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      driver.logUtil("Pass", `Selected Carousel Header: ${carouselHeader}`);
      await browser.pause(3000);
       await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    const languagesList=await (await OnBoardingPage.langauagesAndSubtitlesListInContentDetailScreen("Languages: ")).getText();
    driver.logUtil("Pass",`${languagesList}`);
    await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
    await (
      await OnBoardingPage.episodeInContentUnderShowsTab
    ).combinedClick("Episode 1 Under shows Content");
    await browser.pause(1000);
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
  
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  
  const contentName = await (
  await OnBoardingPage.contentTitleInPlayerPage
  ).getText();
  driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass",`Movie duration : ${timer}`);
  await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
  await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
  const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
  driver.logUtil("Pass",`Play Button :- ${playText}`);
  await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
  await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
  const selectedOption=await (await OnBoardingPage.languageSelectedWithTickMark).getText();
  driver.logUtil("Pass", selectedOption);
   const AudioLanguages=await (await OnBoardingPage.audioLanguagesList);
   const Length = AudioLanguages.length;
   const audioLanguages= [];
   for (let i = 0; i < Length; i++) {
      audioLanguages[i] = await AudioLanguages[i].getText();
     driver.logUtil("Pass", `Audio  Languages:-${audioLanguages[i]}`);
   }
   let languagesArray = languagesList.split(', ').map(lang => lang.trim());
   expect(audioLanguages).to.include.members(languagesArray);
   driver.logUtil("Pass", `Details Screen Languages ${languagesList} are matched with Player Screen Audio options ${audioLanguages}`);
   const randomIndex1 = Math.floor(Math.random() * audioLanguages.length);
  
      // Select the carousel header based on the random index
      const audioLanguageSelector = audioLanguages[randomIndex1];
      driver.logUtil("Pass", `Selected Audio Languages: ${audioLanguageSelector}`);
      await browser.pause(3000);
  await (await OnBoardingPage.nonSelectedLangauagesInAudio(audioLanguageSelector)).combinedClick("Selected Audio Language");
      await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
      await browser.pause(2000);
      const windowSize = browser.getWindowSize();
      const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
      driver.logUtil("Pass",`Screen orientation: ${orientation}`);
      await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
      await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
      const windowSize1 = browser.getWindowSize();
      const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
      driver.logUtil("Pass",`Screen orientation: ${orientation1}`);
      await browser.pause(2000);
      await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
      await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
      await (await OnBoardingPage.backButtonInPlayerScreen).waitForDisplayed();
      await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");
    });

    it("Test Case:38 Validate the functionality of Audio option in player screen", async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.SubscribedUser3,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
          await OnBoardingPage.navbarItemsInMainPage("Movies")
        ).combinedClick("Movies Tab");
        const allcorousels =
      await ParentalControlPage.allCorouselHeadersInHomePage;
      const Length1 = allcorousels.length;
      const arr1 = [];
      for (let i = 0; i < Length1; i++) {
        arr1[i] = await allcorousels[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      driver.logUtil("Pass", `Selected Carousel Header:${carouselHeader}`);
      await browser.pause(3000);
       await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(1000);
  //   (await OnBoardingPage.playAndPauseButtonInPlayerScreen).waitForDisplayed();
  //   await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
  
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
  await (await OnBoardingPage.contentTitleInPlayerPage).click();
  
  const contentName = await (
  await OnBoardingPage.contentTitleInPlayerPage
  ).getText();
  driver.logUtil("Pass",`Movie Name In Player Screen : ${contentName}`);
  const timer = await (await OnBoardingPage.timerofTheContent).getText();
  driver.logUtil("Pass",`Movie duration : ${timer}`);
  await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
  await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
  const playText=await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
  driver.logUtil("Pass",`Play Button :- ${playText}`);
  await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
  await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
  await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
  await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and subttles button");
  const selectedOption=await (await OnBoardingPage.languageSelectedWithTickMark).getText();
  driver.logUtil("Pass", selectedOption);
   const AudioLanguages=await (await OnBoardingPage.audioLanguagesList);
   const Length = AudioLanguages.length;
   const audioLanguages= [];
   for (let i = 0; i < Length; i++) {
      audioLanguages[i] = await AudioLanguages[i].getText();
      await AudioLanguages[i].combinedClick("Audio options");
     driver.logUtil("Pass", `Audio  Languages:-${audioLanguages[i]}`);
  };
    });

    it("Test case:46 Validate that Trailer playback fuctionality", async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Username,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Movies")
      ).waitForDisplayed();
      await (
        await OnBoardingPage.navbarItemsInMainPage("Movies")
      ).combinedClick("Movies Tab");
      // await (await OnBoardingPage.navbarItemsInMainPage("Movies")).combinedClick("Movies Tab");
      const allcorousels =
      await ParentalControlPage.allCorouselHeadersInHomePage;
      const Length1 = allcorousels.length;
      const arr1 = [];
      for (let i = 0; i < Length1; i++) {
        arr1[i] = await allcorousels[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      driver.logUtil("Pass", `Selected Carousel Header:, ${carouselHeader}`);
      await browser.pause(3000);
       await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await(await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(),1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    await (
      await OnBoardingPage.trailerAndShareImageOptionUnderContentDetailsInContentPage(
        1
      )
    ).verifyElementIsDisplayedTrue("Trailer Option Image");
    if(await (await OnBoardingPage.trailerTextUnderContentDetailsPage).isDisplayed()==true){
  
    
    await (
      await OnBoardingPage.trailerTextUnderContentDetailsPage
    ).findElementAndVerifyText("TRAILER");
    await (
      await OnBoardingPage.trailerAndShareImageOptionUnderContentDetailsInContentPage(
        1
      )
    ).combinedClick("Trailer Option");
    await browser.pause(5000);
      if (await (await OnBoardingPage.resumebuttonInPlayerScreen).isDisplayed()) {
        // If the resume button is displayed, click on it
        await (await OnBoardingPage.resumebuttonInPlayerScreen).combinedClick("Resume button");
    } else {
        // If the resume button is not displayed, continue with other actions
        driver.logUtil("Pass", "Resume button is not displayed. Continuing with other actions...");
        // Add your code here for handling the scenario when the resume button is not visible
    }
      
      const contentName = await (
        await OnBoardingPage.contentTitleInPlayerPage
      ).getText();
      driver.logUtil("Pass", `content Name : ${contentName}`);
      const timer = await (await OnBoardingPage.timerofTheContent).getText();
      driver.logUtil("Pass",`Timer of the content : ${timer}`)
      await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
      await browser.pause(5000);
      await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
      await browser.pause(3000);
      await (await OnBoardingPage.playAndPauseButton).findElementAndVerifyText("Play/Pause");
  
      await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");
  
      await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
      const windowSize = browser.getWindowSize();
      const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
      driver.logUtil("Pass",`Screen orientation: ${orientation}`);
      await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
      await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
      const windowSize1 = browser.getWindowSize();
      const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
      driver.logUtil("Pass",`Screen orientation: ${orientation1}`);
      await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
      await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
      await (await OnBoardingPage.backButtonInPlayerScreen).findElementAndVerifyText("Back");
      await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");
      await (await OnBoardingPage.backButtonInPlayerScreen).combinedClick("Back Arrow In Player screen");
      const contentTitle1 = await (
        await OnBoardingPage.contentDetailTitleText
      ).getText();
      driver.logUtil("Pass", `Description : ${contentTitle1}`);
    }else{
      driver.logUtil("Pass", `This content doesn't contain Trailer`)
    }
    });

    it(`Test case:Validate View All options view in content Page`, async()=>{
      const onlineStatus = await browser.execute(() => navigator.onLine);
      driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
      await OnBoardingPage.loginToApplication();
      await (
        await OnBoardingPage.noThanksPopupBeforeLogin
      ).combinedClick("No Thanks Button");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Home")
      ).findElementAndVerifyText("HOME");
      await (
        await OnBoardingPage.loginAndSignUpButtons("Log in")
      ).combinedClick("Login button");
      await (
        await OnBoardingPage.usernameTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Username,
        "Subscribed Username"
      );
      await (
        await OnBoardingPage.loginWithPasswordButton
      ).combinedClick("Login with Password");
      await (
        await OnBoardingPage.passwordTextField
      ).setValue(
        WebTestData.loginPage_Credentials.subscribed_Password,
        "Password Field"
      );
      await (
        await OnBoardingPage.loginButton
      ).combinedClick("Login Button in Login with Password page");
      await (
        await OnBoardingPage.navbarItemsInMainPage("Movies")
      ).waitForDisplayed();
      await (
        await OnBoardingPage.navbarItemsInMainPage("Movies")
      ).combinedClick("Movies Tab");
      const allcorousels =
      await ParentalControlPage.viewAllOptionsInPages;
      const Headers=await ParentalControlPage.viewAllOptionsCourouselHeaders;
      const Length1 = allcorousels.length;
      const Length2 =Headers.length;
      const arr1 = [];
      const arr2=[];
      for (let i = 0; i < Length1 && Length2; i++) {
        arr1[i] = await allcorousels[i].getText();
        arr2[i] = await Headers[i].getText();
        driver.logUtil("Pass", `Couriousel Header :${arr1[i]}, ${arr2[i]}`);
      }
      const randomIndex = Math.floor(Math.random() * arr1.length);
      const randomIndex1 = Math.floor(Math.random() * arr2.length);
  
      // Select the carousel header based on the random index
      const carouselHeader = arr1[randomIndex];
      const corouselHeaderViewAllOption=arr2[randomIndex1]
      driver.logUtil("Pass", `Selected Carousel Header: ${carouselHeader}`);
      driver.logUtil("Pass", `Selected Carousel Header Option: ${corouselHeaderViewAllOption.toUpperCase()}`);
      await browser.pause(3000);
       await (await ParentalControlPage.vieAllOptionClickRandowmly(" View All").scrollIntoView());
    await(await ParentalControlPage.vieAllOptionClickRandowmly(" View All")).combinedClick("First content");
    const ViewAllPageTitle=await (await ParentalControlPage.TitleOfTheViewAllPage).getText();
    driver.logUtil("Pass", `Title of the view All Page: ${ViewAllPageTitle}`);
    await browser.pause(3000);
    await (await ParentalControlPage.TitleOfTheViewAllPage).verifyElementIsDisplayedTrue("View All Title Page")
    // await (await ParentalControlPage.TitleOfTheViewAllPage).findElementAndVerifyText(corouselHeaderViewAllOption)
    const allcontents =
    await ParentalControlPage.allContentsInViewAllPage;
    const Length = allcontents.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await allcontents[i].getAttribute("title");
      driver.logUtil("Pass", `Content In View All Page :z`);
    }

    });
});

describe("Movies And Shows UPNext Episode Test cases", async()=>{
  it("Test case:39 Validate that next content auto plays at the end of first episode playback", async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Username,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).waitForDisplayed();
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).combinedClick("Movies Tab");

    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First content Under shows");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(3000);
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    
    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    driver.logUtil("Pass", contentName);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", timer);

    const widthOfProgressBar = await (
      await OnBoardingPage.progressPlaybar
    ).getAttribute("style");
    driver.logUtil("Pass", widthOfProgressBar);
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    await browser.pause(5000);
    const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", timer1);
    const windowSize = browser.getWindowSize();

    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';

    driver.logUtil("Pass", `Screen orientation: ${orientation}`);
    await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and Subtitles option");
    await (await OnBoardingPage.contentTitleInPlayerPage).click();

    // const seeksbar = await (await OnBoardingPage.progressButton("width: 0%;")).combinedClick("Scrub");
    
    //Sample time string
    const timeString = timer;

    // Split the string by "/"
    const splitTime = timeString.split("/");

    // Extract the time after the slash
    const timeAfterSlash = splitTime[1].trim();

    // Split the time by ":" to extract hours, minutes, and seconds
    const timeParts = timeAfterSlash.split(":");

    // Convert hours and minutes to minutes and add them together
    const minutes = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);

    driver.logUtil("Pass", `Total Minutes: ${minutes}`);

   const seconds=parseInt(timeParts[2]);
    driver.logUtil("Pass", parseInt(timeParts[2]));

    // const scrollbar = await (await OnBoardingPage.seekbar).combinedClick("seek bar");
    //     // // const scrollbar = await browser.$('//xpath/to/scrollbar'); // Replace XPath with actual XPath
    //     // // const pressright = 5;
    //     // // Simulate scrolling right to fast forward
    //     // // await scrollbar.dragAndDrop({ xOffset: 100, yOffset: 0 }); // Adjust xOffset as needed
    //     // for (let i = 0; i < 5; i++) {
    //     //   await browser.keys(["ArrowRight"]);
    //     //   driver.logUtil("Pass", i);
  //  await browser.pause(5000);
    //     // }

        const skipDurationInMinutes = minutes;
        const secondsPerPress = 5;
        const totalSecondsToSkip = skipDurationInMinutes * 60;
        const pressesNeeded = totalSecondsToSkip / secondsPerPress;
        driver.logUtil("Pass", pressesNeeded);

    for (let i = 0; i < pressesNeeded; i++) {
      await browser.keys(["ArrowRight"]);
      await browser.pause(100); // Small pause to ensure the player registers each key press
      // driver.logUtil("Pass", i);
    }
await browser.pause(100000);
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    const timer3 = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", timer3);
    await (await OnBoardingPage.rateThisMovieText).waitForDisplayed();
    await (await OnBoardingPage.rateThisMovieText).verifyElementIsDisplayedTrue("Rate this movie")

  });


  it("Test case:40 Validate that seasons with episode lists is displayed post tapping on dismiss from upnext card", async()=>{
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).combinedClick("Login button");
    await (
      await OnBoardingPage.usernameTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Username,
      "Subscribed Username"
    );
    await (
      await OnBoardingPage.loginWithPasswordButton
    ).combinedClick("Login with Password");
    await (
      await OnBoardingPage.passwordTextField
    ).setValue(
      WebTestData.loginPage_Credentials.subscribed_Password,
      "Password Field"
    );
    await (
      await OnBoardingPage.loginButton
    ).combinedClick("Login Button in Login with Password page");
    await browser.pause(1000)
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).combinedClick("Shows Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (await OnBoardingPage.contentRailHeaders(1)).waitForDisplayed();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First content Under shows");
    await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
    await (
      await OnBoardingPage.episodeInContentUnderShowsTab
    ).combinedClick("Episode 1 Under shows Content");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    
    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    driver.logUtil("Pass", contentName);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", timer);

    const widthOfProgressBar = await (
      await OnBoardingPage.progressPlaybar
    ).getAttribute("style");
    driver.logUtil("Pass", widthOfProgressBar);
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    await browser.pause(5000);
    const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", timer1);
    const windowSize = browser.getWindowSize();

    // Determine orientation based on width and height
    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';

    driver.logUtil("Pass", `Screen orientation: ${orientation}`);
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
          await browser.pause(1000);
        const timeString = timer;
        
    // Split the string by "/"
    const splitTime = timeString.split("/");

    // Extract the time after the slash
    const timeAfterSlash = splitTime[1].trim();
    driver.logUtil("Pass", timeAfterSlash);
    // Split the time by ":" to extract hours, minutes, and seconds
    const timeParts = timeAfterSlash.split(":");

// Split the time string by ":"
// const timeParts = timeString.split(":");

// Extract minutes and seconds
const minutes = parseInt(timeParts[0]);
const seconds = parseInt(timeParts[1]);

driver.logUtil("Pass", `Minutes: ${minutes});
driver.logUtil("Pass", "Seconds:", ${seconds}`);

// Calculate total seconds from minutes and seconds
const totalSeconds = minutes * 60 + seconds;

driver.logUtil("Pass", `Total Seconds:${totalSeconds}`);

await browser.pause(1000); // Example pause

const skipDurationInMinutes = minutes-1;
const secondsPerPress = 5;
const totalSecondsToSkip = skipDurationInMinutes * 60;
const pressesNeeded = Math.ceil(totalSecondsToSkip / secondsPerPress);

driver.logUtil("Pass", `Presses Needed: ${pressesNeeded}`);


    for (let i = 0; i < pressesNeeded; i++) {
      await browser.keys(["ArrowRight"]);
      await browser.pause(100); // Small pause to ensure the player registers each key press
      driver.logUtil("Pass", i);
    }
    await browser.pause(100000);
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    const timer3 = await (await OnBoardingPage.timerofTheContent).getText();
    driver.logUtil("Pass", timer3);
    await (await OnBoardingPage.rateThisMovieText).waitForDisplayed();
    await (await OnBoardingPage.rateThisMovieText).verifyElementIsDisplayedTrue("Rate this movie")
  });
});

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


});