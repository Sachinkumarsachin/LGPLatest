class Termsnconditions{

    get NoThanksonPopup()    //No thanks popup post navigating 
    {
        return $("//button[@id='wzrk-cancel']");
    }
    get SignUpInHomepage() // Login button on Homepage
    {
        return $("//*[@id='signup-button']");
    }
    get CreateYourAccountTitle() {   // Create yout Account page title
        return $("//*[@class='Styled__HeadingStyled-sc-17zbryf-0-h1 kGyqlM sc-eqIVtm hHvFuq' and @aria-level='1']");
    }
    get emailAddressorMobilenumberTextBox() { //Email / number textbox in signup page
        return $("//*[@id='username']");
    }
    get passwordTextBox() { //Email / number textbox in signup page
        return $("//*[@id='password']");
    }
    get ContinueButtononSignup(){
        return $("//button[@class='Styled__ButtonStyled-sc-15zk5n4-0 kzHFcw']");
    }
    get tncButtonSignUppage(){    //Tnc button on signuppage
        return $("//a[text()='T&Cs']");
    }
    get TermsofusePageTitle() {
        // return $("//*[@class='Styled__HeadingStyled-sc-17zbryf-0-h1 kGyqlM sc-bXGyLb laFvZg']");
        return $("//*[@aria-level='1']");
    }

}export default new Termsnconditions();