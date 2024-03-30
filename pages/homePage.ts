import { Page, Locator } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";
import { URLConstants } from "../constants/urlConstants";

export class HomePage extends PlaywrightWrapper {

    static pageUrl = URLConstants.homeURL;
    constructor(page: Page) {
        super(page);
        this.init();
    }
    public async init() {
        await this.loadApp(HomePage.pageUrl);        
    }
    public async clickAppLancher(menuName: string) {
        await this.click(".slds-icon-waffle",menuName,"AppLauncher");
    }
}