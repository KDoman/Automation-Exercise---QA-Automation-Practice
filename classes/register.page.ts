import { Page } from "@playwright/test";
import data from '../setup/data'

export class RegisterPage{
    constructor(private page:Page){}

    async fillRegisterInputs(){
        await this.page.locator('[data-qa="signup-name"]').pressSequentially(data.correctLogin);
        await this.page.locator('[data-qa="signup-name"]').pressSequentially(data.correctPassword);
    }
}