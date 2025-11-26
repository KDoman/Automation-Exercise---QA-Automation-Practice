import {test, expect} from '@playwright/test'
import '../setup/setup'
import {url} from '../setup/setup'
import { NavBar } from '../classes/navbar.page';



test('Has title', async ({page}) => {
    const navBar = new NavBar(page);
    await navBar.expectTitleToBe('Automation Exercise')
})

test('If logo redirects to homepage', async({page}) => {
    const navBar = new NavBar(page);
    await navBar.clickOnLink(' Products')
    await navBar.clickOnLogo();
    await expect(page).toHaveURL(url);
})

