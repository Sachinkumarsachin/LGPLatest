import { config, expect } from "chai";
import { beforeEach } from "mocha";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";
import WebTestData from "../../testdata/WebTestData.json";

let movieNames: string;

describe("Landing Screen and My List Page Test Cases", async () => {
  it("Verify that user is taken to respective content screen on tap of any carousel banner", async () => {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `Internet connection is enabled : ${onlineStatus}`);
    await OnBoardingPage.loginToApplication();
    await (
      await OnBoardingPage.noThanksPopupBeforeLogin
    ).combinedClick("No Thanks Button");
    await (
      await OnBoardingPage.navbarItemsInMainPage("Home")
    ).findElementAndVerifyText("HOME");
    // await (
    //   await OnBoardingPage.navbarItemsInMainPage("Shows")
    // ).combinedClick("Shows Tab");
    await (await OnBoardingPage.contentHeaders).scrollIntoView();
    await (
      await OnBoardingPage.contentRailHeaders(1)
    ).combinedClick("First Movie In Content Rail");
    await (
      await OnBoardingPage.contentNameAndImageUnderContentDetailPage
    ).verifyElementIsDisplayedTrue("Content Image with Play button");
    const contentTitle = await (
      await OnBoardingPage.contentNameAndImageUnderContentDetailPage
    ).getAttribute("title");
    console.log(`Content Name in Image: ${contentTitle}`);
    const content = await (
      await OnBoardingPage.contentDetailTitleText
    ).getText();
    console.log(`Content Title: ${content}`);
    const ContentDetails = await await OnBoardingPage.contentDetails;
    var Length = ContentDetails.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await ContentDetails[i].getText();
    }
    driver.logUtil(
      "Pass",
      `content Details : Year: ${arr[0]}, Duration :${arr[1]}, Genre:${arr[2]}, Genre:${arr[3]},Genre:${arr[4]} `
    );
  });

  it("Validate the avaliablity of My List option under settings drop down", async () => {
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
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    const dropdownOptions = await await OnBoardingPage.settingOptions;
    const Length = dropdownOptions.length;
    const arr = [];
    for (let i = 0; i < Length; i++) {
      arr[i] = await dropdownOptions[i].getText();
      driver.logUtil("Pass", `settings dropdown Option :-${arr[i]}`);
    }
    const optionToValidate = "MY LIST";
    const isOptionPresent = arr.includes(optionToValidate);
    if (isOptionPresent) {
      driver.logUtil(
        "Pass",
        `Option "${optionToValidate}" is present in the List of Settings dropdown.`
      );
    } else {
      driver.logUtil(
        "Fail",
        `Option "${optionToValidate}" is not present List of Settings dropdown.`
      );
    }
  });

  it("Validate that user is able to add any Moive to 'My List' page", async () => {
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
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (
      await OnBoardingPage.myListOptionUnderSettingsTooltip
    ).combinedClick("MY LIST option");
    await browser.pause(5000);
    if (
      (await OnBoardingPage.noContentMessageInMyListPage.isDisplayed()) == false
    ) {
      const myListContents1 = await OnBoardingPage.myListcontents;
      const Length1 = myListContents1.length;
      for (let i = 1; i <= Length1; i++) {
        await (await OnBoardingPage.myListAddedContents).moveTo();
        await (
          await OnBoardingPage.trashIconInMyListPage
        ).combinedClick("Trash Icon");
      }
      driver.logUtil("Pass", `contents are not Present`);
    }
    await (
      await OnBoardingPage.navbarItemsInMainPage("Movies")
    ).combinedClick("Movies Tab");
    await browser.pause(1000);

    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    const movieName = await (
      await OnBoardingPage.courouselBannerNameInCenter
    ).getAttribute("href");
    console.log(movieName);
    const movieNameMatch = movieName.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch && movieNameMatch.length > 1) {
      movieNames = movieNameMatch[1];
      driver.logUtil("Pass", `movie Name :- ${movieNames}`);
    } else {
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    await (
      await OnBoardingPage.myListButtonInCourouselBanner
    ).combinedClick("Courousel Banner");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (
      await OnBoardingPage.myListOptionUnderSettingsTooltip
    ).combinedClick("MY LIST option");
    await browser.pause(5000);
    const myListContents = await OnBoardingPage.myListcontents;
    const Length = myListContents.length;
    let movies;
    for (let i = 1; i <= Length; i++) {
      const split = await OnBoardingPage.moviName(i).getAttribute("href");
      let text = split.split("/");
      if (movieNames == text[2]) {
        movies = text[2];
      }
    }
    expect(movieNames).to.eql(movies);
    driver.logUtil(
      "Pass",
      `WatchList Added content From Home Page ${movies} is present in the List of My List Page.`
    );
    await (await OnBoardingPage.myListAddedContents).moveTo();
    await (
      await OnBoardingPage.trashIconInMyListPage
    ).combinedClick("Trash Icon");
  });

  it(`Validate the avalability and functionality of "Movies" and "Shows" redirection CTA under 'My List' page `, async () => {
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
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (
      await OnBoardingPage.myListOptionUnderSettingsTooltip
    ).combinedClick("MY LIST option");
    await browser.pause(5000);
    if (
      (await OnBoardingPage.noContentMessageInMyListPage.isDisplayed()) == false
    ) {
      const myListContents1 = await OnBoardingPage.myListcontents;
      const Length1 = myListContents1.length;
      for (let i = 1; i <= Length1; i++) {
        await (await OnBoardingPage.myListAddedContents).moveTo();
        await (
          await OnBoardingPage.trashIconInMyListPage
        ).combinedClick("Trash Icon");
      }
      driver.logUtil("Pass", `contents are not Present`);
    }
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings tooltip");
    await (await OnBoardingPage.settingsOptionUnderTooltip).waitForDisplayed();
    await (
      await OnBoardingPage.myListOptionUnderSettingsTooltip
    ).combinedClick("MY LIST Option Under Settings dropdown");
    await (
      await OnBoardingPage.myListPageheader
    ).verifyElementIsDisplayedTrue("MY List Page header");
    await (
      await OnBoardingPage.myListPageheader
    ).findElementAndVerifyText("MY LIST");
    await (
      await OnBoardingPage.myListLibraryImage
    ).verifyElementIsDisplayedTrue("My List Library Image");
    await (
      await OnBoardingPage.noContentMessageInMyListPage
    ).findElementAndVerifyText(
      "Use the “Add to List” feature to save titles to watch later and easily find them here."
    );
    await (
      await OnBoardingPage.checkOutLatestText
    ).findElementAndVerifyText("Check out our latest: MOVIES or TV Shows");
    await (
      await OnBoardingPage.checkOutLatestForMoviesOptionLinkText
    ).findElementAndVerifyText("MOVIES");
    await (
      await OnBoardingPage.checkOutLatestForTVShowsOptionLinkText
    ).findElementAndVerifyText("TV Shows");
  });

  it("Validate that user is able to add any Shows to 'My List' page  ", async () => {
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
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (
      await OnBoardingPage.myListOptionUnderSettingsTooltip
    ).combinedClick("MY LIST option");
    await browser.pause(5000);
    if (
      (await OnBoardingPage.noContentMessageInMyListPage.isDisplayed()) == false
    ) {
      const myListContents1 = await OnBoardingPage.myListcontents;
      const Length1 = myListContents1.length;
      for (let i = 1; i <= Length1; i++) {
        await (await OnBoardingPage.myListAddedContents).moveTo();
        await (
          await OnBoardingPage.trashIconInMyListPage
        ).combinedClick("Trash Icon");
      }
      driver.logUtil("Pass", `contents are not Present`);
    }
    await (
      await OnBoardingPage.navbarItemsInMainPage("Shows")
    ).combinedClick("Shows Tab");
    await browser.pause(1000);
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    const movieName = await (
      await OnBoardingPage.courouselBannerNameInCenter
    ).getAttribute("href");
    console.log(movieName);
    const movieNameMatch = movieName.match(/\/(?:movies|series)\/([^/]+)/);
    if (movieNameMatch && movieNameMatch.length > 1) {
      movieNames = movieNameMatch[1];
      console.log("Movie Name1:", movieName);
      driver.logUtil("Pass", `movie Name :- ${movieNames}`);
    } else {
      console.log("Movie name not found in the URL");
      driver.logUtil("Fail", `Movie name not found in the URL`);
    }
    await (await OnBoardingPage.courouselBannerWithCenter).moveTo();
    await (
      await OnBoardingPage.myListButtonInCourouselBanner
    ).combinedClick("Courousel Banner");
    await (
      await OnBoardingPage.settingsButtonWithTooltip
    ).combinedClick("Settings Tooltip");
    await (
      await OnBoardingPage.myListOptionUnderSettingsTooltip
    ).combinedClick("MY LIST option");
    await browser.pause(5000);
    const myListContents = await OnBoardingPage.myListcontents;
    const Length = myListContents.length;
    let movies;
    for (let i = 1; i <= Length; i++) {
      const split = await OnBoardingPage.moviName(i).getAttribute("href");
      console.log(split);
      let text = split.split("/");
      if (movieNames == text[2]) {
        movies = text[2];
        console.log(movies);
        driver.logUtil("Pass", `${movies}`);
      }
    }
    expect(movieNames).to.eql(movies);
    driver.logUtil(
      "Pass",
      `WatchList Added content From Home Page ${movies} is present in the List of My List Page.`
    );
  });
});
