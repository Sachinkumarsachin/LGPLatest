
class SubscriptionsPage {


    get verifyTitleOfPlanListScreen() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/paymentTitle"]');
    }

    get select3MonthsPlan() {
        return $('(//android.widget.LinearLayout[@resource-id="com.lionsgateplay.videoapp:id/container"])[1]/android.widget.RelativeLayout');
    }

    get verify3Months() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/planDuration" and @text="3 Months"]');
    }

    get verifyAmount399() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/planAmount" and @text="INR 399.00"]');
    }

    get select6MonthsPlan() {
        return $('(//android.widget.LinearLayout[@resource-id="com.lionsgateplay.videoapp:id/container"])[2]/android.widget.RelativeLayout');
    }

    get verify12Months() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/planDuration" and @text="12 Months"]');
    }

    get verifyAmount699() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/planAmount" and @text="INR 699.00"]');
    }

    get verifyDueTodayTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/firstBillText"]');
    }

    get verifyBillValueAs399() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/firstBillValue"]');
    }

    get verifyBillPeriodAs3Months() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/billedPeriod"]');
    }

    get verify3MonthsPlanBtn() {
        return $(`//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="PAY INR 399.00 FOR 3-MONTH'S PLAN"]`);
    }

    get verify12MonthsPlanBtn() {
        return $(`//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="PAY INR 699.00 FOR ANNUAL PLAN"]`);
    }

    get verifyPayLaterBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="PAY LATER"]');
    }

    get verifySubscribePopupTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textTitle"]');
    }

    get verifyCancelBtmInSubscribePopup() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnKO"]');
    }

    get verifySubscribeBtnPopup() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    async validateListScreenWithBillAndPeriodFor3MonthsPlan() {
        await (await this.verifyTitleOfPlanListScreen).verifyElementIsDisplayedTrue("Activate LionsGatePlay");
        await (await this.select3MonthsPlan).verifyElementIsDisplayedTrue("3 Months");
        await (await this.verify3Months).findElementAndVerifyText("3 Months");
        await (await this.verifyAmount399).findElementAndVerifyText("INR 399.00");
        await (await this.verifyDueTodayTitle).findElementAndVerifyText("DUE TODAY");
        await (await this.verifyBillValueAs399).findElementAndVerifyText("INR 399.00");
        await (await this.verifyBillPeriodAs3Months).findElementAndVerifyText("Billed every 3 months");
        await (await this.verify3MonthsPlanBtn).findElementAndVerifyText("PAY INR 399.00 FOR 3-MONTH'S PLAN");
        await (await this.verifyPayLaterBtn).verifyElementIsDisplayedTrue("Pay Later");
    }

    async validateListScreenWithBillAndPeriodFor12MonthsPlan() {
        await (await this.select6MonthsPlan).verifyElementIsDisplayedTrue("12 Months");
        await (await this.select6MonthsPlan).combinedClick("12 Months");
        await (await this.verify12Months).findElementAndVerifyText("12 Months");
        await (await this.verifyAmount699).findElementAndVerifyText("INR 699.00");
        await (await this.verifyDueTodayTitle).findElementAndVerifyText("DUE TODAY");
        await (await this.verifyBillValueAs399).findElementAndVerifyText("INR 699.00");
        await (await this.verifyBillPeriodAs3Months).findElementAndVerifyText("Billed annually");
        await (await this.verify12MonthsPlanBtn).findElementAndVerifyText("PAY INR 699.00 FOR ANNUAL PLAN");
        await (await this.verifyPayLaterBtn).verifyElementIsDisplayedTrue("Pay Later");
    }

    async validatePayLaterBtn() {
        await (await this.verifyPayLaterBtn).verifyElementIsDisplayedTrue("Pay Later");
        await (await this.verifyPayLaterBtn).combinedClick("Pay Later");
    }

    async validateSubscribePopup() {
        await (await this.verifySubscribePopupTitle).verifyElementIsDisplayedTrue("Subscribe Popup");
        await (await this.verifyCancelBtmInSubscribePopup).verifyElementIsDisplayedTrue("Cancel");
        await (await this.verifySubscribeBtnPopup).verifyElementIsDisplayedTrue("Subscribe");
        await (await this.verifyCancelBtmInSubscribePopup).combinedClick("Cancel")
        await browser.pause(2000);
    }

}

export default new SubscriptionsPage();
