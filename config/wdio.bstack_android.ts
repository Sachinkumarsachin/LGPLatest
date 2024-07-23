import { config } from './wdio.conf'


(config.specs = [
    //"../test/specs/Android/OnBoarding.spec.ts",
    //"../test/specs/Android/LoginAndSignUp.spec.ts",
    //"../test/specs/Android/Subscriptions.spec.ts",
    "../test/specs/Android/DetailScreen.spec.ts",
    //"../test/specs/Android/ViewAll.spec.ts",
    //"../test/specs/Android/ExpiredUser.spec.ts",
    //"../test/specs/Android/LandingScreen.spec.ts",
    "../test/specs/Android/Download.spec.ts",
    // "../test/specs/Android/Player.spec.ts",
    "../test/specs/Android/ParentalControl.spec.ts"

]),



    config.capabilities = [
        {
            // capabilities for local Appium web tests on an Android Emulator
            // 'bstack:options': {
            deviceName: 'Google Pixel 7 Pro',
            platformVersion: '13.0',
            platformName: 'android',
            //}
        },
        // {
        //     // capabilities for local Appium web tests on an Android Emulator
        //     // 'bstack:options': {
        //     deviceName: 'Samsung Galaxy S22 Ultra',
        //     platformVersion: '12.0',
        //     platformName: 'android',
        //     //}
        // },
        {
            // capabilities for local Appium web tests on an Android Emulator
            // 'bstack:options': {
            deviceName: 'OnePlus 11R',
            platformVersion: '13.0',
            platformName: 'android',
            //}
        }
    ];



config.user = "sachin_dAEeJC",
    config.key = "8f8TFfuXJyj1VXTuVxWx",
    config.hostname = 'hub.browserstack.com',
    config.services = [['browserstack', {
        app: 'bs://344ecbf0bb79aac0bd4c0fdf9f328e071c7d33a1',
        testObservability: true,
        testObservabilityOptions: {
            projectName: 'LGP',
            buildName: 'Android Sanity',
            buildTag: 'Experiment',
            sessionName: 'LGP parallel webdriverio-appium',
            debug: true,
            networkLogs: true,
        },
        browserstackLocal: true
    },

    ]]

exports.config = config;



/*exports.config = {
    user: 'sachin_dAEeJC',
    key: '8f8TFfuXJyj1VXTuVxWx',
    hostname: 'hub.browserstack.com',
    services: [
        [
            'browserstack',
            {
                app: 'bs://344ecbf0bb79aac0bd4c0fdf9f328e071c7d33a1',
                buildName: 'Android Sanity',
                browserstackLocal: true
            },
        ]
    ],
    capabilities: [{
        'bstack:options': {
            deviceName: 'Samsung Galaxy S22 Ultra',
            platformVersion: '12.0',
            platformName: 'android',
        }
        // }, {
        //     'bstack:options': {
        //         deviceName: 'Google Pixel 7 Pro',
        //         platformVersion: '13.0',
        //         platformName: 'android',
        //     }
        // }, {
        //     'bstack:options': {
        //         deviceName: 'OnePlus 9',
        //         platformVersion: '11.0',
        //         platformName: 'android',
        //     }
        // }
    }],
    // commonCapabilities: {
    //     'bstack:options': {
    //         projectName: "BrowserStack Sample",
    //         buildName: "bstack-demo",
    //         testObservability: true,
    //         debug: true,
    //         networkLogs: true,
    //         percy: false,
    //         // percyCaptureMode: auto
    //     }
    // }
    //   maxInstances: 10,  
}

exports.config = config;*/

