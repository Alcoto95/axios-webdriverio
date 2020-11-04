import loginPage from '../page_objects/login_page.js'
import homePage from '../page_objects/home_page.js'
import * as data from '../../Utils/constants.js'

describe('Todoist Login Test Suite', () => {
    it('TC-0001 - Login - Empty Email and Password', () => {
        loginPage.open();
        loginPage.loginFlow();
        expect(loginPage.errorMessage).toHaveText('Invalid email address.');
    });

    it('TC-0002 - Login - Invalid Email', () => {
        loginPage.open();
        loginPage.loginFlow('wrongemail@gmail.com', data.TODOIST_PASWORD);
        expect(loginPage.errorMessage).toHaveText('Wrong email or password.');
    });

    it('TC-0003 - Login - Invalid Password', () => {
        loginPage.open();
        loginPage.loginFlow(data.TODOIST_EMAIL, 'invalidPassword');
        expect(loginPage.errorMessage).toHaveText('Wrong email or password.');
    });

    it('TC-0004 - Login - Happy Path', () => {
        loginPage.open();
        loginPage.loginFlow(data.TODOIST_EMAIL, data.TODOIST_PASWORD);
        expect(homePage.todayHeader).toHaveText('Today');
    });
})