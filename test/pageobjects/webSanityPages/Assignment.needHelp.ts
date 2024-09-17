class needHelpPage
{
    //-----------------------------------------------------------------------//
    //-------------------------Xpaths -------------------------------------//
    //-----------------------------------------------------------------------//
    get NoThanksonPopup()    //No thanks popup post navigating 
    {
        return $("//button[@id='wzrk-cancel']");
    }
    get loginInHomepage() // Login button on Homepage
    {
        return $("//*[@class='Controls'] //*[@class='Controls-item Controls-item--login'] //*[@id='login-button']");
    }
    get loginwithOTP() //Title of Login with OTP page
    {
        return $("//*[@class='sc-iujRgT bGCRlk']//*[@class='sc-dVhcbM eWipqt']//*[@role='heading']");
    }
    get needHelpButton(){     //Need help Button on login with OTP page
        return $("//*[@class='sc-bXGyLb PepjD']/span");
    }
    // get needHelpPageTitle(){ // Need help page title
    //     return $("//*[@class='Styled__HeadingStyled-sc-17zbryf-0-h1 kGyqlM Styled__HeadingStyled-sc-149kbgp-2 hvgcDw']") or $("//*[@class='Styled__ModalContainerStyled-sc-149kbgp-1 caaoVo']//*[text()='Need Help?']");
    // }
    ///////////////////
    get needHelpPageTitle(){
        const link1 = $("//*[@class='Styled__HeadingStyled-sc-17zbryf-0-h1 kGyqlM Styled__HeadingStyled-sc-149kbgp-2 hvgcDw']");
        const link2 = $("//*[@class='Styled__ModalContainerStyled-sc-149kbgp-1 caaoVo']//*[text()='Need Help?']");
        if(link1.isExisting)
        {return link1}
        else{return link2}
    }

    ////////////////


    get EmailAddressorMobileNumber(){   //Textbox on needhelp page
         return $("//input[@id='user']");
        //return $("id='user'");
    }
    get SubmitMainCategoryDropdown(){  //Select main Category dropdown
        return $("//*[@data-test-id='help-category-combo']");
    }

    ///
    get SubmitMainCatDropdown() { // redone
        return $("//span[text()='Select main category']");
    }
    get Biling_Main(){
        return $("//*[@title='Billing']");
    }
    ///



    get selectSubCategory(){ //Select Subcategory dropdown
        return $("//*[@data-test-id='help-subcategory-combo']");
    }
    get commentsTextBox() {     //Comments textbox on need help page 
        return $("//*[@id='comments']");
    }
    get SubmitButton() { //submit button on need hepl page
        return $("//button[@class='Styled__ButtonStyled-sc-15zk5n4-0 kzHFcw help_button']");
    }  


    //-----------------------------------------------------------------------//
    //----------------Business Logic----------------------------------------//
    //-----------------------------------------------------------------------//


}
export default new needHelpPage();