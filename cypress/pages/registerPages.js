import RegisterLocators from '../locators/registerLocators'

class RegisterPages {
    visit() {
        cy.visit(Cypress.env('baseUrlRegister'))
    }

    inputUsername(username) {
        cy.get(RegisterLocators.form.usernameInput).type(username)
    }

    inputPassword(password) {
        cy.get(RegisterLocators.form.passwordInput).type(password)
    }

    inputConfirmPassword(confirmpwd) {
        cy.get(RegisterLocators.form.confirmPassword).type(confirmpwd)
    }

    tapRegisterButton() {
        cy.get(RegisterLocators.form.registerButton).click()
    }

    verifyErrorRegistered() {
        cy.get(RegisterLocators.flash.message).should('be.visible')
            .and('contain.text', 'An error occurred during registration. Please try again.')
    }

    verifyErrorField() {
        cy.get(RegisterLocators.flash.message).should('be.visible')
            .and('contain.text', 'All fields are required.')
    }

    verifySuccessRegister() {
        cy.get(RegisterLocators.flash.message).should('be.visible')
            .and('contain.text', 'Successfully registered, you can log in now.')
    }

    tapCloseError() {
        cy.get(RegisterLocators.flash.closeButton).click()
    }
}

export default RegisterPages