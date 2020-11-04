import BasePage from './base_page.js'
import { TODOIST_BASE_URL } from '../../Utils/constants.js'

class TodoistLoginPage extends BasePage {
    get loginBtn() { return $('nav a[href*="showlogin"]') }
    get emailInput() { return $('input.input_email') }
    get passwordInput() { return $('input#password') }
    get submitLoginBtn() { return $('button.submit_btn') }
    get errorMessage() { return $('.error_msg span') }

    open() {
        super.open('')
    }

    loginFlow(email = '', password = '') {
        this.loginBtn.click();
        if(email !== '') {
            this.emailInput.setValue(email);
        }
        if(password !== '') {
            this.passwordInput.setValue(password);
        }
        this.submitLoginBtn.click();
    }
}

export default new TodoistLoginPage();
