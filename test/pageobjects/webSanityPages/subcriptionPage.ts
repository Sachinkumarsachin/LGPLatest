class SubCriptionPage {

    get noThanksPopupBeforLogin() {
        return $(
            `//div[@class='wzrk-button-container']/child::button[text()='No thanks']`
        );
    }

    get loginButtons() {
        return $(`//a[@id="login-button"]`);
    }

    get signupButton() {
        return $('//a[@id="signup-button"]')
    }

    get usernameTextField() {
        return $(`//input[@id='username']`);
    }

    get passwordTextField() {
        return $(`//input[@id='password']`);
    }

    get loginWithPasswordButton() {
        return $(`//button[@aria-label='Login with Password']`);
    }

    get loginButton() {
        return $(`//button[@aria-label='Log in']`);
    }

    get continueBtn() {
        return $('//button[@aria-label="Continue"]//span');
    }

    get paymentPageTitle() {
        return $('//div[@class="sc-gtfDJT hBLCqE"]//h1');
    }

    get selectCreditOrDebitCards() {
        return $('(//div[@class="sc-eKZiaR iFZYyX"])[1]');
    }

    get selectUPI() {
        return $('(//div[@class="sc-eKZiaR iFZYyX"])[2]')
    }

    get verigyPaymentDetailsPageTitle() {
        return $('//div[@class="sc-dVhcbM eWipqt"]//h1');
    }

    get fetchMonthWithPrice() {
        return $$('//span[@class="sc-hcmgZB gshsqN"]//p')
    }

    get selectMonthAndPrice() {
        return $('//label[@class="sc-kcbnda kGMVkP"]')
    }

    get verifyDueToDayTitle() {
        return $('//dl[@class="sc-cqpYsc euLZhy"]//dt');
    }

    get verifyPriceTitle() {
        return $('//dl[@class="sc-cqpYsc euLZhy"]//p[1]');
    }

    get verifyBillQutTitle() {
        return $('//dl[@class="sc-cqpYsc euLZhy"]//p[2]');
    }

    get verifyQuaterlyPlanBtn() {
        return $('//div[@class="sc-bxivhb iwNLp"]//button');
    }

    get verifyAnotherPaymentMathodBtn() {
        return $('//button[@class="Styled__ButtonStyled-sc-15zk5n4-0 kzHFcw sc-jUpvKA brlPvV"]');
    }

    get enterCardName() {
        return $('//input[@id="cardName"]');
    }

    get enterCreditCardNumber() {
        return $('//input[@id="cardNumber"]');
    }

    get enterExpirationDate() {
        return $('//input[@id="expirationDate"]');
    }

    get enterCVVNumber() {
        return $('//input[@id="cardCvv"]');
    }

    get clickOnChooseAnotherPaymentMethod() {
        return $('//span[text()="Choose another Payment Method"]');
    }

    get txtMobileNumber() {
        return $('//input[@id="operatorMobileNumber"]');
    }

    get upiPayContinueBtn() {
        return $('//button[@class="Styled__ButtonStyled-sc-15zk5n4-0 kzHFcw"]');
    }

    /**
     * Navigate to login URL 
     */
    async navigateToApplication() {
        await browser.deleteAllCookies();
        await browser.url("/");
        await browser.maximizeWindow();
    }

    /**
     * Navigate to Login Application
     * @param username 
     * @param password 
     */
    async enterLoginCredential(username: string, password: string) {
        (await this.noThanksPopupBeforLogin).combinedClick("No Thanks Button");
        await browser.pause(3000);
        (await this.signupButton).combinedClick("SignUp link");
        await (await this.usernameTextField).setValue(username, "Username Field");
        (await this.loginWithPasswordButton).click();
        await (await this.passwordTextField).setValue(password, "Password Field");
        (await this.continueBtn).combinedClick("Continue Button");
        (await this.paymentPageTitle).verifyElementIsDisplayedTrue("Verified Payment Page Title");

    }

    /**
    * Navigate to Login Application
    * @param username 
    * @param password 
    */
    async entersubLoginCredential(username: string, password: string) {
        (await this.noThanksPopupBeforLogin).combinedClick("No Thanks Button");
        await browser.pause(3000);
        (await this.loginButtons).combinedClick("Login link");
        await (await this.usernameTextField).setValue(username, "Username Field");
        (await this.loginWithPasswordButton).combinedClick("Login with Password");
        await (await this.passwordTextField).setValue(password, "Password Field");
        (await this.loginButton).combinedClick("Login Button");

    }

    /**
     * Method to verify Payment details
     * @param dueDayTitle 
     * @param quatermonth 
     * @param quaterAnnually 
     */
    async verifyCreditOrDebitCard(dueDayTitle: string, quatermonth: string, quaterAnnually: string) {
        (await this.selectCreditOrDebitCards).combinedClick("Select Credit Card");
        (await this.verigyPaymentDetailsPageTitle).verifyElementIsDisplayedTrue("Payment Details Page Title");
        let MonthWithPrice = (await this.fetchMonthWithPrice);
        for (let i = 0; i <= MonthWithPrice.length - 1; i++) {
            console.log(await MonthWithPrice[i].getText());
        }
        await expect(await this.verifyDueToDayTitle).toHaveText(dueDayTitle);
        await (await this.verifyPriceTitle).verifyElementIsDisplayedTrue("Price Title")
        await expect(await this.verifyBillQutTitle).toHaveText(quatermonth);
        await expect(await this.verifyQuaterlyPlanBtn).toBeDisabled();
        await (await this.verifyQuaterlyPlanBtn).findElementAndVerifyText("PAY INR 399 FOR QUARTERLY PLAN");
        await (await this.verifyAnotherPaymentMathodBtn).verifyElementIsDisplayedTrue("Another Payment Method Button");
        await (await this.enterCardName).setValue("trwtrtq", "Card Name");
        await (await this.enterCreditCardNumber).setValue("1222-2222-2222-2222", "Card Number");
        await (await this.enterExpirationDate).setValue("05/25", "Expiration Date");
        await (await this.enterCVVNumber).setValue("433", "CVV Number");
        await (await this.verifyQuaterlyPlanBtn).verifyElementIsEnabledTrue("Quaterly Plan Button");
        await (await this.enterCVVNumber).clearValue();


        (await this.selectMonthAndPrice).combinedClick("Select INR 699 Plan");
        await expect(await this.verifyDueToDayTitle).toHaveText(dueDayTitle);
        await (await this.verifyPriceTitle).verifyElementIsDisplayedTrue("Price Title")
        await expect(await this.verifyBillQutTitle).toHaveText(quaterAnnually);
        await expect(await this.verifyQuaterlyPlanBtn).toBeDisabled();
        await (await this.verifyQuaterlyPlanBtn).findElementAndVerifyText("PAY INR 699 FOR ANNUAL PLAN");
        await (await this.verifyAnotherPaymentMathodBtn).verifyElementIsDisplayedTrue("Another Payment Method Button");
        await (await this.enterCVVNumber).setValue("433", "CVV Number");
        await (await this.verifyQuaterlyPlanBtn).verifyElementIsEnabledTrue("Annual Plan Button");

    }

    /**
     * Method to verify payment method page by clicking on Choose Another Payment Method
     */
    async chooseAnotherPaymentMethod() {
        (await this.clickOnChooseAnotherPaymentMethod).combinedClick("Choose Another Payment Method");
        await browser.pause(3000);
        await (await this.paymentPageTitle).verifyElementIsDisplayedTrue("Payment Page Title");
    }

    /**
     * Method to validate Mobile number page to select a payment plan
     */
    async verifyUPIPayment() {
        (await this.selectUPI).combinedClick("Select UPI");
        (await this.verigyPaymentDetailsPageTitle).verifyElementIsDisplayedTrue("Payment Details Page Title");
        (await this.txtMobileNumber).verifyElementIsDisplayedTrue("Mobile Number Text Field");
    }

    /**
    * Method to validate Continue Button In Mobile number page
    */
    async verifyContinueBtn() {
        (await this.selectUPI).combinedClick("Select UPI");
        (await this.verigyPaymentDetailsPageTitle).verifyElementIsDisplayedTrue("Payment Details Page Title");
        (await this.txtMobileNumber).verifyElementIsDisplayedTrue("Mobile Number Text Field");
        await expect(this.upiPayContinueBtn).toBeDisabled();
        await (await this.txtMobileNumber).setValue("8877665544", "Mobile Number");
        await browser.pause(5000);
        (await this.upiPayContinueBtn).verifyElementIsEnabledTrue("Continue Button");

    }

}


export default new SubCriptionPage();
