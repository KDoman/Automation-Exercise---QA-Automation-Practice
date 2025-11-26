import test, { expect } from "@playwright/test";
import {NavBar} from '../classes/navbar.page'
import '../setup/setup'


test('Displaying form', async ({page}) => {
    const navBar = new NavBar(page);
    await navBar.clickOnTab(' Contact us');
    await expect(page.getByText('Get In Touch')).toBeVisible();
})