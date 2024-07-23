import { expect } from "chai";
import { beforeEach } from "mocha";
import { ChainablePromiseElement } from "webdriverio";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";

describe("OnBoarding Test Cases", async () => {
  
  it(`Test case-1 : Validate Intro screen (Home,Shows,Movies)  tabs are displayed`, async () => {
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
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).findElementAndVerifyText("MOVIES");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).findElementAndVerifyText("SHOWS");
  });

  it(`Test case-2 :Validate Intro (Home) screen should contains "Caurosal banner", "Search, Login, SignUp" Option`, async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (await OnBoardingPage.searchText).findElementAndVerifyText("SEARCH");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Log in")
    ).findElementAndVerifyText("LOG IN");
    await (
      await OnBoardingPage.loginAndSignUpButtons("Sign up")
    ).findElementAndVerifyText("SIGN UP");
    await browser.pause(1000);
    await browser.refresh();
    const courouselbanners = await OnBoardingPage.allcourouselsNames;
    const Length = courouselbanners.length;
    const arr: string[] = [];
    for (let i = 0; i < Length; i++) {
      arr.push(await courouselbanners[i].getAttribute("data-title"));
      driver.logUtil("Pass", `Corousels:-${arr[i]}`);
    }
    let data: string[] = await Array.from(new Set(arr));
    driver.logUtil("Pass", `Corousels content Names:- ${data.join(", ")}`);
  });

  it(`Test case-3:Validate that user can scroll carousal banner manually to right/Left side`, async () => {
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
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).findElementAndVerifyText("MOVIES");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).findElementAndVerifyText("SHOWS");
    await (await OnBoardingPage.prevButtonInCouroselBanner).moveTo();
    await (
      await OnBoardingPage.prevButtonInCouroselBanner
    ).combinedClick("Preview1 Button");
    await browser.pause(1000);
    await (await OnBoardingPage.Courouselbanner).moveTo();
    const movieName = await (
      await OnBoardingPage.Courouselbannername
    ).getAttribute("href");
    driver.logUtil("Pass", `movie Name :- ${movieName}`);
    const movieNameMatch = movieName.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch && movieNameMatch.length > 1) {
      const movieName = movieNameMatch[1];
      driver.logUtil("Pass", `movie Name :- ${movieName}`);
    } else {
      console.log("Movie name not found in the URL");
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.prevButtonInCouroselBanner).moveTo();
    await (
      await OnBoardingPage.prevButtonInCouroselBanner
    ).combinedClick("Preview2 Button");
    await browser.pause(1000);
    await (await OnBoardingPage.Courouselbanner).moveTo();
    const movieName1 = await (
      await OnBoardingPage.Courouselbannername
    ).getAttribute("href");
    console.log(`movie Name :- ${movieName}`);
    driver.logUtil("Pass", `movie Name :- ${movieName}`);
    const movieNameMatch1 = movieName1.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch1 && movieNameMatch1.length > 1) {
      const movieName1 = movieNameMatch1[1];
      driver.logUtil("Pass", `movie Name :- ${movieName1}`);
    } else {
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.NextButtonInCouroselBanner).moveTo();
    await (
      await OnBoardingPage.NextButtonInCouroselBanner
    ).combinedClick("Forward Button");
    await browser.pause(1000);
    await (await OnBoardingPage.Courouselbanner).moveTo();
    const movieName3 = await (
      await OnBoardingPage.Courouselbannername
    ).getAttribute("href");
    console.log(`movie Name :- ${movieName}`);
    driver.logUtil("Pass", `movie Name :- ${movieName}`);
    const movieNameMatch3 = movieName3.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch3 && movieNameMatch3.length > 1) {
      const movieName3 = movieNameMatch3[1];
      driver.logUtil("Pass", `movie Name :- ${movieName3}`);
    } else {
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.NextButtonInCouroselBanner).moveTo();
    await (
      await OnBoardingPage.NextButtonInCouroselBanner
    ).combinedClick("Forward Button");
    await browser.pause(1000);
    await (await OnBoardingPage.Courouselbanner).moveTo();
    const movieName4 = await (
      await OnBoardingPage.Courouselbannername
    ).getAttribute("href");
    driver.logUtil("Pass", `movie Name :- ${movieName4}`);
    const movieNameMatch4 = movieName4.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch4 && movieNameMatch4.length > 1) {
      const movieName4 = movieNameMatch4[1];
      driver.logUtil("Pass", `movie Name :- ${movieName4}`);
    } else {
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
  });

  it(`Test case-4:Validate the functionality of "Search" option `, async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (await OnBoardingPage.searchText).combinedClick("Search Bar");
    await (await OnBoardingPage.searchBar).setValue("gxghjjj", "Search value");
    await (
      await OnBoardingPage.crossButtonForSearchBar
    ).verifyElementIsDisplayedTrue("Search Bar Cross[X] Button");
    await (
      await OnBoardingPage.ErrorMessage2
    ).findElementAndVerifyText(
      "No results match your search term. Please try again"
    );
    await browser.pause(1000);
    await (await OnBoardingPage.searchBar).clearValue();
    await (await OnBoardingPage.searchBar).setValue("John", "Search value");
    await (
      await OnBoardingPage.exploreRelatesTitlesText
    ).findElementAndVerifyText("Explore titles related to:");
    const exploreTitles = await await OnBoardingPage.relatedTitlesAndGenres;
    const Length = exploreTitles.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await exploreTitles[i].getText();
      driver.logUtil("Pass", `exploreTitles:-${arr[i]}`);
    }
  });
});
