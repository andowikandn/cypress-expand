import ForgotPasswordLocators from '../locators/forgotPwdLocators'

class ForgotPasswordPages {
    visit() {
        cy.visit(Cypress.env('baseURlForgotPwd'))
    }

    inputEmail(email) {
        cy.get(ForgotPasswordLocators.emailInput).type(email)
        return this
    }

    tapRetrieveButton() {
        cy.get(ForgotPasswordLocators.retrievePwdButton).click()
        return this
    }

    verifyReqField() {
        cy.get(ForgotPasswordLocators.errorRequired).should('be.visible')
            .and('contain.text', 'Please enter a valid email address')
    }

    verifyResetPwd() {
        cy.get(ForgotPasswordLocators.resetPwdMessage).should('be.visible')
            .and('contain.text', 'An e-mail has been sent to you')
    }
}

export default ForgotPasswordPages