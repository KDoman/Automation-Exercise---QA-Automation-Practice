import { Page, expect } from "@playwright/test";

export class NavBar{
    constructor(private page:Page){}
    
    async clickOnTab (name:string) {
        await this.page.getByRole('link', {name}).click();
    }

    async clickOnLogo() {
        await this.page.getByAltText('Website for automation practice').click();
    }

    async expectedLoggedOut() {
        await expect(this.page.getByRole('link', {name: ' Delete Account'})).not.toBeVisible();
    }

    async expectedLoggedIn () {
        await expect(this.page.getByRole('link', {name: ' Delete Account'})).toBeVisible();
    }
}