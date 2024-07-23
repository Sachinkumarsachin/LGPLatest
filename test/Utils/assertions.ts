import AllureReporter from "@wdio/allure-reporter";
import { Key } from "webdriverio";
import { exec } from "child_process";

let day, year, month, monthAbbreviation;
class Assertion {
  public get objPreviousmonth() {
    return $("(//button[@aria-label='Previous month'])[1]");
  }

  public async objStartDate1(startdate) {
    return $(
      "((//div[@class='rs-calendar-body'])[1]//span[text()='" +
        startdate +
        "'])[1]"
    );
  }

  public async objStartDate() {
    return $("((//div[@class='rs-calendar-body'])[1]//span[text()='1'])[1]");
  }

  public async objEndDate1(enddate) {
    return $(
      "((//div[@class='rs-calendar-body'])[1]//span[text()='" +
        enddate +
        "'])[1]"
    );
  }

  public async objEndDate(day, monthAbbreviation, year) {
    return $(
      "//div[@aria-label='" + day + " " + monthAbbreviation + " " + year + "']"
    );
  }

  public get startmon() {
    return $('(//*[@aria-label="Select month"])[1]');
  }

  addLog(log: string) {
    AllureReporter.addStep(`STEP: ${log}`);
    // console.log(`STEP: ${log}`)
  }

  toContain(actual: string, expected: string) {
    expect(actual).toContain(expected);
    // this.addLog(`Assertion >> ${actual} to contain ${expected}`)
    console.log(`assertion >> ${actual} to contain ${expected} `);
  }

  toContainGenericAssertion(actual: string, expected: string) {
    expect(actual).toContain(expected);
    // this.addLog(`Assertion >> ${actual} to contain ${expected}`)
    driver.logUtil(
      "PASS",
      "assertion >> " +
        '"' +
        actual +
        '"' +
        " to contain " +
        '"' +
        expected +
        '"' +
        " are matched"
    );
  }

  async genericGetText(element: Promise<WebdriverIO.Element>) {
    if ((await element).isDisplayed) {
      const text = await (await element).getText();
      driver.logUtil("INFO", "Fetched the text : " + text);
    } else {
      driver.logUtil("FAIL", "Element not displayed to fetch text");
    }
  }

  // public async checkCondition(ele: WebdriverIO.Element, value : string) {
  //     // Implement your condition-checking logic here
  //     // For example, checking if the element has a specific value
  //     const element = await ele
  //     const text = await element.getText();
  //     return text === value;
  // }

  public async swipeRight(num) {
    for (var i = 1; i <= num; i++) {
      browser.keys([Key.ArrowRight]);
    }
  }

  public async swipeDown(num) {
    for (var i = 1; i <= num; i++) {
      browser.keys([Key.ArrowDown]);
    }
  }

  public async generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  public async generateRandomCharacter(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  public async generateRandomNumber(length) {
    const characters = "0123456789";
    let randomNumber = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomNumber += characters.charAt(randomIndex);
    }

    return randomNumber;
  }

  public currentDateAppender(dateChooser: string): string {
    let currentDate: any;

    switch (dateChooser) {
      case "presentDate": // Get the current date
        currentDate = new Date();
        //console.log(currentDate)
        break;

      case "futureDate":
        // Add five days to the current date
        currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        break;

      case "previousDate":
        currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 3);
        break;

      case "nextMonthDate":
        currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 31);
        break;

