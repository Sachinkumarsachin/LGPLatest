import { config, expect } from "chai";
import { beforeEach } from "mocha";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";
import ParentalControlPage from "../../pageobjects/webSanityPages/ParentalControlPage";

describe(`Player Screen related Test Cases`, async () => {
  it("Validate that content playback", async () => {
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

    // await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    // const movieName = await (
    //   await OnBoardingPage.courouselBannerNameInCenter
    // ).getAttribute("href");
    // await (
    //   await OnBoardingPage.courouselBannerWithCenter
    // ).combinedClick("Courousel Banner");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button");
    await browser.pause(3000);
    // await (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    // await (await OnBoardingPage.contentTitleInPlayerPage).click();
    await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
    // await (await OnBoardingPage.centerOfPLayerScreen).waitForDisplayed();
    // await (await OnBoardingPage.centerOfPLayerScreen).moveTo();
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();

    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    console.log(contentName);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer);

    const widthOfProgressBar = await (
      await OnBoardingPage.progressPlaybar
    ).getAttribute("style");
    console.log(widthOfProgressBar);
    // await (
    //   await OnBoardingPage.centerOfPLayerScreen
    // ).combinedClick("Center of the Screen");
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    await browser.pause(5000);
    const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer1);
    const windowSize = browser.getWindowSize();

    // Determine orientation based on width and height
    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';

    console.log('Screen orientation:', orientation);
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

    console.log("Total Minutes:", minutes);

    const seconds = parseInt(timeParts[2]);
    console.log(parseInt(timeParts[2]));

    // const scrollbar = await (await OnBoardingPage.seekbar).combinedClick("seek bar");
    //     // // const scrollbar = await browser.$('//xpath/to/scrollbar'); // Replace XPath with actual XPath
    //     // // const pressright = 5;
    //     // // Simulate scrolling right to fast forward
    //     // // await scrollbar.dragAndDrop({ xOffset: 100, yOffset: 0 }); // Adjust xOffset as needed
    //     // for (let i = 0; i < 5; i++) {
    //     //   await browser.keys(["ArrowRight"]);
    //     //   console.log(i);
    //  await browser.pause(5000);
    //     // }

    const skipDurationInMinutes = minutes;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    console.log(pressesNeeded);

    for (let i = 0; i < pressesNeeded; i++) {
      await browser.keys(["ArrowRight"]);
      await browser.pause(100); // Small pause to ensure the player registers each key press
      // console.log(i);
    }

    //     const skipDurationInMinutes1 = 1;
    // const secondsPerPress1 = 5;
    // const totalSecondsToSkip1 = skipDurationInMinutes1 * 60;
    // const pressesNeeded1 = totalSecondsToSkip1 / secondsPerPress1;
    // console.log(pressesNeeded);

    // for (let i = 0; i < pressesNeeded1; i++) {
    // await browser.keys(["ArrowLeft"]);
    // await browser.pause(100); // Small pause to ensure the player registers each key press
    // // console.log(i);
    // }

    // await browser.pause(1000)
    // const pauseText=await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).getAttribute("data-state");
    // console.log(`Play Button :- ${pauseText}`);

    // await (await OnBoardingPage.pauseButtonInPlayerScreen).combinedClick("Pause Button");
    // await browser.pause(1000);
    // await (await OnBoardingPage.playButtonInPlayerScreen).combinedClick("Play Button");

    //     const skipDurationSeconds = seconds+5;
    //     const secondsPerPress1 = 5;
    //     // const totalSecondsToSkip = skipDurationInMinutes * 60;
    //     const pressesNeeded1 = skipDurationSeconds / secondsPerPress1;
    //     console.log(pressesNeeded1);

    // for (let i = 0; i < pressesNeeded1; i++) {
    //   await browser.keys(["ArrowRight"]);
    //   await browser.pause(200); // Small pause to ensure the player registers each key press
    //   console.log(i);
    // }
    // console.log("Move for 5 seconds");

    // await browser.pause(10000);
    // const skipDurationSeconds1 = 5;
    // const secondsPerPress2 = 1;
    // // const totalSecondsToSkip = skipDurationInMinutes * 60;
    // const pressesNeeded2 = secondsPerPress2;
    // console.log(pressesNeeded2);

    // for (let i = 0; i < pressesNeeded2; i++) {
    // await browser.keys(["ArrowRight"]);
    // await browser.pause(100); // Small pause to ensure the player registers each key press
    // console.log(i);
    // }

    // const skipDurationSeconds2 = 5; // Adjust this value to skip forward by desired seconds
    // const secondsPerPress3 = 5; // Assuming each press skips 5 seconds

    // // Calculate the number of key presses needed to skip `skipDurationSeconds` seconds
    // const pressesNeeded4 = Math.ceil(skipDurationSeconds2 / secondsPerPress3);
    // console.log(`Presses needed: ${pressesNeeded4}`);

    // try {
    //   // Iterate through each press
    //   for (let i = 0; i < pressesNeeded4; i++) {
    //       await browser.keys(["ArrowRight"]); // Press the right arrow key to skip forward
    //       await browser.pause(100); // Small pause to ensure the player registers each key press
    //       console.log(`Pressed ${i + 1}/${pressesNeeded4}`);
    //   }

    //   console.log("Video skipped forward successfully.");
    // } catch (error) {
    //   console.error("Error while skipping video forward:", error);
    // }

    // const timeString = timer;

    // // Split the string by "/"
    // const splitTime = timeString.split("/");

    // // Extract the time after the slash
    // const timeAfterSlash = splitTime[1].trim();

    // // Split the time by ":" to extract hours, minutes, and seconds
    // const timeParts = timeAfterSlash.split(":");

    // // Extract hours, minutes, and seconds
    // const hours = parseInt(timeParts[0]);
    // const minutes = parseInt(timeParts[1]);
    // const seconds = parseInt(timeParts[2]);

    // // Calculate total duration in seconds
    // const totalDurationInSeconds = hours * 3600 + minutes * 60 + seconds;
    // console.log("Total Duration in Seconds:", totalDurationInSeconds);

    // // Define seconds per press (5 seconds for your example)
    // const secondsPerPress = 5;

    // // Calculate presses needed to skip through the total duration
    // const pressesNeeded = Math.ceil(totalDurationInSeconds / secondsPerPress);
    // console.log("Presses Needed:", pressesNeeded);

    // Function to simulate skipping through the video
    // async function skipVideo() {
    // try {
    //     // Iterate through each press
    //     for (let i = 0; i < pressesNeeded; i++) {
    //         await browser.keys(["ArrowRight"]); // Press the right arrow key
    //         await browser.pause(200); // Small pause to ensure the player registers each key press
    //         // Add console log if needed to track progress
    //         console.log(`Pressed ${i + 1}/${pressesNeeded}`);
    //     }

    //     console.log("Video skipped successfully.");
    // } catch (error) {
    //     console.error("Error while skipping video:", error);
    // }
    // }

    // Call the function to skip the video
    // skipVideo();



    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    const timer3 = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer3);
    await (await OnBoardingPage.rateThisMovieText).waitForDisplayed();
    await (await OnBoardingPage.rateThisMovieText).verifyElementIsDisplayedTrue("Rate this movie")

  });


  it.only("click on shows", async () => {
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
    // await (
    //   await OnBoardingPage.playButtonInDetailScreen
    // ).combinedClick("Play Button");
    // await (await OnBoardingPage.episodeInContentUnderShowsTab).scrollIntoView();
    await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
    await (
      await OnBoardingPage.episodeInContentUnderShowsTab
    ).combinedClick("Episode 1 Under shows Content");
    // await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
    // await (await OnBoardingPage.centerOfPLayerScreen).waitForDisplayed();
    // await (await OnBoardingPage.centerOfPLayerScreen).moveTo();
    (await OnBoardingPage.contentTitleInPlayerPage).waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();

    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    console.log(contentName);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer);

    const widthOfProgressBar = await (
      await OnBoardingPage.progressPlaybar
    ).getAttribute("style");
    console.log(widthOfProgressBar);
    // await (
    //   await OnBoardingPage.centerOfPLayerScreen
    // ).combinedClick("Center of the Screen");
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    await browser.pause(5000);
    const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer1);
    const windowSize = browser.getWindowSize();

    // Determine orientation based on width and height
    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';

    console.log('Screen orientation:', orientation);
    // await (await OnBoardingPage.audioAndSubtitilesButton).combinedClick("Audio and Subtitles option");
    await (await OnBoardingPage.contentTitleInPlayerPage).click();

    // const seeksbar = await (await OnBoardingPage.progressButton("width: 0%;")).combinedClick("Scrub");

    //     //Sample time string
    //     const timeString = timer;

    //     // Split the string by "/"
    //     const splitTime = timeString.split("/");

    //     // Extract the time after the slash
    //     const timeAfterSlash = splitTime[1].trim();
    //     console.log(timeAfterSlash);
    //     // Split the time by ":" to extract hours, minutes, and seconds
    //     const timeParts = timeAfterSlash.split(":");
    // console.log(timeParts[0]);
    // console.log(timeParts[1]);
    //     // Convert hours and minutes to minutes and add them together
    //     const minutes = parseInt(timeParts[0]);

    //     console.log("Total Minutes:", minutes);


    // const scrollbar = await (await OnBoardingPage.seekbar).combinedClick("seek bar");
    //     // // const scrollbar = await browser.$('//xpath/to/scrollbar'); // Replace XPath with actual XPath
    //     // // const pressright = 5;
    //     // // Simulate scrolling right to fast forward
    //     // // await scrollbar.dragAndDrop({ xOffset: 100, yOffset: 0 }); // Adjust xOffset as needed
    //     // for (let i = 0; i < 5; i++) {
    //     //   await browser.keys(["ArrowRight"]);
    //     //   console.log(i);
    await browser.pause(1000);
    //     // }

    // const skipDurationInMinutes = minutes;
    // const secondsPerPress = 10;
    // const totalSecondsToSkip = skipDurationInMinutes * 60;
    // const pressesNeeded = totalSecondsToSkip / secondsPerPress;

    const timeString = timer;

    // Split the string by "/"
    const splitTime = timeString.split("/");

    // Extract the time after the slash
    const timeAfterSlash = splitTime[1].trim();
    console.log(timeAfterSlash);
    // Split the time by ":" to extract hours, minutes, and seconds
    const timeParts = timeAfterSlash.split(":");

    // Split the time string by ":"
    // const timeParts = timeString.split(":");

    // Extract minutes and seconds
    const minutes = parseInt(timeParts[0]);
    const seconds = parseInt(timeParts[1]);

    console.log("Minutes:", minutes);
    console.log("Seconds:", seconds);

    // Calculate total seconds from minutes and seconds
    const totalSeconds = minutes * 60 + seconds;

    console.log("Total Seconds:", totalSeconds);

    // Example of how you might simulate skipping forward in time using Selenium WebDriver
    // Replace this with your specific automation framework's code
    await browser.pause(1000); // Example pause

    const skipDurationInMinutes = minutes - 1;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    // const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    const pressesNeeded = Math.ceil(totalSecondsToSkip / secondsPerPress);

    console.log("Presses Needed:", pressesNeeded);


    for (let i = 0; i < pressesNeeded; i++) {
      await browser.keys(["ArrowRight"]);
      await browser.pause(100); // Small pause to ensure the player registers each key press
      console.log(i);
    }
    // // const skipDurationInMinutes1 = "1";
    //     const secondsPerPress1 = 10;
    //     // const totalSecondsToSkip1 = skipDurationInMinutes1;
    //     const pressesNeeded1 = 1 / secondsPerPress1;


    // const skipDurationInMinute = seconds;
    // const secondsPerPress1 = 5;
    // // const totalSecondsToSkip1 = skipDurationInMinute * 60;
    // // const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    // const pressesNeeded1 = Math.ceil(skipDurationInMinute / secondsPerPress1);

    // console.log("Presses Needed:", pressesNeeded1);

    //     for (let i = 0; i < pressesNeeded1; i++) {
    //       await browser.keys(["ArrowRight"]);
    //       await browser.pause(100); // Small pause to ensure the player registers each key press
    //       console.log(i);
    //     }

    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    const timer3 = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer3);
    await (await OnBoardingPage.rateThisMovieText).waitForDisplayed();
    await (await OnBoardingPage.rateThisMovieText).verifyElementIsDisplayedTrue("Rate this movie")
  })

  it("Validate that player controls are displayed on the movie player screen during content playback.", async () => {
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
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    const movieName = await (
      await OnBoardingPage.courouselBannerNameInCenter
    ).getAttribute("href");
    await (
      await OnBoardingPage.courouselBannerWithCenter
    ).combinedClick("Courousel Banner");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button In Detail screen");
    await browser.pause(5000);
    // await (await OnBoardingPage.contentTitleInPlayerPage).click();
    // await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Play Button In Player Screen");
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).waitForDisplayed();
    await (
      await OnBoardingPage.resumebuttonInPlayerScreen
    ).combinedClick("Resume button");
    await OnBoardingPage.contentTitleInPlayerPage.waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();

    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    console.log(contentName);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer);
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play or Pause Button");
    await (await OnBoardingPage.playAndPauseButton).findElementAndVerifyText("Play/Pause");

    await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");

    await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
    // await (await OnBoardingPage.voulmeChangeButton).verifyElementIsDisplayedTrue("Volume change Scroll bar");
    await (await OnBoardingPage.audioAndSubtitilesButton).verifyElementIsDisplayedTrue("Audio and Sub-titles Button");
    await (await OnBoardingPage.videoQualityButton).verifyElementIsDisplayedTrue("Video Quality Button");
    const windowSize = browser.getWindowSize();
    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
    driver.logUtil("Pass", `Screen orientation: ${orientation}`);
    await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
    await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
    const windowSize1 = browser.getWindowSize();
    const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
    driver.logUtil("Pass", `Screen orientation: ${orientation1}`);
    await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
    await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
    await (await OnBoardingPage.backButtonInPlayerScreen).findElementAndVerifyText("Back");
    await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");

  });

  it("Validate that Trailer playback fuctionality", async () => {
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
    console.log('Selected Carousel Header:', carouselHeader);
    await browser.pause(3000);
    await (await ParentalControlPage.contentHeadersList(carouselHeader.replace('View All', '').trim()).scrollIntoView());
    await (await ParentalControlPage.contentRailHeaders(carouselHeader.replace('View All', '').trim(), 1)).combinedClick("First content");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    await (
      await OnBoardingPage.trailerAndShareImageOptionUnderContentDetailsInContentPage(
        1
      )
    ).verifyElementIsDisplayedTrue("Trailer Option Image");
    await (
      await OnBoardingPage.trailerTextUnderContentDetailsPage
    ).findElementAndVerifyText("TRAILER");
    await (
      await OnBoardingPage.trailerAndShareImageOptionUnderContentDetailsInContentPage(
        1
      )
    ).combinedClick("Trailer Option");
    // await OnBoardingPage.contentTitleInPlayerPage.waitForDisplayed();
    //   await (await OnBoardingPage.contentTitleInPlayerPage).click();
    await browser.pause(5000);
    // await (await OnBoardingPage.contentTitleInPlayerPage).click();
    // await (await OnBoardingPage.playButtonTextInPlayerScreen).combinedClick("Play Button In Player Screen");
    if (await (await OnBoardingPage.resumebuttonInPlayerScreen).isDisplayed()) {
      // If the resume button is displayed, click on it
      await (await OnBoardingPage.resumebuttonInPlayerScreen).combinedClick("Resume button");
    } else {
      // If the resume button is not displayed, continue with other actions
      console.log("Resume button is not displayed. Continuing with other actions...");
      // Add your code here for handling the scenario when the resume button is not visible
    }

    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    console.log(`content Name : ${contentName}`);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    // console.log(timer);
    driver.logUtil("Pass", `Timer of the content : ${timer}`)
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
    await (await OnBoardingPage.playAndPauseButton).findElementAndVerifyText("Play/Pause");

    await (await OnBoardingPage.muteAndUnmuteButton).verifyElementIsDisplayedTrue("Mute/Unmute Button");

    await (await OnBoardingPage.muteAndUnmuteButton).combinedClick("Mute Button");
    const windowSize = browser.getWindowSize();
    const orientation = (await windowSize).width > (await windowSize).height ? 'landscape' : 'portrait';
    driver.logUtil("Pass", `Screen orientation: ${orientation}`);
    await (await OnBoardingPage.fullScreenOption).verifyElementIsDisplayedTrue("Full Screen Option");
    await (await OnBoardingPage.fullScreenOption).combinedClick("Full Screen Button");
    const windowSize1 = browser.getWindowSize();
    const orientation1 = (await windowSize1).width > (await windowSize1).height ? 'landscape' : 'portrait';
    driver.logUtil("Pass", `Screen orientation: ${orientation1}`);
    await (await OnBoardingPage.exitFullScreenOption).combinedClick("Exit Full Screen Button");
    await (await OnBoardingPage.backButtonInPlayerScreen).verifyElementIsDisplayedTrue("Back Button");
    await (await OnBoardingPage.backButtonInPlayerScreen).findElementAndVerifyText("Back");
    await (await OnBoardingPage.backArrowImage).verifyElementIsDisplayedTrue("Back Arrow Image");
    await (await OnBoardingPage.backButtonInPlayerScreen).combinedClick("Back Arrow In Player screen");
    const contentTitle1 = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle1}`);
  });

  it("Validate the availabilty and functionality of Play/Pause button", async () => {
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
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    const movieName = await (
      await OnBoardingPage.courouselBannerNameInCenter
    ).getAttribute("href");
    await (
      await OnBoardingPage.courouselBannerWithCenter
    ).combinedClick("Courousel Banner");
    await (
      await OnBoardingPage.playButtonInDetailScreen
    ).combinedClick("Play Button In Detail screen");
    await browser.pause(5000);
    // await (await OnBoardingPage.contentTitleInPlayerPage).click();
    // await (await OnBoardingPage.playButtonTextInPlayerScreen).combinedClick("Play Button In Player Screen");
    if (await (await OnBoardingPage.resumebuttonInPlayerScreen).isDisplayed()) {
      // If the resume button is displayed, click on it
      await (await OnBoardingPage.resumebuttonInPlayerScreen).combinedClick("Resume button");
    } else {
      // If the resume button is not displayed, continue with other actions
      console.log("Resume button is not displayed. Continuing with other actions...");
      // Add your code here for handling the scenario when the resume button is not visible
    }
    //   await (
    //     await OnBoardingPage.resumebuttonInPlayerScreen
    //   ).waitForDisplayed();
    //   await (
    //     await OnBoardingPage.resumebuttonInPlayerScreen
    //   ).combinedClick("Resume button");
    await OnBoardingPage.contentTitleInPlayerPage.waitForDisplayed();
    await (await OnBoardingPage.contentTitleInPlayerPage).click();
    // await(await OnBoardingPage.backButtonInPlayerScreen).waitForDisplayed();
    // await(await OnBoardingPage.backButtonInPlayerScreen).moveTo();
    const contentName = await (
      await OnBoardingPage.contentTitleInPlayerPage
    ).getText();
    console.log(contentName);
    const timer = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(timer);
    await (await OnBoardingPage.playAndPauseButton).waitForDisplayed();
    await (await OnBoardingPage.playAndPauseButton).verifyElementIsDisplayedTrue("Play Button");
    // await (await OnBoardingPage.playButtonInPlayerScreen).findElementAndVerifyText("Play/Pause");
    const playText = await (await OnBoardingPage.playButtonTextInPlayerScreen).getAttribute("data-tooltip");
    console.log(`Play Button :- ${playText}`);
    const skipDurationInMinutes = 5;
    const secondsPerPress = 5;
    const totalSecondsToSkip = skipDurationInMinutes * 60;
    const pressesNeeded = totalSecondsToSkip / secondsPerPress;
    console.log(pressesNeeded);

    for (let i = 0; i < pressesNeeded; i++) {
      await browser.keys(["ArrowRight"]);
      await browser.pause(100); // Small pause to ensure the player registers each key press
      // console.log(i);
    }
    const timer1 = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(`Timer of the content After scrubbing : ${timer1}`);
    await browser.pause(1000);
    // await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).combinedClick("Pause Button");
    const pauseText = await (await OnBoardingPage.playAndPauseButtonInPlayerScreen).getAttribute("data-state");
    console.log(`Play Button :- ${pauseText}`);

    await (await OnBoardingPage.pauseButtonInPlayerScreen).combinedClick("Pause Button");
    await browser.pause(1000);
    await (await OnBoardingPage.playButtonInPlayerScreen).combinedClick("Play Button");

    //Progress Bar is moving back
    const skipDurationInMinutes1 = 4;
    const secondsPerPress1 = 5;
    const totalSecondsToSkip1 = skipDurationInMinutes1 * 60;
    const pressesNeeded1 = totalSecondsToSkip1 / secondsPerPress1;
    console.log(pressesNeeded);

    for (let i = 0; i < pressesNeeded1; i++) {
      await browser.keys(["ArrowLeft"]);
      await browser.pause(100); // Small pause to ensure the player registers each key press
      // console.log(i);
    }

    const timer2 = await (await OnBoardingPage.timerofTheContent).getText();
    console.log(`Timer of the content After scrubbing back  : ${timer2}`);
  });
});
