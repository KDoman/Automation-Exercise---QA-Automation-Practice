import {test} from '../setup/baseTest'
import { NavBar } from '../classes/navbar.page';
import { PropertiesPage } from '../classes/properties.page';


test('Has title', async ({page}) => {
    const propertiesPage = new PropertiesPage(page);
    await propertiesPage.expectPageToHaveTitle('Automation Exercise')
})

test('If logo redirects to homepage', async({page}) => {
    const navBar = new NavBar(page);
    const propertiesPage = new PropertiesPage(page);
    await navBar.clickOnTab(' Products')
    await navBar.clickOnLogo();
    await propertiesPage.expectPageToHaveURL('https://automationexercise.com/')
})