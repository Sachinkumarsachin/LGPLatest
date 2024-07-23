import { ChainablePromiseElement } from "webdriverio";

declare global {
  namespace WebdriverIO {
    interface Browser {
      mobileScroll: (xStart, yStart, xEnd, yEnd) => Promise<void>;
      findByTextContains: (partialText) => Promise<string>;
      mobileScrollDirectionWise: (direction: string) => Promise<void>;
      logUtil: (status: string, message: any) => Promise<void>;
      // cdp(
      //   domain: string,
      //   command: string,
      //   params?: Record<string, any>
      // ): Promise<any>;
      //verifyElementPresentThenClick: (elem :ChainablePromiseElement<Promise<WebdriverIO.Element>>, validationText) => Promise<void>;
    }
    interface Element {
      // isDisplayedGeneric: (nameOfTheElement) => Promise<string>;
      // genericClick: (validationText) => Promise<void>;
      // verifyElementPresentThenClick: (validationText) => Promise<void>;
      // genericSetvalue: (inputString, fieldName) => Promise<void>;
      // logUtil: (status: string, message: string) => Promise<void>;
      swipeUntilElemetDisplayed: (direction: string) => Promise<void>;
      // severityOfTC: (severityLevel: string) => Promise<void>;
      combinedClick: (value: string) => Promise<void>;
      findElementAndVerifyText: (
        value: string | number,
        removeSpace?: boolean
      ) => Promise<void>;
      setValue: (value: string, valueText: string) => Promise<void>;
      clearAndSetValue: (text: string, textValue: string) => Promise<void>;
      verifyElementIsDisplayedTrue: (value: string) => Promise<void>;
      verifyElementIsDisplayedFalse: (value: string) => Promise<void>;
      verifyElementIsEnabledTrue: (value: string) => Promise<void>;
      findElementAndVerifyTextContains: (
        value: string | number
      ) => Promise<void>;
    }
  }
}

export { };
