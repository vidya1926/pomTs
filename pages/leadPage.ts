import { Page } from "@playwright/test";
import { URLConstants } from "../constants/urlConstants";
import { PlaywrightWrapper } from "../utils/playwright";

export class LeadsPage extends PlaywrightWrapper {

     constructor(page: Page) {
       super(page);
    }
    public async clickViewAll() {
        await this.click("//button[text()='View All']","viewALL","Button");
    }

    public async searchLead(value:string){
        await this.type("//input[@placeholder='Search apps or items...']","searchField",value);
    }

    public async clickLeads(){
        await this.click("//mark[text()='Leads']","Leads","Button");
    }

    
    public async clickNew(){
        await this.click("//button[text()='New']","New","Button");
    }

    public async clickSalutation(value:string){
        await this.page.waitForLoadState('load');
        await this.click("button[name=salutation]","Salutation",value);
        await this.click("//span[@title='Mr.']","Salutation",value);
    }

    public async enterLastname(value:string){
        await this.page.waitForLoadState('load');
        await this.type("input[placeholder='Last Name']","LastName",value);
    }

    public async clickSave(value:string){
        await this.click("button[name='SaveEdit']","Save",value)
    }

    public async enterCompanyName(value:string){
        await this.typeAndEnter("input[name='Company']","Company",value);
    }

}