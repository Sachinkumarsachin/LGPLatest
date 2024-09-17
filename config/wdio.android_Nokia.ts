import { config } from "./wdio.conf";
import { join } from "path";
import type { Options } from "@wdio/types";

(config.specs = [
  "../test/specs/Android/OnBoarding.spec.ts",
  "../test/specs/Android/LoginAndSignUp.spec.ts",
  "../test/specs/Android/Subscriptions.spec.ts",
  "../test/specs/Android/DetailScreen.spec.ts",
  "../test/specs/Android/ViewAll.spec.ts",
  "../test/specs/Android/ExpiredUser.spec.ts",
  "../test/specs/Android/LandingScreen.spec.ts",
  "../test/specs/Android/Download.spec.ts",
  "../test/specs/Android/Player.spec.ts",
  "../test/specs/Android/ParentalControl.spec.ts"

]),
  // Patterns to exclude.
  (config.exclude = [
    // 'path/to/excluded/files'
  ]),
  (config.capabilities = [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "Nokia",
     "appium:udid": "DT89571GA1A30600845",
      "appium:platformVersion": "11",
      "appium:automationName": "uiautomator2",
      //Only For Debug build
    //   "appium:app": join(
    //     process.cwd(),
    //     "Apps/mobile-lionsgateplay-debug-6.13.2-3090.apk"
    //   ),
      "appium:appPackage": "com.lionsgateplay.videoapp",
      "appium:appActivity":
        "com.parsifal.starz.ui.features.launcher.LauncherActivity",
      "appium:newCommandTimeout": 15000,
      "appium:noReset": false,
      // "appium:systemPort": 8200
    },
    // {
    //   "appium:platformName": "Android",
    //   // "appium:deviceName": "10BD2P1LAC000PL",
    //   // "appium:platformVersion": "14",
    //   "appium:deviceName": "RZ8N930890Y",
    //   "appium:platformVersion": "12",
    //   "appium:automationName": "uiautomator2",
    //   //Only For Debug build
    //   "appium:app": join(
    //     process.cwd(),
    //     "Apps/mobile-lionsgateplay-debug-6.13.2-3090.apk"
    //   ),
    //   "appium:appPackage": "com.lionsgateplay.videoapp",
    //   "appium:appActivity":
    //     "com.parsifal.starz.ui.features.launcher.LauncherActivity",
    //   "appium:newCommandTimeout": 15000,
    //   "appium:noReset": false,
    //   "appium:systemPort": 8201
    // }
  ]),
  (config.port = 4723),
  (config.services = ["appium"]),
  (config.maxInstances = 1),
  (exports.config = config);
