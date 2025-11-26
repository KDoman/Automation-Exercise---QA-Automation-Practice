import {Page} from '@playwright/test';

export class StartPage{
    constructor(private page:Page){}

    async openBrowser(){
        await this.page.goto('https://automationexercise.com/');
        await this.page.getByRole('button', { name: 'Consent' }).click();
    }
}