import { Page, expect } from "@playwright/test";

export class NavBar{
    constructor(private page:Page){}
    
    async clickOnLink (name:string) {
        await this.page.getByRole('link', {name}).click();
    }

    async clickOnLogo() {
        await this.page.getByAltText('Website for automation practice').click();
    }

    async expectTitleToBe(title :string){
        await expect(this.page).toHaveTitle(title);
    }
}