      default:
        currentDate = "Invalid date method chooser";
    }
    return currentDate;
  }

  /**
   *  This Method is used to select particular date in calender by passing below parameters.
   * @author SREEVATHSA
   * @param startDate
   * @param endDate
   * @param month
   * @param year
   */

  public async CalenderDate(
    startDate: string,
    endDate: string,
    month: string,
    year: string
  ) {
    try {
      let monthYearVal = await this.startmon.getText();
      let ele = await this.getMonthYear(monthYearVal);
      while (!(ele[0] == month && ele[1] == year)) {
        if (year <= ele[1]) {
          await (await this.objPreviousmonth).click();
        }
        monthYearVal = await this.startmon.getText();
        ele = await this.getMonthYear(monthYearVal);
      }
    } catch (error) {
      driver.logUtil("INFO", "Please Input valid Date.");
    }

    await (await this.objStartDate1(startDate)).genericClick("Start date");
    await browser.pause(1000);
    await (await this.objEndDate1(endDate)).genericClick("End date");
  }

  /**
   * This Method is used to split Month and Year
   * @author SREEVATHSA
   * @param monthYearVal
   * @returns
   */

  public async getMonthYear(monthYearVal) {
    return monthYearVal.split(" ");
  }

  /**
   * Method to check if the element is displayed and clicked
   * @param element
   * @param validationText
   */
  public async verifyElementPresentAndClick(
    element: Promise<WebdriverIO.Element>,
    validationText
  ) {
    if (await await (await element).isDisplayed()) {
      await (await element).click();
      await driver.logUtil(
        "PASS",
        validationText + " is displayed and clicked"
      );
    } else {
      await driver.logUtil(
        "FAIL",
        validationText + " is not displayed and clicked"
      );
    }
  }

  /**
   * Method to check if the element is displayed
   * @param element
   * @param validationText
   */
  public async isDisplayedGeneric(
    element: Promise<WebdriverIO.Element>,
    validationText
  ) {
    if (await await (await element).isDisplayed()) {
      await driver.logUtil("PASS", validationText + " is displayed");
    } else {
      await driver.logUtil("FAIL", validationText + " is not displayed ");
    }
  }

  /**
   * Method to check if the element is clicked
   * @param element
   * @param validationText
   */
  public async genericClick(
    element: Promise<WebdriverIO.Element>,
    validationText
  ) {
    if (await await (await element).waitForDisplayed()) {
      await (await element).click();
      await driver.logUtil("PASS", validationText + " is clicked");
    } else {
      await driver.logUtil("FAIL", validationText + " is not clicked");
    }
  }

  /**
   * Method to send the keys to an element
   * @param element
   * @param validationText
   */
  public async genericSetvalue(
    element: Promise<WebdriverIO.Element>,
    inputString,
    validationText
  ) {
    if (await await (await element).isDisplayed()) {
      await (await element).click();
      await (await element).setValue(inputString, "Input Value");
      await driver.logUtil(
        "PASS",
        "Entered the value " +
          '"' +
          inputString +
          '"' +
          " into " +
          validationText
      );
    } else {
      await driver.logUtil(
        "FAIL",
        "Entered the value " +
          '"' +
          inputString +
          '"' +
          " into " +
          validationText
      );
    }
  }

  /* @author : SREEVATHSA
   * This Method is used to find current Date.
   * It returns curent date in the format DD-MMM-YYYY
   */

  public async CurrentDateFinder() {
    function getCurrentDate() {
      let currentDate = new Date();
      day = currentDate.getDate();
      month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
      year = currentDate.getFullYear();

      // Array of month abbreviations
      const monthsAbbreviations = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      // If day is 1, pick the previous month's 30th day
      if (day === 1) {
        month--; // Decrease month by 1
        if (month === 0) {
          month = 12; // If current month is January, set it to December
          year--; // Go to previous year
        }
        day = 30; // Set day to 30
      }

      // Format day and month to have leading zeros if necessary
      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;

      // Get the abbreviated month name
      monthAbbreviation = monthsAbbreviations[month - 1];

      // Construct the date string in the format DD-MMM-YYYY
      let formattedDate = `${day}-${monthAbbreviation}-${year}`;

      return formattedDate;
    }

    // Test the function
    console.log(getCurrentDate());
  }

  /**
   * @author : SREEVATHSA
   * This Method is used to select Date in Calender.
   * It select date in the range 1st of the current month till the current date.
   */

  public async Calender() {
    try {
      await this.CurrentDateFinder();

      let monthYearVal = await this.startmon.getText();
      console.log(monthYearVal);
      let ele = await this.getMonthYear(monthYearVal);
      while (!(ele[0] == monthAbbreviation && ele[1] == year)) {
        if (year <= ele[1]) {
          await (await this.objPreviousmonth).click();
        }
        monthYearVal = await this.startmon.getText();
        ele = await this.getMonthYear(monthYearVal);
      }
    } catch (error) {
      driver.logUtil("INFO", "Please Input valid Date.");
    }

    await (await this.objStartDate()).genericClick("Start date");
    await browser.pause(1000);
    await (
      await this.objEndDate(day, monthAbbreviation, year)
    ).genericClick("End date");
  }

  /**
   * Method to check if the element is displayed and clicked
   * @param element
   * @param validationText
   */

  public async flutter_verifyElementPresentAndClick(
    element: string,
    validationText: string
  ) {
    try {
      if (await driver.execute("flutter:waitFor", await element, 5)) {
        await browser.elementClick(await element);
        await driver.logUtil(
          "PASS",
          validationText + " is displayed and clicked"
        );
      } else {
        await driver.logUtil(
          "FAIL",
          validationText + " is not displayed and clicked"
        );
      }
    } catch {
      await driver.logUtil(
        "FAIL",
        validationText + " is not displayed and clicked"
      );
    }
  }

  /**
   * Method to send the keys to an element
   * @param element
   * @param validationText
   */
  public async flutter_genericSetvalue(
    element: string,
    inputString,
    validationText
  ) {
    try {
      if (await driver.execute("flutter:waitFor", await element, 5)) {
        await browser.elementClick(await element);
        driver.execute("flutter:enterText", inputString);
        await driver.logUtil(
          "PASS",
          "Entered the value " +
            '"' +
            inputString +
            '"' +
            " into " +
            validationText
        );
      } else {
        await driver.logUtil(
          "FAIL",
          "Entered the value " +
            '"' +
            inputString +
            '"' +
            " into " +
            validationText
        );
      }
    } catch {
      await driver.logUtil(
        "FAIL",
        "Entered the value " +
          '"' +
          inputString +
          '"' +
          " into " +
          validationText
      );
    }
  }

  /**
   * Method to check if the element is displayed
   * @param element
   * @param validationText
   */
  public async flutter_isDisplayedGeneric(element: string, validationText) {
    try {
      if (await driver.execute("flutter:waitFor", await element, 9)) {
        await driver.logUtil("PASS", validationText + " is displayed");
      } else {
        await driver.logUtil("FAIL", validationText + " is not displayed ");
      }
    } catch {
      await driver.logUtil("FAIL", validationText + " is not displayed ");
    }
  }

  /**
   * Method to check if the element is clicked
   * @param element
   * @param validationText
   */
  public async flutter_genericClick(element: string, validationText) {
    try {
      if (await driver.execute("flutter:waitFor", await element, 6)) {
        await browser.elementClick(await element);
        await driver.logUtil("PASS", validationText + " is clicked");
      } else {
        await driver.logUtil("FAIL", validationText + " is not clicked");
      }
    } catch {
      await driver.logUtil("FAIL", validationText + " is not displayed ");
    }
  }

  /**
   * Method to check if the element is clicked
   * @param platform
   */
  public async Switch_Platform_Mobile(platform: string) {
    try {
      let platform1 = platform.toUpperCase();
      if ((await platform1) == "NATIVE_APP") {
        await driver.logUtil("INFO", "Switching the Context to Native App");
        await driver.switchContext("NATIVE_APP");
      } else {
        await driver.logUtil("INFO", "Switching the Context to FLUTTER");
        await driver.switchContext("FLUTTER");
      }
    } catch {
      await driver.logUtil("FAIL", "Failed to switch Context");
    }
  }

  // public void tvRemoteEvent(int value) throws Exception {
  // 	String cmd = "adb shell input keyevent " + value + "";
  // 	Runtime.getRuntime().exec(cmd);
  // 	event.log(driver, "INFO", "Performing remote Keyevent");
  // }

  /**
   * Method to check if the element is clicked
   * @param platform
   */
  //  public async tvRemoteEvent(value:number) {
  //     try {
  //         var cmd = "adb shell input keyevent " + value + "";
  //         exec(cmd);
  //         await driver.logUtil("INFO","Performing remote Keyevent")
  //     } catch {
  //         await driver.logUtil("FAIL", "Failed to switch Context")
  //     }
  // }

  public async MobileKeyBoardAction(value: number) {
    try {
      var cmd = "adb shell input keyevent " + value + "";
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error}`);
          return;
        }
        console.log(`Output: ${stdout}`);
        console.error(`Error output: ${stderr}`);
      });
      await driver.logUtil("INFO", "Performing Mobile Key event");
    } catch (error) {
      await driver.logUtil(
        "FAIL",
        "Failed to perform the Mobile KeyBoard Action"
      );
    }
  }
}
export default new Assertion();
