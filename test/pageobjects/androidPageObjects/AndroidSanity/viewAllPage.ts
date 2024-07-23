import OnBordingPage from "../../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";


class ViewAllPage {


    get verifyViewAllIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/iv_see_all"])[1]');
    }

    get verifyTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title" and @text="Debutants Showcase"]')
    }

    async verifyViewAll() {


        // // Perform a swipe action
        // const element = await this.verifyTitle;
        // const location = await element.getLocation();
        // const size = await element.getSize();

        // const startX = location.x + size.width / 2;
        // const startY = location.y + size.height / 2;

        /*const { height } = await browser.getWindowSize();
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;
 
        const anchor = height * anchorPercentage / 100;
        const startPoint = height * startPointPercentage / 100;
        const endPoint = height * endPointPercentage / 100;
        console.log(height, anchor, startPoint, endPoint);
 
        await (await OnBordingPage.clickOnShow).combinedClick("Show");
 
 
        await browser.touchAction([
            { action: 'press', x: anchor, y: startPoint },
            // { action: 'wait', ms: 1000 }, // Optional wait time
            { action: 'moveTo', x: anchor, y: endPoint },
            'release'
 
        ])*/

        /*  // Define the start and end coordinates for the swipe action
          const startX = 100;
          const startY = 500;
          const endX = 100;
          const endY = 100;
  
          // Perform the swipe action
          await driver.touchAction([
              { action: 'press', x: startX, y: startY },
              // { action: 'wait', ms: 1000 },
              { action: 'moveTo', x: endX, y: endY },
              { action: 'release' }
          ]);*/

        /*let scroll = false;
        while (!scroll) {
            if (
                !(await (
                    (await this.verifyTitle)
                ).isDisplayed())
            ) {
                const { width, height } = await driver.getWindowSize();
                console.log(width, height);
                await driver.touchAction([
                    { action: "press", x: (500), y: (100) },
                    { action: "moveTo", x: (320), y: (height / 1.4) },
                    "release"
                ]);
            } else {
                scroll = true;
                break;
            }
        }  */

        /* await browser.actions([
             browser.action('pointer')
                 .move(500, 2400)
                 .down()
                 .move(250, 250)
                 .up(),
             // browser.action('pointer')
             //     .move(500, 500)
             //     .down()
             //     .move(750, 750)
             //     .up()
         ])   */



        await browser.pause(5000);
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForwards()');

        //await this.verifyTitle.scrollIntoView();
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Popular TV Shows")');
        //await (await this.verifyViewAllIcon).verifyElementIsDisplayedTrue("View All Icon");
        await browser.pause(3000);
        await (await this.verifyTitle).swipeUntilElemetDisplayed("UP")
    }
}

export default new ViewAllPage();
