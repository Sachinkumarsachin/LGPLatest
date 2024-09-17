class viewAll{

    get NoThanksonPopup()    //No thanks popup post navigating 
    {
        return $("//button[@id='wzrk-cancel']");
    }
    get loginInHomepage() // Login button on Homepage
    {
        return $("//*[@class='Controls'] //*[@class='Controls-item Controls-item--login'] //*[@id='login-button']");
    }
    get loginwithpassword(){    //login with password button on login page
        return $("//*[@aria-label='Login with Password']");
    }
    get LoginpageTitle(){
        return $("//*[@class='Styled__HeadingStyled-sc-17zbryf-0-h1 kGyqlM sc-eqIVtm hHvFuq']");
    }
    get emailornumbertextbox(){     //email or number textbox in login page
        return $("//input[@id='username']");
    }
    get passwordtextfield(){  //password textfield in login page
        return $("//*[@id='password']");
    }
    get Loginbutton(){ // login button on login page
        return $("//*[@aria-label='Log in']");
    }
    get paylaterbutton(){   //pay layer button in plans page
        return $("//*[@class='sc-likbZx leQrfF']");
    }
    get homepagebuttondisplayedonhome(){   //home button highligted in home page
        return $("//*[@class='Navbar-item is-active'] //*[@title='Home']");
    }
    get vieAllAll(){  //all the view all in home page
        return $$("//*[@class='Heading-link see-all']");
        
    }
    get viewAllpageHeadings() {
        return $("//*[@class='Heading Heading--md Heading--separator']");
    }
    get titleinsideviewall()
    { return $("//*[@class='Heading Heading--md Heading--separator']");}

}export default new viewAll();