import { config, expect } from "chai";
import { beforeEach } from "mocha";
import { ChainablePromiseElement } from "webdriverio";
import OnBoardingPage from "../../pageobjects/webSanityPages/onBoardingPage";

import needHelpPage from "../../pageobjects/webSanityPages/Assignment.needHelp.ts";
import Termsnconditions from "../../pageobjects/webSanityPages/Assignment.tnc.ts" ;
import viewAll from "../../pageobjects/webSanityPages/Assignment.viewall.ts";


describe(`Assignments`, async () => {
    it("Test case 1:Validate the Need help page by entering all the valid details", async () => {
        await OnBoardingPage.loginToApplication();
        // await browser.deleteAllCookies();
        // await browser.url("/");
        // await browser.maximizeWindow();
        // await (await browser.url("https://lionsgateplay.com/"));
        // await browser.pause(5000); 
        // await (await  viewAll.homepagebuttondisplayedonhome).verifyElementIsDisplayedTrue();
        if((await needHelpPage.NoThanksonPopup).isDisplayed)
        { await (await needHelpPage.NoThanksonPopup ).combinedClick('No thanks is clicked');
        } else {console.log("No Thanks not displayed");}
        await (await needHelpPage.loginInHomepage).combinedClick('Login Button');
        await (await needHelpPage.loginwithOTP).combinedClick('Login with OTP');
        await (await needHelpPage.needHelpButton).combinedClick('Need Help Button');
        // await (await needHelpPage.needHelpPageTitle).isElementDisplayed('Naviagted to Need help page');
        browser.pause(5000);
        await (await needHelpPage.EmailAddressorMobileNumber).setValue("upitest2@yopmail.com","upitest2@yopmail.com is entered");
        await (await needHelpPage.SubmitMainCategoryDropdown).combinedClick('Submit main Category clicked'); 
        browser.pause(5000);
        const listItems = await browser.$$('ul[data-test-id="help-category-combo-list"] li');
        const itemTexts = [];
        for (let i = 0; i < listItems.length; i++) {  // get the texts from the dropdown 
            const text = await listItems[i].getText();
            itemTexts.push(text);
        }
        for (const text of itemTexts) { // Display the list items in a for loop
            console.log(text);
        }
        for (let i = 0; i < listItems.length; i++) {  // selecting billing from main drop down list
            const text = await listItems[i].getText();
            if (text === "Billing") {
                await listItems[i].click();
                console.log('Billing is clicked from main dropdown');
                break;
            }
        }
        //sub category // not displaying all the elements
        await (await needHelpPage.selectSubCategory).combinedClick('Subcategory dropdown clicked');
        const listItems2 = await browser.$$('ul[data-test-id="help-subcategory-combo-list"] li');
        for (let i=0; i< listItems2.length;i++){
            const text1 = await listItems2[i].getText();
            if (text1 === "Refund Request"){
                await listItems2[i].click();
                console.log('Refund Request is clicked from sub dropdown');
                break;
            }
        }
        ///-------- Sub drop down completed ------////
        await (await needHelpPage.commentsTextBox).combinedClick('comments is clicked');
        await (await needHelpPage.commentsTextBox).setValue("Lorem Ipsum snmbdnmdss sdfjd shdgfsh djgsdf sjdgh","comments entered");
        await (await needHelpPage.SubmitButton).verifyElementIsEnabledTrue("Submit Button is Enabled");
        await browser.pause(5000);      
    });

    it("Test case 2:Validate the Term and Condition Page Title.", async () => {
        // await (await browser.url("https://lionsgateplay.com/"));
        await OnBoardingPage.loginToApplication();
        if((await needHelpPage.NoThanksonPopup).isDisplayed)
            { await (await needHelpPage.NoThanksonPopup ).combinedClick('No thanks is clicked');
            } else {console.log("No Thanks not displayed");}
        await (await Termsnconditions.SignUpInHomepage).combinedClick("Sign Up Button is clicked");
        browser.pause(3000);
        // console.log(Termsnconditions.CreateYourAccountTitle);
        await (await Termsnconditions.CreateYourAccountTitle).findElementAndVerifyTextContains("Create your account");
        browser.pause(3000);
        // await (await Termsnconditions.emailAddressorMobilenumberTextBox).combinedClick("Email or mobile number text field is clicked");
        await (await Termsnconditions.emailAddressorMobilenumberTextBox).setValue("Upitest@Yopmail.com","Upitest@Yopmail.com is entered");
        await (await Termsnconditions.passwordTextBox).combinedClick("Pawword field is clicked");
        await (await Termsnconditions.passwordTextBox).setValue("123456","123456 is entered");
        await (await Termsnconditions.ContinueButtononSignup).verifyElementIsEnabledTrue("Continue button is enabled");
        await (await Termsnconditions.tncButtonSignUppage).combinedClick("tnc link is clicked");
        browser.pause(6000);


        let w = browser.getWindowHandles()
        console.log(w);
        (await w).forEach((handle,index) =>{
            console.log('window ${index + 1}: ${handle}');
        })
        // console.log(browser.getTitle() + ' - Page title of tab')
        // browser.switchToWindow(w[1])

        // console.log(Termsnconditions.TermsofusePageTitle);
        browser.pause(3000);
        // await (await Termsnconditions.TermsofusePageTitle).findElementAndVerifyTextContains("TERMS OF USE");
        const ele = await browser.getWindowHandles();
        console.log("stored in ele");
        console.log('Window Handles:', ele);
           if( ele.length > 1)
         {
            const secondwindow = ele[1];
            console.log('Switching to window handle:',secondwindow);
            browser.switchToWindow(secondwindow);
            await browser.pause(5000);
            console.log('Switched to the second window');
         } else {
            console.log('No additional windows to switch to');
         }

        await (await Termsnconditions.TermsofusePageTitle).findElementAndVerifyText("LIONSGATE - TERMS OF USE");
        await browser.pause(3000);

    });

    it("Test case 3:Validate ViewAll Page Title for respective rails in Home section", async () => {
        // await (await browser.url("https://lionsgateplay.com/"));
        await OnBoardingPage.loginToApplication();
        if((await needHelpPage.NoThanksonPopup).isDisplayed)
            { await (await needHelpPage.NoThanksonPopup ).combinedClick('No thanks is clicked');
            } else {console.log("No Thanks not displayed");}
        await (await viewAll.loginInHomepage).combinedClick("Login Button clicked");
        await (await viewAll.loginwithpassword).combinedClick("Login with password clicked");
        await (await viewAll.LoginpageTitle).findElementAndVerifyTextContains("Log In");
        // await (await viewAll.emailornumbertextbox).combinedClick("email or mobile number textfield is clicked");
        await (await viewAll.emailornumbertextbox).setValue("upitest2@yopmail.com","upitest@yopmail.com is entered");
        // await (await viewAll.passwordtextfield).combinedClick("Password Textfield is clicked");
        await (await viewAll.passwordtextfield).setValue("123456","123456 password is entered");
        await (await viewAll.Loginbutton).combinedClick("login button is clicked");
        await browser.pause(5000);
        await (await viewAll.paylaterbutton).combinedClick("Pay Later is clicked");
        await (await viewAll.homepagebuttondisplayedonhome).findElementAndVerifyTextContains("HOME");
        // await (await viewAll.vieAllAll);
     await browser.pause(10000);
        //const viewalllist = await browser.$$("//*[@class='Heading-link see-all']");
       // const viewalllist1 = await browser.$("(//*[@class='Heading--carousel']//div)[1]");
        //const viewalllist = await browser.$$("(//*[@class='Heading--carousel']//div) ");
        const viewalll = await browser.$$("(//*[@class='Heading--carousel']//a)");

        //console.log(viewalll.length);
        const viewalllisttext = [];
        // for (let i = 0; i < viewalll.length; i++) {  // get the texts from the dropdown
            // console.log(await viewalllist1.getText());
             for(let j=0; j < viewalll.length-1;j++){
                await browser.pause(5000);

                    if(await viewalll[j+1].isDisplayed()){
                        console.log("is dispalyed");
                        await viewalll[j+1].click();
                        await browser.pause(5000);
                        await (await viewAll.titleinsideviewall).verifyElementIsDisplayedTrue(await(await viewAll.titleinsideviewall).getText());

                        await browser.back();
                        await browser.pause(5000);
                        //break;
                    }  else{
                        console.log("not displayed");
                    }
                    }
            
             
            // const text = await viewalllist[i].getText();
            // viewalllisttext.push(text);
        // }
        // if ()
        // for (const text of viewalllisttext) { // Display the list items in a for loop
        //     console.log(text);
        // }

});

});