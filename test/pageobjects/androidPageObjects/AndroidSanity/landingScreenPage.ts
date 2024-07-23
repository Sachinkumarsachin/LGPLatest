import OnBordingPage from "../../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import DetailScreenPage from "../..//../pageobjects/androidPageObjects/AndroidSanity/detailScreenPage";

class LandingScreenPage {
    get verifyCarousel() {
        return $('//androidx.viewpager.widget.ViewPager[@resource-id="com.lionsgateplay.videoapp:id/viewPager"]');
    }

    async validateCarousel() {
        await (await this.verifyCarousel).verifyElementIsDisplayedTrue("Carousel");
    }

    /**
     * Method to validate My List By clicking On Movie/Show As a Guest User
     */
    async validateMyListByClickOnMovieOrShowAsGuestUser() {

        await (await DetailScreenPage.verifyWatchListIcon).verifyElementIsDisplayedFalse("WatchList");
    }
    

}

export default new LandingScreenPage();
