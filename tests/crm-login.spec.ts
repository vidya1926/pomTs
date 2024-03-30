import test, { expect } from "@playwright/test";
import { loginFunctionality } from "../pages/loginpage";
import { HomePage } from "../pages/homePage";
import { LeadsPage } from "../pages/leadPage";

test.use({ storageState: "sf.json" })
test(`Create lead`, async ({ context, page }) => {
    
    const hp = new HomePage(page);
    await hp.clickAppLancher("AppLauncher");
    const ldPage = new LeadsPage(page);
    await ldPage.clickViewAll();
    await ldPage.searchLead("Leads");
    await ldPage.clickLeads();
    const pageTitle = await ldPage.getTitle();   
    await ldPage.clickNew();
    await ldPage.clickSalutation("MR");
    await ldPage.enterLastname("Salesforce by Vidya");
    await ldPage.enterCompanyName("TL")
    await ldPage.clickSave("Save");   

})

