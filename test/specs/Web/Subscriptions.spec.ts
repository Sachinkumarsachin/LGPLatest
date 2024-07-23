import { config, expect } from "chai";
import { beforeEach } from "mocha";
import WebTestData from "../../testdata/WebTestData.json";
import SubCriptionPage from "../../pageobjects/webSanityPages/subcriptionPage";

describe("Subcription related Test Scripts", async () => {
    it("TC_015. Validate Credit card payments by entering all valid data", async () => {
        await SubCriptionPage.navigateToApplication();
        await SubCriptionPage.enterLoginCredential(WebTestData.loginPage_Credentials.non_Subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
        await SubCriptionPage.verifyCreditOrDebitCard("Due Today", "/Billed quarterly", "/Billed annually");
    })

    it("TC_016. Validate the functionality of 'CHOOSE ANOTHER PAYMENT METHOD' CTA ", async () => {
        await SubCriptionPage.navigateToApplication();
        await SubCriptionPage.enterLoginCredential(WebTestData.loginPage_Credentials.non_Subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
        await SubCriptionPage.verifyCreditOrDebitCard("Due Today", "/Billed quarterly", "/Billed annually");
        await SubCriptionPage.chooseAnotherPaymentMethod();
    })

    // it("TC_017. Validate that on click on UPI payment option user is navigated to 'Enter your mobile' number page for the purchase flow", async () => {
    //     await SubCriptionPage.navigateToApplication();
    //     await SubCriptionPage.enterLoginCredential(WebTestData.loginPage_Credentials.non_Subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
    //     await SubCriptionPage.verifyUPIPayment();
    // })

    it("TC_018. Validate that 'CONTINUE' CTA is enabled post entering valid mobile number ", async () => {
        await SubCriptionPage.navigateToApplication();
        await SubCriptionPage.enterLoginCredential(WebTestData.loginPage_Credentials.non_Subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
        await SubCriptionPage.verifyContinueBtn();
    })

    it("TC_019. Validate the functionality of 'CHOOSE ANOTHER PAYMENT METHOD' CTA ", async () => {
        await SubCriptionPage.navigateToApplication();
        await SubCriptionPage.enterLoginCredential(WebTestData.loginPage_Credentials.non_Subscribed_Username, WebTestData.loginPage_Credentials.subscribed_Password);
        await SubCriptionPage.verifyContinueBtn();
        await SubCriptionPage.chooseAnotherPaymentMethod();

    })
})


