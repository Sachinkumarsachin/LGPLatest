import { config, expect } from "chai";
import { beforeEach } from "mocha";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";

describe(`Details Screen Test Cases`, async () => {
  it("Test case 1:Validate the attributes in movie details screen ", async () => {
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
    ).combinedClick("Movies Tab");
    // await (await OnBoardingPage.prevButtonInCouroselBanner).moveTo();
    // await (
    //   await OnBoardingPage.NextButtonInCouroselBanner
    // ).combinedClick("Preview1 Button");
    // await browser.refresh();
    // await (await OnBoardingPage.Courouselbanner).waitForDisplayed();
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    // const gsh = await (
    //   await OnBoardingPage.controlsInHomePageCourouselBanner
    // ).isDisplayed();
    // console.log(gsh);
    // await (await OnBoardingPage.CourouselbannerText).waitForDisplayed();
    // const courouselContentTitle = await (
    //   await OnBoardingPage.CourouselbannerText
    // ).getAttribute("data-title");
    // console.log(courouselContentTitle);
    const movieName = await (
      await OnBoardingPage.courouselBannerNameInCenter
    ).getAttribute("href");
    let movieNames;
    const movieNameMatch = movieName.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch && movieNameMatch.length > 1) {
      movieNames = movieNameMatch[1];
      driver.logUtil("Pass", `movie Name :- ${movieNames}`);
    } else {
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    await (
      await OnBoardingPage.courouselBannerWithCenter
    ).combinedClick("Courousel banner");
    const ContentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `content Title:- ${ContentTitle}`);
    await (
      await OnBoardingPage.playButtonInContentbanner
    ).verifyElementIsDisplayedTrue("Play button In content Image");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    // expect(courouselContentTitle).to.eql(contentTitle);
    // console.log(`${courouselContentTitle} and ${contentTitle} are matched`);
    const contentDetails = await await OnBoardingPage.contentDetails;
    var Length = contentDetails.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await contentDetails[i].getText();
      driver.logUtil("Pass", "content Details ==>" + arr[i]);
    }
    driver.logUtil(
      "Pass",
      `content Details : Year: ${arr[0]}, Seasons :${arr[1]}, Genre:${arr[2]}, Genre:${arr[3]}, Genre:${arr[4]} ,Rating:${arr[5]} `
    );
    const ContentDescription = await (
      await OnBoardingPage.contentDetailDescriptionText
    ).getText();
    driver.logUtil("Pass", `Description : ${ContentDescription}`);
    const contentDetails1 = await OnBoardingPage.contentDetailsList;
    const contentDetails2 = await OnBoardingPage.contentDetailsListData;
    const Length1 = contentDetails1.length;
    const Length3 = contentDetails2.length;
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < Length1 && Length3; i++) {
      arr1[i] = await contentDetails1[i].getText();
      arr2[i] = await contentDetails2[i].getText();
      driver.logUtil("Pass", `content Details1 : ${arr1[i]}  ${arr2[i]}`);
    }
    const castDetail = await (
      await OnBoardingPage.contentDetailsCastText(1)
    ).getText();
    const castDetailList = await (
      await OnBoardingPage.contentDetailsCastList(1)
    ).getText();
    driver.logUtil("Pass", `${castDetail} ${castDetailList}`);
    const castDetailDescriptor = await (
      await OnBoardingPage.contentDetailsCastText(2)
    ).getText();
    const castDetailListData = await (
      await OnBoardingPage.contentDetailsCastList(2)
    ).getText();
    driver.logUtil("Pass", `${castDetailDescriptor} ${castDetailListData}`);
    await (
      await OnBoardingPage.myListOptionUnderContentDetailsInContentPage
    ).findElementAndVerifyText("MY LIST");
    await (
      await OnBoardingPage.myListImageOptionUnderContentDetailsPage
    ).verifyElementIsDisplayedTrue("My LIST Image");
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
        2
      )
    ).verifyElementIsDisplayedTrue("Share Option Image");
    await (
      await OnBoardingPage.trailerAndShareImageOptionUnderContentDetailsInContentPage(
        2
      )
    ).findElementAndVerifyText("SHARE");
  });

  it("Test case 2:Validate the attributes in shows details screen ", async () => {
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
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    // const gsh = await (
    //   await OnBoardingPage.controlsInHomePageCourouselBanner
    // ).isDisplayed();
    // console.log(gsh);
    // await (await OnBoardingPage.CourouselbannerText).waitForDisplayed();
    // const courouselContentTitle = await (
    //   await OnBoardingPage.CourouselbannerText
    // ).getAttribute("data-title");
    // console.log(courouselContentTitle);
    await browser.pause(1000);
    // await browser.refresh();
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    const movieName = await (
      await OnBoardingPage.courouselBannerNameInCenter
    ).getAttribute("href");
    const movieNameMatch = movieName.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch && movieNameMatch.length > 1) {
      const movieNames = movieNameMatch[1];
      driver.logUtil("Pass", `movie Name :- ${movieNames}`);
    } else {
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    await (
      await OnBoardingPage.courouselBannerWithCenter
    ).combinedClick("Courousel banner");
    const ContentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `content Title:- ${ContentTitle}`);
    await (await OnBoardingPage.playButtonInContentbanner).isDisplayed();
    const contentDetails = await await OnBoardingPage.contentDetails;
    var Length = contentDetails.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await contentDetails[i].getText();
      driver.logUtil("Pass", "content Details ==>" + arr[i]);
    }
    driver.logUtil(
      "Pass",
      `content Details : Year: ${arr[0]}, Seasons :${arr[1]}, Genre:${arr[2]}, Genre:${arr[3]}, Genre:${arr[4]} ,Rating:${arr[5]} `
    );
    const ContentDescription = await (
      await OnBoardingPage.contentDetailDescriptionText
    ).getText();
    driver.logUtil("Pass", `Description : ${ContentDescription}`);
    const contentDetails1 = await OnBoardingPage.contentDetailsList;
    const contentDetails2 = await OnBoardingPage.contentDetailsListData;
    const Length1 = contentDetails1.length;
    const Length3 = contentDetails2.length;
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < Length1 && Length3; i++) {
      arr1[i] = await contentDetails1[i].getText();
      arr2[i] = await contentDetails2[i].getText();
      driver.logUtil("Pass", `content Details => ${arr1[i]}  ${arr2[i]}`);
    }
    const castDetail = await (
      await OnBoardingPage.contentDetailsCastText(1)
    ).getText();
    const castDetailList = await (
      await OnBoardingPage.contentDetailsCastList(1)
    ).getText();
    driver.logUtil("Pass", `${castDetail} ${castDetailList}`);
    const castDetailDescriptor = await (
      await OnBoardingPage.contentDetailsCastText(2)
    ).getText();
    const castDetailListData = await (
      await OnBoardingPage.contentDetailsCastList(2)
    ).getText();
    driver.logUtil("Pass", `${castDetailDescriptor} ${castDetailListData}`);
    await (
      await OnBoardingPage.myListOptionUnderContentDetailsInContentPage
    ).findElementAndVerifyText("MY LIST");
    await (
      await OnBoardingPage.myListImageOptionUnderContentDetailsPage
    ).verifyElementIsDisplayedTrue("My LIST Image");
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
        2
      )
    ).verifyElementIsDisplayedTrue("Share Option Image");
    await (
      await OnBoardingPage.trailerAndShareImageOptionUnderContentDetailsInContentPage(
        2
      )
    ).findElementAndVerifyText("SHARE");
  });

  it("Test case 3:Validate Seasons and Episode list in show detail screen", async () => {
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
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    // await (
    //   await OnBoardingPage.playButtonInDetailScreen
    // ).combinedClick("Play Button");
    const contentTitle = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    driver.logUtil("Pass", `Description : ${contentTitle}`);
    await (await OnBoardingPage.episodeInContentUnderShowsTab).moveTo();
    const seasonSelector =
      await OnBoardingPage.seasonSelectorListUnderShowsContentDetailsScreen;
    const Length1 = seasonSelector.length;
    const arr1 = [];
    for (let i = 0; i < Length1; i++) {
      arr1[i] = await seasonSelector[i].getText();
      driver.logUtil("Pass", `Seasons :${arr1[i]}`);
    }
    await (
      await OnBoardingPage.activeSeasonAndNaviagationToAnySeason
    ).combinedClick("Season");
    await (await OnBoardingPage.episodeInContentUnderShowsTab).scrollIntoView();

    const episodesList =
      await await OnBoardingPage.episodeTitlesUnderContentDetailsPage;
    const Length = episodesList.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await episodesList[i].getText();
      driver.logUtil("Pass", `Episode Title:${arr[i]}`);
    }
  });
});
