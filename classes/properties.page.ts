import {Page, expect} from '@playwright/test';

export class PropertiesPage{
    constructor(private page:Page){}

    async openBrowser(){
        await this.page.goto('https://automationexercise.com/');
        await this.page.getByRole('button', { name: 'Consent' }).click();
    }

     async expectPageToHaveTitle(title :string){
        await expect(this.page).toHaveTitle(title);
    }
    async expectPageToHaveURL(url:string){
        await expect(this.page).toHaveURL(url);
    }
}