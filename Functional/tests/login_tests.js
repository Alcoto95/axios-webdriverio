import loginPage from '../page_objects/login_page.js'
import homePage from '../page_objects/home_page.js'
import * as data from '../../Utils/constants.js'

describe('Todoist Login Test Suite', () => {
    it('Login - Happy Path', () => {
        loginPage.open();
        loginPage.loginFlow(data.TODOIST_EMAIL, data.TODOIST_PASWORD);
        expect(homePage.todayHeader).toHaveText('Today');
    })
})