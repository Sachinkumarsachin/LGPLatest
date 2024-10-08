import type { Options } from "@wdio/types";
import report from "@wdio/allure-reporter";
import { } from "@wdio/allure-reporter/build/types"; // Adjust this import based on your AllureReporter version

import { ChainablePromiseElement } from "webdriverio";
const url = require("../test/testdata/urls");
import { expect as expect } from "chai";
import { beforeEach } from "mocha";
import { expect as expectWDIO } from "@wdio/globals";
let browserCapabilities: string;
let browserISMobile: boolean;
const envurl = url[process.env.ENV];
const ENV = process.env.ENV;
//let allureDir = "reports/allure/"
let i: number = 0;
if (!ENV || !["uat", "dev", "qa"].includes(ENV)) {
  console.log("please pass the correct ENV value : ENV=uat|dev|qa");
  process.exit();
}
const fs = require("fs")

export const config: Options.Testrunner = {
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: [],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    {
      // browserName: 'chrome',
      // browserVersion: 'latest'
    } /*{
        browserName: 'firefox'
    }, {
        browserName: 'safari'
    }, {
        browserName: 'MicrosoftEdge'
    }*/,
  ],

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "silent",

  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  //baseUrl: 'https://uat.lms.excelr.com',
  baseUrl: url[process.env.ENV], //uat/dev
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 200000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["devtools"],
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",

  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    "spec",
    ["video", {
      outputDir: 'allure-results',
      saveAllVideos: true,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
      videoFormat: 'mp4'
    }],
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
      addConsoleLogs: true,
      reportedEnvironmentVars: {
        Environment: ENV,
        Platform: process.platform,
        URL: envurl,

      },
    }],

    [
      "junit",
      {
        outputDir: "junit-reports",
        outputFileFormat: function (options) {
          // return `results-${new Date().getTime()}.xml`
          return `results-${options.cid}.xml`;
        },
      },
    ],
  ],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 750000,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */

  before: async function (capabilities, specs) {
    browserISMobile = await browser.isMobile;
    browserCapabilities = JSON.stringify(capabilities);
    await browser.addCommand(
      "combinedClick",
      async function (value: string) {
        // `this` is return value of $(selector)
        await this.waitForDisplayed();
        if (!browserISMobile) {
          await this.scrollIntoView({ block: "center", inline: "center" });
          await this.waitForClickable();
          await this.moveTo();
        }
        await this.waitForEnabled();
        await this.click();
        await browser.logUtil("PASS", value + " is clicked");
        // report.addStep(`STEP || Clicked on: ${value}`);
      },
      true
    );

    await browser.addCommand(
      "mobileScrollDirectionWise",
      async (direction: string) => {
        switch (direction.toUpperCase()) {
          case "UP": {
            const { width, height } = await driver.getWindowSize();
            await driver.touchAction([
              { action: "longPress", x: width / 2, y: height * 0.8 }, //2/5.5
              { action: "moveTo", x: width / 2, y: height * 0.2 }, //2/1.5
              "release",
            ]);
            await driver.logUtil("INFO", "Swiping " + direction + " direction");
            break;
          }

          case "DOWN": {
            const { width, height } = await driver.getWindowSize();
            await driver.touchAction([
              { action: "longPress", x: width / 2, y: height * 0.2 }, //2/5.5
              { action: "moveTo", x: width / 2, y: height * 0.8 }, //2/1.5
              "release",
            ]);
            await driver.logUtil("INFO", "Swiping " + direction + " direction");
            break;
          }

          case "RIGHT": {
            const { width, height } = await driver.getWindowSize();
            await driver.touchAction([
              { action: "longPress", x: width * 0.2, y: height / 2 }, //2/5.5
              { action: "moveTo", x: width * 0.8, y: height / 2 }, //2/1.5
              "release",
            ]);
            await driver.logUtil("INFO", "Swiping " + direction + " direction");
            break;
          }

          case "LEFT": {
            const { width, height } = await driver.getWindowSize();
            await driver.touchAction([
              { action: "longPress", x: width * 0.8, y: height / 2 }, //2/5.5
              { action: "moveTo", x: width * 0.2, y: height / 2 }, //2/1.5
              "release",
            ]);
            await driver.logUtil("INFO", "Swiping " + direction + " direction");
            break;
          }
        }
      }
    );

    await browser.addCommand(
      "isDisplayedGeneric",
      async function (nameOfTheElement) {
        if (await this.isDisplayed()) {
          await driver.logUtil("PASS", nameOfTheElement + " is displayed");
        } else {
          await driver.logUtil("FAIL", nameOfTheElement + " is not displayed");
        }
      },
      true
    );

    await browser.addCommand(
      "swipeUntilElemetDisplayed",
      async function (direction: string) {
        let display = false;
        const time = Date.now();
        while (!display && Date.now() < time + 25000) {
          if (await this.isDisplayed()) {
            display = true;
            await driver.logUtil("INFO", "Element is displayed");
            break;
          } else {
            await driver.mobileScrollDirectionWise(direction);
            await driver.logUtil(
              "INFO",
              "Elements is not displayed swiping " + direction + " direction"
            );
          }
        }
      },
      true
    );

    // await browser.addCommand(
    //   "verifyElementPresentThenClick",
    //   async function (elem:ChainablePromiseElement<Promise<WebdriverIO.Element>>, validationText) {
    //     if (await elem.isDisplayed()) {
    //         await elem.click();
    //       driver.logUtil("PASS", validationText + " is displayed and clicked");
    //     } else {
    //       driver.logUtil("FAIL", expect(false).to.be.an(takeScreenshot(validationText),validationText+ " is not displayed to click "));
    //     }
    //   }
    // );

    await browser.addCommand(
      "genericGetText",
      async function () {
        if (await this.isDisplayed()) {
          const text = await this.getText();
          await driver.logUtil("INFO", "Fetched the text : " + text);
        } else {
          await driver.logUtil("FAIL", "Element not displayed to fetch text");
        }
      },
      true
    );

    //   async genericGetText(element : Promise<WebdriverIO.Element>){
    //     if((await element).isDisplayed){
    //      const text=await (await element).getText();
    //          driver.logUtil("INFO","Fetched the text : "+text)
    //      }else{
    //          driver.logUtil("FAIL", "Element not displayed to fetch text")
    //      }
    //  }

    await browser.addCommand(
      "verifyElementPresentThenClick",
      async function (validationText) {
        if (await this.isDisplayed()) {
          await this.click();
          // expect((this.isDisplayed).to.expect(true))
          await driver.logUtil(
            "PASS",
            validationText + " is displayed and clicked"
          );
        } else {
          await driver.logUtil(
            "FAIL",
            validationText + " is not displyed to click"
          );
        }
      },
      true
    );

    await browser.addCommand(
      "genericClick",
      async function (validationText) {
        if (await this.waitForDisplayed()) {
          await this.click();
          await driver.logUtil("PASS", "Clicked on " + validationText);
        } else {
          await driver.logUtil("FAIL", "Failed to click on " + validationText);
        }
      },
      true
    );

    await browser.addCommand(
      "genericSetvalue",
      async function (inputString, fieldName) {
        if (await this.isDisplayed()) {
          await this.click();
          await this.setValue(inputString, fieldName);
          await driver.logUtil(
            "PASS",
            "Entered the value " +
            '"' +
            inputString +
            '"' +
            " into " +
            fieldName
          );
        } else {
          await driver.logUtil(
            "FAIL",
            "Failed to enter the value " +
            '"' +
            inputString +
            '"' +
            " into " +
            fieldName
          );
        }
      },
      true
    );

    function severityOfTC(severityLevel: string) {
      report.addSeverity(severityLevel);
    }

    browser.addCommand(
      "findElementAndVerifyText",
      async function (valueText: string, removeSpace = false) {
        let actualText = await this.getText();
        if (removeSpace) {
          actualText = actualText.replaceAll(" ", "");
        }
        expect(actualText).to.equal(valueText);
        await browser.logUtil(
          "PASS",
          "assertion >> " +
          '"' +
          actualText +
          '"' +
          " and " +
          '"' +
          valueText +
          '"' +
          " are matched"
        );
        // report.addStep(
        //   `Actual Text: "${actualText}" match with Expected Text: "${valueText}"`
        // );
      },
      true
    );

    await browser.addCommand(
      "findElementAndVerifyTextContains",
      async function (valueText: string) {
        const actualText = await this.getText();
        expect(actualText).to.contains(valueText);
        driver.logUtil(
          "Pass",
          `Actual Text: "${actualText}" match with Expected Text: "${valueText}"`
        );
      },
      true
    );

    await browser.addCommand(
      "clearAndSetValue",
      async function (text: string, textValue: string) {
        let count = 0;
        const length = await (await this.getValue()).length;
        for (let i = 1; i <= length; i++) {
          await this.setValue(["Backspace"]);
          count++;
        }
        this.setValue(text, textValue);
      },
      true
    );

    await browser.overwriteCommand(
      "setValue",
      async function (setValueFunc: any, text: string, textValue: string) {
        try {
          await setValueFunc(text);
          if (textValue)
            driver.logUtil(
              "Pass",
              `STEP || Entered value ${text} in ${textValue}`
            );
          // report.addStep(`STEP || Entered value ${text} in ${textValue}`);
        } catch (error) {
          throw new Error("Not able to setValue");
        }
      },
      true
    );

    await browser.addCommand(
      "verifyElementIsDisplayedTrue",
      async function (str: string) {
        const actualValue = await this.isDisplayed();
        expect(actualValue).to.eql(true);
        await driver.logUtil("PASS", `"${str}" is displayed`);
      },
      true
    );

    await browser.addCommand(
      "verifyElementIsDisplayedFalse",
      async function (str: string) {
        const actualValue = await this.isDisplayed();
        expect(actualValue).to.eql(false);
        await driver.logUtil("PASS", `"${str}" is not displayed`);
      },
      true
    );

    await browser.addCommand(
      "verifyElementIsEnabledTrue",
      async function (str: string) {
        const actualValue = await this.isEnabled();
        expect(actualValue).to.eql(true);
        await driver.logUtil("PASS", `"${str}" is Enabled`);
      },
      true
    );

    beforeEach(async () => {
      await report.addStep(browserCapabilities, "Capabilities");
      if (i > 0) {
        // await changeStepCount(1);
        if (!browserISMobile) {
          try {
            await browser.deleteAllCookies();
            await browser.maximizeWindow();
          } catch {
            // logger.error("Failed to delete cookies");
            console.log("Failed to delete cookies");
          }

          try {
            await browser.execute(() => {
              try {
                localStorage.clear();
              } catch (error) {
                //
              }
            });
          } catch (error) {
            console.error("localStorage clear error:", error);
          }
        }
        browserISMobile
          ? await driver.reloadSession()
          : await browser.reloadSession();
      }
      i++;
      
      // if (browserISMobile) {
      //   await driver.reloadSession();
      // } else {
      //   await browser.reloadSession();
      // }
      
      // // Clear local storage
      // await driver.execute(() => {
      //   localStorage.clear();
      // });
      
      // }
      // i++;
    });

    await browser.addCommand(
      "logUtil",
      async (status: string, message: string) => {
        switch (status.toUpperCase()) {
          case "FAIL": {
            console.log(`[FAIL]: ${message}`);
            // await AllureReporter.addStep(message, status+" failed");
            await report.addStep(`${status}: ${message}`, status);
            await takeScreenshot(message);
            throw new Error(
              `Failed due to: ${await expect(message).to.equal(true)}`
            );
            break;
          }

          case "PASS": {
            console.log(`[PASS]: ${message}`);
            await report.addStep(message, { status: "passed" });
            //takeScreenshot(message);
            break;
          }

          case "INFO": {
            console.log(`[INFO]: ${message}`);
            await report.addStep(message);
            break;
          }

          case "SKIP": {
            console.log(`[SKIP]: ${message}`);
            await report.addStep(message, { status: "skipped" });
            break;
          }

          case "ERROR": {
            console.error(`[ERROR]: ${message}`);
            await report.addStep(message, { status: "broken" });
            await takeScreenshot(message);
            break;
          }

          case "WARNING": {
            console.warn(`[WARNING]: ${message}`);
            await report.addStep(message, { status: "broken" });
            await takeScreenshot(message);
            break;
          }

          case "DEBUG": {
            console.debug(`[DEBUG]: ${message}`);
            await report.addStep(message, { status: "skipped" });
            break;
          }

          default: {
            console.log(`Case not implemented for: ${status}`);
            break;
          }
        }
      }
      //true
    );

    async function takeScreenshot(screenshotName: string): Promise<void> {
      // Use try-catch to handle any potential errors
      try {
        const screenshot = await browser.takeScreenshot();
        report.addAttachment(
          screenshotName,
          Buffer.from(screenshot, "base64"),
          ""
        );
      } catch (error) {
        console.error(`Failed to take and add screenshot: ${error}`);
      }
    }
  },

  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Hook that gets executed before the suite starts
   * @param {object} suite suite details
   */
  beforeSuite: async function (suite) {
    await console.log(`Capabilities: ${browserCapabilities}`);
  },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  // beforeTest: async function (test, context) {
  //   console.log("::::::::::Test ", test.title, " Started::::::::::");
  // await driver.activateApp("com.excelr");
  // await driver.pause(6000);
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function (test, context, hookName) {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {object}  test             test object
   * @param {object}  context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {*}       result.result    return object of test function
   * @param {number}  result.duration  duration of test
   * @param {boolean} result.passed    true if test has passed, otherwise false
   * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await driver.takeScreenshot();
      // console.log("::::::::::Test ", test.title, " Failed::::::::::");
    }
    if (passed) {
      // console.log("::::::::::Test ", test.title, " Passed::::::::::");
      await driver.takeScreenshot();
    }
    // console.log();
    // console.log();
    // driver.terminateApp("com.excelr");
    // driver.removeApp("com.excelr");
    // await driver.pause(5000);
    // await driver.installApp("./apps/app-release.apk");
    // await driver.pause(6000);
  },

  /**
   * Hook that gets executed after the suite has ended
   * @param {object} suite suite details
   */
  afterSuite: async function (suite) { },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {number} result 0 - command success, 1 - command error
   * @param {object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  // onComplete: function () {
  //   const reportError = new Error("Could not generate Allure report");
  //   const generation = allure(["generate", "allure-results", "--clean"]);
  //   return new Promise<void>((resolve, reject) => {
  //     const generationTimeout = setTimeout(() => reject(reportError), 10000);

  //     generation.on("exit", function (exitCode) {
  //       clearTimeout(generationTimeout);

  //       if (exitCode !== 0) {
  //         return reject(reportError);
  //       }

  //       console.log("Allure report successfully generated");
  //       resolve();
  //     });
  //   });
  // },

  /**
   * Gets executed when a refresh happens.
   * @param {string} oldSessionId session ID of the old session
   * @param {string} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};
