import LoginLocators from '../locators/loginLocators'

class LoginPages {
    visit() {
        cy.visit(Cypress.env('baseUrlLogin'))
    }

    inputUsername(username) {
        cy.get(LoginLocators.form.usernameInput).type(username)
    }

    inputPassword(password) {
        cy.get(LoginLocators.form.passwordInput).type(password)
    }

    tapLoginButton() {
        cy.get(LoginLocators.form.loginButton).click()
    }

    tapCloseMessage() {
        cy.get(LoginLocators.flash.closeButton).click()
    }

    verifyErrorMessage() {
        cy.get(LoginLocators.flash.message).should('be.visible')
            .and('contain.text', 'Your username is invalid!')
    }

    verifySuccessMessage() {
        cy.get(LoginLocators.flash.message).should('be.visible')
            .and('contain.text', 'You logged into a secure area!')
    }

    tapLogoutButton() {
        cy.get(LoginLocators.nav.logoutButton).click()
    }

    verifyLogoutMessage() {
        cy.get(LoginLocators.flash.message).should('be.visible')
            .and('contain.text', 'You logged out of the secure area!')
    }
}

export default LoginPages