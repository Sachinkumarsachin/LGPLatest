import { config } from "./wdio.conf";
import { join } from "path";

config.specs = ["../test/specs/Android/AndOnBoarding.spec.ts"];

(config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "10BD2P1LAC000PL",
    "appium:platformVersion": "14",
    "appium:automationName": "uiautomator2",
    "appium:appPackage": "com.android.chrome",
    "appium:appActivity": "com.google.android.apps.chrome.Main",
    "appium:newCommandTimeout": 15000,
    "appium:noReset": false,
  },
]),
  (config.port = 4723),
  (config.services = ["appium"]),
  (exports.config = config);
