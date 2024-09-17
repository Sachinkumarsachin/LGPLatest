
class WebOnboardingpage {
  navbarItemsInMainPage(text: string) {
    return $(`//ul[@class='main-menu ']/child::li/a[@title='${text}']`);
  }

  get contentDetails() {
    return $$(`//ul[@class='detail-data']/li`);
  }

  // get contentHeaders() {
  //   return $(`//h2[@data-carousel-title='Popular On Lionsgate Play']`);
  // }

  get contentHeaders() {
    return $(`(//h2[@class='Heading--carousel'])[2]`);
  }

  // contentRailHeaders(index: number) {
  //   return $(
  //     `(//h2[@data-carousel-title='Popular On Lionsgate Play']/following-sibling::div[@class='carousel carousel-list']//div[@class='owl-item active'])[${index}]`
  //   );
  // }

  contentRailHeaders(index: number) {
    return $(
      `(//h2[@class='Heading--carousel']/following-sibling::div[@class='carousel carousel-list'])[2]//div[@class='owl-item active'][${index}]`
    );
  }

  get playButtonInContentRail() {
    return $(`//div[@id='buttonsdefault']/button[@id='moreinfo_watch']`);
  }

  get playButtonInContentbanner() {
    return $(
      `//div[@class='detail-image']/button[@id='watch_now']/*[name()='svg' and @class='icon']`
    );
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

  get timerInPayerVideo() {
    return $(`//div[@class='bitdash-time']/span`);
  }

  get centerSpaceInPlayer() {
    return $(`//div[@class='bitdash-buf-area-w-center']`);
  }

  // Log in , Sign up
  loginAndSignUpButtons(loginType: string) {
    return $(`//ul[@class='Controls']/li/a[text()='${loginType}']`);
  }

  get scrollProgressBarButton() {
    return $(
      `//div[@class='bitdash-prog-bar-buf' and @style='width: 42.8755%; display: block;']`
    );
  }

  get seekbar() {
    return $(`//div[contains(@class,'prog-btn')]`);
  }

  get controlsInHomePageCourouselBanner() {
    return $(
      `//div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item']//descendant::button[@id='watch_now']/span[text()='Play']`
    );
  }

  get Courouselbanner() {
    return $(
      `//div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item']/a/img`
    );
  }

  get courouselBannerWithCenter() {
    return $(
      // `.owl-item.active.center>div`
      `//div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item active']/a/img | //div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item']/a/img`
    );
  }

  get Courouselbannername() {
    return $(
      `//div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item']/a`
    );
  }

  get CourouselbannerText() {
    //   return $(`
    // //  div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item active'] | //div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item']`);
    // }
    return $(`.owl-item.active.center>div
  `);
  }

  get courouselBannerNameInCenter() {
    return $(
      `//div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item active']/a`
    );
  }

  courouselBannerTitles() {
    return $$(`//div[@class='owl-item active center']/child::div`);
  }

  get backButtonInPlayerScreen() {
    return $(`//button[@class='player-back']`);
  }

  get noThanksPopupBeforeLogin() {
    return $(
      `//div[@class='wzrk-button-container']/child::button[text()='No thanks']`
    );
  }

  get searchText() {
    return $(`//div[contains(text(),'Search')]`);
  }

  get crossButtonForSearchBar() {
    return $(`//*[name()='svg' and @class='icon search-close']`);
  }

  get prevButtonInCouroselBanner() {
    return $(`//div[@id='car-hero']//a[@role='button' and @data-slide='prev']`);
  }

  get NextButtonInCouroselBanner() {
    return $(`//div[@id='car-hero']//a[@role='button' and @data-slide='next']`);
  }

  get searchBar() {
    return $(`//input[@id='input-search']`);
  }

  get ErrorMessage() {
    return $(`//div[@class='Searchpage-result']/child::strong`);
  }

  get ErrorMessage2() {
    return $(`//div[@class='Searchpage-result']`);
  }

  get exploreRelatesTitlesText() {
    return $(
      `//section[@id='autocomplete']/child::header/span[text()='Explore titles related to:']`
    );
  }

  get relatedTitlesAndGenres() {
    return $$(
      `//section[@id='autocomplete']/child::article[@class='Results-item language-flag']/a/h2`
    );
  }

  get continueButtonInCreateYourAccountPage() {
    return $(`//div[@class='sc-bxivhb iwNLp']`);
  }

  get createAccountTextUnderSignUpPage() {
    return $(`//h1[text()='Create your account']`);
  }

  //sign Up page Text Fields
  get signupEmailTextField() {
    return $(
      `//div[@class='Styled__FormFieldStyled-sc-1qcenpw-0 blvopD']/child::input[@id='username']`
    );
  }

  get signupPasswordTextField() {
    return $(
      `//div[@class='Styled__FormFieldStyled-sc-1qcenpw-0 blvopD']/child::input[@id='password']`
    );
  }

  get chooseYouAccountPaymentPageTitle() {
    return $(`//h1[text()='Choose a payment method to activate your account']`);
  }

  get congratulationsTextForVoucherCode() {
    return $(`//h1[text()='Congratulations!']`);
  }

  //UPI ,Credit Cards/Debit Cards, Voucher
  paymentOptions(paymentType: string) {
    return $(
      `//li[@class='sc-likbZx bfVbow']//div[@class='sc-ePZHVD fmXGPp']/child::p[text()='${paymentType}']`
    );
  }

  get payLaterOption() {
    return $(`//div[@class='sc-fgfRvd cKHjc']/child::span[text()='Pay later']`);
  }

  get exploreContentOption() {
    return $(
      `//div[@class='sc-fgfRvd cKHjc']/child::p[text()='Explore content?']`
    );
  }

  get subscribeToLionsGateOption() {
    return $(
      `(//article//p[normalize-space(text()='Subscribe to LIONSGATEPLAY')])[1]`
    );
  }

  get susbcribeTag() {
    return $(
      `(//article//p[normalize-space(text()='Do you want to subscribe to LIONSGATEPLAY before linking to your TV?')])[2]`
    );
  }

  get subscribeNowOption() {
    return $(
      `(//div[@class='sc-fYxtnH kVeRcJ']/child::button/span[normalize-space(text()='Subscribe Now')])[1]`
    );
  }
  get subscribeLaterOption() {
    return $(
      `(//div[@class='sc-fYxtnH kVeRcJ']/child::button/span[normalize-space(text()='Subscribe Later')])[2]`
    );
  }

  get playButtonInDetailScreen() {
    return $(
      `//div[@class='detail-image']/child::button[@class='detail-play']/*[name()='svg']`
    );
  }

  get signUpOptionInPlayerDetailScreen() {
    return $(`//div[@class='modal-footer']/child::a[text()='SIGN UP']`);
  }

  get loginOptionInPlayerDetailScreen() {
    return $(`//div[@class='modal-footer']/child::a[text()='LOG IN']`);
  }

  get episodeInContentUnderShowsTab() {
    return $(`(//div[@class='Chapter-image-container'])[1]`)
    // return $(`(//*[name()='svg' and @class='icon Chapter-play'])[1]`);
  }
  // 3 Months, 12 Months
  subscriptionMonthsText(periodOfMonths: string) {
    return $(
      `//span[@class='sc-hcmgZB gshsqN']/child::p[text()='${periodOfMonths}']`
    );
  }

  get chooseYourPlanTextUnderCreditcardPaymentPage() {
    return $(`//h1[text()='Choose your plan and enter your payment details']`);
  }

  subscriptionAmountCurrencyType(index: number) {
    return $(
      `(//span[@class='sc-hcmgZB gshsqN']/child::p/child::strong[text()='INR'])[${index}]`
    );
  }

  subscriptionAmount(amount: string) {
    return $(
      `//span[@class='sc-hcmgZB gshsqN']/child::p/child::strong[text()='${amount}']`
    );
  }

  get upiLogoInUPIPaymentPage() {
    return $(
      `//div[@class='sc-dVhcbM eWipqt']/child::figure/child::img[@alt='UPI logo']`
    );
  }

  get enterMobileNumberTextInUPIPaymentPage() {
    return $(`//h1[text()='Enter mobile number to select a payment plan']`);
  }

  get voucherLogo() {
    return $(
      `//div[@class='sc-dVhcbM eWipqt']/child::figure/child::img[@alt='STARZPLAY voucher']`
    );
  }

  get reedemvoucherText() {
    return $(`//h1[text()='Redeem your voucher']`);
  }

  get pleaseVoucherCodeForSubscriptionText() {
    return $(
      `//p[text()='Please enter your voucher code to start your subscription']`
    );
  }

  get voucherCodeInputTextField() {
    return $(
      `//div[@class='Styled__FormFieldStyled-sc-1qcenpw-0 blvopD']/child::input[@id='voucherNumber']`
    );
  }

  get placeholderOfVoucherCodeInputField() {
    return $(
      `//div[@class='Styled__FormFieldStyled-sc-1qcenpw-0 blvopD']/child::input[@placeholder='MXXXXXXXXXXXXXXXX']`
    );
  }

  get voucherCodeTextInInputField() {
    return $(`//label[text()='Voucher code']`);
  }

  get continueButtonInVoucherCodePage() {
    return $(`//span[text()='Continue']`);
  }

  get thankYouVoucherLogoUnderVoucherPage() {
    return $(
      `//div[@class='sc-gkFcWv zYIgw']/child::img[@data-test-id='thankyouVoucher-logo']`
    );
  }

  get voucherActivatedMessageText() {
    return $(
      `//p[text()='Your lionsgate subscription has been successfully activated']`
    );
  }

  get youCanEnjoyUnlimitedVouchedCodeText() {
    return $(
      `//p[text()='You can now enjoy unlimited streaming of your favourite content.']`
    );
  }

  get towardsVoucherCodeText() {
    return $(
      `//p[text()='Towards the end of your subscription we’ll send you a reminder email in case you wish to renew.']`
    );
  }

  get startWatchingText() {
    return $(`//span[text()='Start Watching!']`);
  }

  get startWatchingButton() {
    return $(`//button[@aria-label='Start Watching!']`);
  }

  get manageSubscriptionsUnderSettingsPage() {
    return $(
      `//div[@class='Settings-title' and text()='Manage Subscriptions']`
    );
  }

  get yourCurrentPaymentMethodUnderManageSubscriptionText() {
    return $(
      `//div[@class='settings-payment-selected' and contains(text(),'Your current payment method:')]`
    );
  }

  get imageofLionGatePlayVoucherLogoForPaymentMethod() {
    return $(
      `//span[@class='settings-payment-logo']/child::img[@id='voucherLogo']`
    );
  }

  get settingsButtonWithTooltip() {
    return $(
      `//ul[@class='Controls']/child::li[@id='avatarMenu']/child::a[@id='settingsUser']`
    );
  }

  get settingsOptionUnderTooltip() {
    return $(
      `//ul[@class='Controls']/child::li[@id='avatarMenu']/child::ul[@id='dropDownUser']/child::li[@class='DropdownUser-item']/child::a[@id='dropSettings']`
    );
  }

  get myListOptionUnderSettingsTooltip() {
    return $(
      `//ul[@class='Controls']/child::li[@id='avatarMenu']/child::ul[@id='dropDownUser']/child::li[@class='DropdownUser-item']/child::a[@id='watchSettings']`
    );
  }

  get activateTVOptionUnderSettingsTooltip() {
    return $(
      `//ul[@class='Controls']/child::li[@id='avatarMenu']/child::ul[@id='dropDownUser']/child::li[@class='DropdownUser-item']/child::a[@id='linkTV']`
    );
  }

  get logoutOptionUnderSettingsTooltip() {
    return $(
      `//ul[@class='Controls']/child::li[@id='avatarMenu']/child::ul[@id='dropDownUser']/child::li[@class='DropdownUser-item']/child::a[@id='logoutSettings']`
    );
  }

  //UPI ,Credit Cards/Debit Cards, Voucher
  paymentOptionsForReactivateAccount(paymentType: string) {
    return $(`//p[text()='${paymentType}']`);
  }

  get payLaterOptionForReactivateAccount() {
    return $(`//span[text()='Pay later']`);
  }

  get exploreContentOptionForReactivateAccount() {
    return $(`//p[text()='Explore content?']`);
  }

  get chooseYouReactivateAccountTextForExpiredUser() {
    return $(
      `//h1[text()='Choose a payment method to reactivate your account']`
    );
  }

  get addPaymentDetailsForReactiveAccountUnderManageSubscriptions() {
    return $(`//a[@id='changePayment']`);
  }

  get inactiveAccountTextForExpireduser() {
    return $(
      `//div[@class='active-state' and contains(text(),'Your LIONSGATEPLAY subscription is currently')]`
    );
  }

  get reactiveLiongatesPlayOptionForExiperUser() {
    return $(
      `//div[@class='modal-footer']/child::a[text()='REACTIVATE LIONSGATEPLAY']`
    );
  }

  get deactivatedSubscriptionTextInContentDetailScreen() {
    return $(
      `//div[@class='modal-body']/child::p[text()='You cannot watch this content as your subscription is currently deactivated.']`
    );
  }

  get reactivateYourSubscriptionText() {
    return $(
      `//div[@class='modal-body']/child::p/child::a[text()='reactivate your subscription']`
    );
  }

  get settingOptions() {
    return $$(`//ul[@id='dropDownUser']/child::li/a`);
  }

  get contentNameAndImageUnderContentDetailPage() {
    return $(`//div[@class='detail-image']/child::img`);
  }

  get contentDetailTitleText() {
    return $(
      `//header[@class='detail-header']/child::h1[@class='detail-title']`
    );
  }

  get contentDetailDescriptionText() {
    return $(`//header[@class='detail-header']/child::p[@class='detail-text']`);
  }

  get myListcontents() {
    return $$(
      `.Watchlist-itemgroup .Watchlist-photo>a:nth-child(1)`
      // `//div[@class='Watchlist-itemgroup']//child::div[@class='Watchlist-title']/child::a`
    );
  }
  moviName(index: number) {
    return $(
      `(//div[@id="wishList_container"]//div[@class="Watchlist-photo language-flag "])[${index}]//a[1]`
    );
  }

  get myListButtonInCourouselBanner() {
    return $(
      `//div[@class='owl-item active center']/child::div[@class='carousel-item js-carousel-item active']//div[@class='hover-buttons']/button[3]`
    );
  }

  get trashIconInMyListPage() {
    return $(`//a[@class='trash js-watchlist-trash']`);
  }

  get myListAddedContents() {
    return $(
      `(//div[@class='Watchlist-photo language-flag ']/child::a/img)[1]`
    );
  }

  get myListPageheader() {
    return $(`//h1[@class='Heading Heading--module Heading--separator']`);
  }

  get myListLibraryImage() {
    return $(`//*[name()='svg' and @class='icon icon-mylibrary']`);
  }

  get noContentMessageInMyListPage() {
    return $(
      `//div[@class='noContent']/child::h2[text()='Use the “Add to List” feature to save titles to watch later and easily find them here.']`
    );
  }

  get checkOutLatestText() {
    return $(`//div[@class='noContent']/child::h3`);
  }

  get checkOutLatestForMoviesOptionLinkText() {
    return $(`//div[@class='noContent']/child::h3/child::a[text()='MOVIES']`);
  }

  get checkOutLatestForTVShowsOptionLinkText() {
    return $(`//div[@class='noContent']/child::h3/child::a[text()='TV Shows']`);
  }

  seasonEpisodeList(episodeNumber: Number) {
    return $(
      `//li[@data-id='${episodeNumber}']/parent::div/parent::div/parent::div/parent::div/parent::div/following-sibling::div/child::div/article[@data-episode-number='1']`
    );
  }

  get contentDetailsList() {
    return $$(`//dl[@class='detail-list']/child::dt`);
  }

  get contentDetailsListData() {
    return $$(`//dl[@class='detail-list']/child::dt/following-sibling::dd`);
  }

  contentDetailsCastText(index: number) {
    return $(`(//dl[@class='detail-list is-noWrap']/child::dt)[${index}]`);
  }

  contentDetailsCastList(index: number) {
    return $(
      `(//dl[@class='detail-list is-noWrap']/child::dt/following-sibling::dd)[${index}]`
    );
  }

  trailerAndShareImageOptionUnderContentDetailsInContentPage(index: number) {
    return $(
      `(//div[@class='detail-buttons']/button[@class='Btn--detail'])[${index}]`
    );
  }

  get trailerTextUnderContentDetailsPage() {
    return $(
      `//div[@class='detail-buttons']/button[@class='Btn--detail']/child::span[text()='Trailer']`
    );
  }

  get myListOptionUnderContentDetailsInContentPage() {
    return $(
      `//div[@class='detail-buttons']/child::button[@class='Btn--detail btn-wish-list watchlist_add']/child::span[text()='My List']`
    );
  }

  get myListImageOptionUnderContentDetailsPage() {
    return $(
      `//div[@class='detail-buttons']/child::button[@class='Btn--detail btn-wish-list watchlist_add']`
    );
  }

  get myListImageTickImageUnderContentDetailsPage() {
    return $(
      `//div[@class='detail-buttons']/child::button[@class='Btn--detail btn-wish-list watchlist_remove']`
    );
  }

  get seasonSelectorListUnderShowsContentDetailsScreen() {
    return $$(
      `//div[@id='season-selector']//div[@class='owl-stage']/child::div/child::li`
    );
  }

  get episodeTitlesUnderContentDetailsPage() {
    return $$(
      `//div[@class='Chapter-content']/child::h4[@class='Chapter-title js-title']`
      // `//div[@class='Chapter-content']/child::h4`
    );
  }

  get activeSeasonAndNaviagationToAnySeason() {
    // return $(`//li[@data-id='${index}']`);
    return $(`(//li[@class='js-season-item'])[1]`)
  }

  //Player page Element Locators
  get contentTitleInPlayerPage() {
    return $(`//div[@class='player-title']`);
  }

  get centerOfPLayerScreen() {
    return $(`//div[@class='bitdash-buf-area-w-center']`);
  }

  get timerofTheContent() {
    return $(`//span[@class='bitdash-time-val']`);
  }

  get errorOccuredInPlayerScreen() {
    return $(
      `//div[@class='player-error']/child::h4[text()='An error occurred']`
    );
  }

  get progressPlaybar() {
    return $(`//div[@class='bitdash-prog-bar-play']`);
  }
  //width: 2.85439%;
  playbarPush(lengthOfMovie: string) {
    return $(
      `//div[@class='bitdash-prog-bar-play' and @style='${lengthOfMovie}']`
    );
  }

   progressButton(lengthOfMovie: string){
return $(`//div[@class='bitdash-prog-btn']/parent::div[@class='bitdash-prog-bar-play' and @style='${lengthOfMovie}']`)
  }

  get resumebuttonInPlayerScreen() {
    return $(`//span[@class='icon icon-play icon-resume']`);
  }

  //  Error Text: There is a problem with your internet connection. Please restart your router and try again. If the issue persists, please contact your internet service provider.
  get errorOccuredTextInPlayerScreen() {
    return $(`//p[@class='player-error-text']`);
  }

  get audioAndSubtitilesButton(){
    return $(`//button[@class='settings-custom']`);
  }

  get videoQualityButton(){
    return $(`//button[@class='video-quality-custom']`);
  }

  get playAndPauseButtonInPlayerScreen(){
    return $(`//button[@class='bitdash-playpause bitdash-l']`);
  }

  get playButtonInPlayerScreen(){
    return $(`//button[@class='bitdash-playpause bitdash-l' and @data-state='play']`);
  }

get allcourouselsNames(){
    return $$(`.owl-carousel.owl-theme.owl-center .owl-stage .owl-item .carousel-item`)
  }

  get rateThisMovieText(){
    return $(`//p[text()='Rate this movie/episode']`);
  }

  get audioOptionInPlayerScreen(){
    return $(`(//div[@class='bitdash-settings-i']/child::h3[@class='bitdash-settings-title bitdash-settings-title--audiotrack'])[1]`);
  }

  get audioLanguagesList(){
    return $$(`//div[@class='bitdash-settings--custom bitdash-settings-pane bitdash-settings--subaudio is-shown']/child::div[@data-audiotrack='true']/child::div/label`);
  }

  get subtitlesList(){
    return $$(`//div[@class='bitdash-settings--custom bitdash-settings-pane bitdash-settings--subaudio is-shown']/child::div[@data-subtitles='true']/child::div/label`)
  }

  get qualityOptionHeader(){
    return $(`(//div[@class='bitdash-settings--videoquality bitdash-settings-pane']/child::div[@class='bitdash-settings-i']/child::label[text()='Quality'])[1]`)
  }

  get fullScreenOption(){
    return $(`//button[@data-state='go-fs']`);
  }

  get exitFullScreenOption(){
    return $(`//button[@data-state='cancel-fs']`);
  }

  get fullScreenAndExitFullScreenText(){
    return $(`//div[@class='bitdash-btns bitdash-btns-defaults bitdash-btns-go_fs']/child::button[@data-state='go-fs']`);
  }

  get playAndPauseButton(){
    return $(`//button[@class='bitdash-playpause bitdash-l' and text()='Play/Pause']`);
  }

  get muteAndUnmuteButton(){
    return $(`//button[@class='bitdash-mute' and text()='Mute/Unmute']`);
  }

  get muteAndUnmuteText(){
    return $(`//button[@class='bitdash-mute']`);
  }

  get voulmeChangeButton(){
    return $(`//div[@class='bitdash-vol-btn']`);
  }

  get backArrowImage(){
    return $(`//span[@class='icon icon-arrow-back']`);
  }

  get playButtonTextInPlayerScreen(){
    return $(`//div[@class='bitdash-btns bitdash-btns-defaults bitdash-btns-play']`);
  }

  get pauseButtonInPlayerScreen(){
    return $(`//button[@class='bitdash-playpause bitdash-l' and @data-state='pause']`);
  }

  get toWatchThisContentTextInSubscriptionPopup(){
    return $(`(//div[@class='modal-content']/div[@class='modal-body']/child::p)[1]`);
  }

  get crossXButtonInSignUPORLoginpopup(){
    return $(`//span[@class='icon icon-close']`);
  }

  // Here to pass as parameters as "Subtitles: ", "Languages: ","Country of origin: ","Director: "
 langauagesAndSubtitlesListInContentDetailScreen(options:string){
    return $(`(//dl[@class='detail-list']/descendant::dt[text()='${options}']/following-sibling::dd)[1]`)
  }

  get languageSelectedWithTickMark(){
    return $(`(//label[@class='audiotrack-select is-selected'])[1]`);
  }

   nonSelectedLangauagesInAudio(language:string){
    return $(`//div[@data-is-visible='1']/div[@class='bitdash-settings-i' and @data-audiotrack='true']//div/label[text()='${language}']`)
  }

  get videoQualityOptionText(){
    return $(`(//div[@class='bitdash-settings--videoquality bitdash-settings-pane'])[1]//label[text()='Quality']`);
  }

  get videoQualityOptions(){
    return $$(`(//div[@class='bitdash-settings--videoquality bitdash-settings-pane'])[1]//div[@class='bitdash-settings-radio']/label`)
  }

  get subtitlesTextInPlayerScreen(){
    return $(`//div[@class='bitdash-subs']//ul/li/div/p`);
  }

  get subtitlesEnglishOption(){
    return $(`//label[text()='English [CC]']`);
  }

  get homepagehiglightbar(){
    return $(`.is-active .Navbar-item-link`)
  }


  async checkInternetConnectionIsEnabled() {
    const onlineStatus = await browser.execute(() => navigator.onLine);
    driver.logUtil("Pass", `"Online status:", ${onlineStatus}`);
  }

  async loginToApplication() {
    await browser.deleteAllCookies();
    await browser.url("/");
    await browser.maximizeWindow();
  }

  async generateRandomString(length: number) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  }
}

export default new WebOnboardingpage();
