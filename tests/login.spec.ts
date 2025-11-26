import {test} from '@playwright/test';
import '../setup/setup'
import { NavBar } from '../classes/navbar.page';
import { LoginPage } from '../classes/login.page';
import data from '../setup/data';



test('Login process', async ({page}) => {
    const navBar = new NavBar(page);
    const loginPage = new LoginPage(page);

    await navBar.clickOnTab(' Signup / Login');
    await loginPage.login(data.correctLogin,data.correctPassword);
    await loginPage.expectLoginSuccess();
})

test('Failed login process', async({page})=> {
    const navBar = new NavBar(page);
    const loginPage = new LoginPage(page);
    
    await navBar.clickOnTab(' Signup / Login');
    await loginPage.login(data.wrongLogin,data.wrongPassword);
    await loginPage.expectLoginFail();
})


test('Logout User', async ({page}) => {
    const navBar = new NavBar(page);
    const loginPage = new LoginPage(page);

    await navBar.clickOnTab(' Signup / Login');
    await loginPage.login(data.correctLogin,data.correctPassword);
    await navBar.expectedLoggedIn();
    await navBar.clickOnTab(' Logout');
    await navBar.expectedLoggedOut(); 
})

