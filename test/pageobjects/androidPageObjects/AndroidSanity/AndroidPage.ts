import { expect } from "chai";
import { exec } from "child_process";

export class AndroidSanityPage {
  get titleLogoInHomePage() {
    return $(
      `//android.widget.ImageView[@resource-id='com.lionsgateplay.videoapp:id/centerLogo']`
    );
  }
}

class AndroidSanityPages {
  //chrome
  get useWithoutAnAccountText() {
    return $(
      `//*[@class='android.widget.Button' and @resource-id='com.android.chrome:id/signin_fre_dismiss_button']`
    );
  }

  get gotItButtonInPrivacyPage() {
    return $(
      `//*[@class='android.widget.Button' and @resource-id='com.android.chrome:id/ack_button']`
    );
  }

  get googleSearchTextField() {
    return $(
      `//*[@class='android.widget.EditText' and @resource-id='com.android.chrome:id/search_box_text']`
    );
  }

  get firstSuggestionUnderSearchField() {
    return $(
      `(//*[@class='android.widget.TextView' and @resource-id='com.android.chrome:id/line_1'])[1]`
    );
  }

  get titleLogoInHomePage() {
    return $(
      `//android.widget.ImageView[@resource-id='com.lionsgateplay.videoapp:id/centerLogo']`
    );
  }

  get noThanksButtonInPopup() {
    return $(`//*[@class='android.widget.Button' and @text='No thanks']`);
  }

  get lionsgateplayTextInMainPage() {
    return $(
      `//*[@class='android.view.View' and @content-desc='LIONSGATEPLAY. Brilliant TV. Every time.']`
    );
  }

  // Contents : Shows , Home, Movies
  homePageViewConents(contents: string) {
    return $(`//android.widget.LinearLayout[@content-desc='${contents}']`);
  }

  get loginTextForGuestUser() {
    return $(
      `//*[@class='android.widget.Button' and @resource-id='com.lionsgateplay.videoapp:id/btnLogin']`
    );
  }

  get loginWithPasswordButton() {
    return $(
      `//*[@class='android.widget.FrameLayout' and @resource-id='com.lionsgateplay.videoapp:id/buttonLoginWithPassword']`
    );
  }

  get usernameInputTextField() {
    return $(
      `(//*[@class='android.widget.EditText' and @resource-id='com.lionsgateplay.videoapp:id/editText'])[1]`
    );
  }

  get passwordInputTextField() {
    return $(
      `(//*[@class='android.widget.EditText' and @resource-id='com.lionsgateplay.videoapp:id/editText'])[2]`
    );
  }

  get loginButton() {
    return $(
      `//*[@class='android.widget.FrameLayout' and @resource-id='com.lionsgateplay.videoapp:id/buttonLogin']`
    );
  }

  get homeTabText() {
    return $(`//*[@class='android.widget.TextView' and @text='Home']`);
  }

  get notificationPopup() {
    return $(
      `//*[@class='android.widget.Button' and  @resource-id='com.android.permissioncontroller:id/permission_allow_button']`
    );
  }

  async validateHomePageIsDisplayedOrNot() {
    await (
      await this.loginTextForGuestUser
    ).combinedClick("Login as Guest User");
    await (
      await this.loginWithPasswordButton
    ).combinedClick("Login with Passowrd Button");
    await (
      await this.usernameInputTextField
    ).setValue("upitest2@yopmail.com", "Username Text Field");
    await (
      await this.passwordInputTextField
    ).setValue("123456", "Password Text Field");
    await (await this.loginButton).combinedClick("Login button");
    await (await this.notificationPopup).waitForDisplayed();
    await (
      await this.notificationPopup
    ).combinedClick("Allow Button in Notification Pop-up");
    await (await this.homeTabText).waitForDisplayed();
    await (await this.homeTabText).verifyElementIsDisplayedTrue("Home Tab");
    await (await this.homeTabText).findElementAndVerifyText("Home");
    await (await this.titleLogoInHomePage).isDisplayed();
  }
}
export default new AndroidSanityPages();
