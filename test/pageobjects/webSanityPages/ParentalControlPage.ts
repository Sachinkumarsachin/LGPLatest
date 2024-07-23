
class WebParentalControlPage {

  get allCorouselHeadersInHomePage() {
    return $$(`//div[@class='media-list']/child::h2[@class='Heading--carousel']`);
  }

  get parentalControlOptionUnderSettingsPage() {
    return $(`//div[@class='Settings-title' and text()='Parental control']`);
  }

  get selectParentalControlText() {
    return $(`//div[text()=' Select Parental Control from below:']`);
  }

  get parentalControlOptions() {
    return $$(`//div[@class='parental parentalControl']/child::a/child::div`);
  }

  get parentalControlChangePasswordField() {
    return $(`//input[@id='passwordParental']`);
  }

  get parentControlOptionInPasswordPopup() {
    return $(`//h4[text()='Parental Control']`);
  }

  get parentalCloseButtonInPopup() {
    return $(`//button[@id='parental_close']`);
  }

  get submitButtonInParentPasswordPopupPage() {
    return $(`//button[@id='parental_submit']`);
  }

  //To access the full settings, please ensure your Parental Control is set to 'A'
  get parentalSettingsCanChangeAratingText() {
    return $(`//p[@class='parental-note parental-note--info']`);
  }

  get parentalControlSeletedList() {
    return $$(`//div[@class='parental parentalControl']/child::a[@class='parental-block selected']`);
  }

  selectparentalOptionAccordingToAge(ageRating: number) {
    return $(`//div[@class='parental parentalControl']/child::a[@data-age='${ageRating}']`)
  }

  get contentHeadersAccordingToRatings() {
    return $(`//h2[@data-carousel-title='Top 10 In India']`);
  }

  contentRailHeadersForTopInIndia(index: number) {
    return $(
      `(//h2[@data-carousel-title='Top 10 In India']/following-sibling::div[@class='carousel carousel-list']//div[@class='owl-item active top-10-owl-div'])[${index}]`
    );
  }

  get AgeRatingFromContentDetailScreen() {
    return $(`//ul[@class='detail-data']/child::li[text()='UA-13']`);
  }

  contentRailHeaders(contentHeader: string, index: number) {
    return $(
      `(//h2[@data-carousel-title='${contentHeader}']/following-sibling::div[@class='carousel carousel-list']//div[@class='owl-item active'])[${index}]`
    );
  }

  contentHeadersList(selectedCourousel: string) {
    return $(`//h2[@data-carousel-title='${selectedCourousel}']`);
  }

  AgeRatingsFromContentDetailScreen(ageRating: string) {
    return $(`//ul[@class='detail-data']/child::li[text()='${ageRating}']`);
  }

  get continueWatchingRailContents() {
    return $$(`//h2[@class='Heading--carousel' and @data-carousel-title='Continue Watching']/following-sibling::div//a/img`)
  }

  get activateLionsgatePlayPopupForNonSubscribedUser() {
    return $(`(//div[@class='modal-content']/child::div[@class='modal-body']/child::p)[1]`);
  }

  get activateLionsGatePlayButtonInPopup() {
    return $(`//div[@class='modal-content']/child::div[@class='modal-footer']/child::a`);
  }


}
export default new WebParentalControlPage();