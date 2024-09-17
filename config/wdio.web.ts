import { config } from "./wdio.conf";

config.specs = [
  // "../test/specs/Web/OnBoardingPage.spec.ts",
  // "../test/specs/Web/LoginPage.spec.ts",
  // "../test/specs/Web/Subscriptions.spec.ts",
  // "../test/specs/Web/ExpiredUser.spec.ts",
  // "../test/specs/Web/LandingScreenAndMyList.spec.ts",
  // "../test/specs/Web/DetailsScreen.spec.ts",
  // "../test/specs/Web/Player.spec.ts",
  // "../test/specs/Web/ParentalControl.spec.ts",
  "../test/specs/Web/Assignment.spec.ts",
];

// config.suites = {
//   Login: ["../test/specs/Student_Web/studentOnBoarding.ts"],
//   // Subcription: ["../test/specs/Web/SubscriptionPage.spec.ts"],
// };

config.capabilities = [
  {
    maxInstances: 1,
    browserName: "chrome",
    browserVersion: "125.0.6422.0",
  },
  // {
  //   maxInstances: 1,
  //   browserName: "firefox",
  //   browserVersion: "latest",
  // },
  // {
  //   maxInstances: 2,
  //   browserName: "MicrosoftEdge",
  //   browserVersion: "latest",
  // },
  // {
    
  // }

  //browserVersion: "123.0.6301.2",
  // 'goog:chromeOptions': {
  //       args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage']
  // }
  // },
];

exports.config = config;
