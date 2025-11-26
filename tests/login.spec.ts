import {test, expect} from '@playwright/test';
import '../setup/setup'
import { NavBar } from '../classes/navbar.page';
import { LoginPage } from '../classes/login.page';

const correctLogin = 'doman99999999@wp.pl';
const correctPassword = 'admin';

const wrongLogin = 'dsa@dsa';
const wrongPassword = 'dsadsa';




test('Login process', async ({page}) => {
    const navBar = new NavBar(page);
    const loginPage = new LoginPage(page);

    await navBar.clickOnLink(' Signup / Login');
    await loginPage.fillInputs(correctLogin,correctPassword);
    await loginPage.sendForm();
    await loginPage.expectLoginSuccess();
})

test('Failed login process', async({page})=> {
    const navBar = new NavBar(page);
    const loginPage = new LoginPage(page);
    
    await navBar.clickOnLink(' Signup / Login');
    await loginPage.fillInputs(wrongLogin,wrongPassword);
    await loginPage.sendForm();
    await loginPage.expectLoginFail();
})