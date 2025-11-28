import FormValidatorLocators from '../locators/formValidatorLocators'

class FormValidatorPages {
    constructor() {
        this.locator = FormValidatorLocators
    }

    visit() {
        cy.visit(Cypress.env('baseUrlFormValid'))
    }

    clearInputContactName(name) {
        cy.get(this.locator.form.contactNameInput).clear().type(name)
        return this
    }

    inputContactNumber(number) {
        cy.get(this.locator.form.contactNumberInput).clear().type(number)
        return this
    }

    pickUpDateInput(date) {
        cy.get(this.locator.form.pickUpDateInput).type(date)
        return this
    }

    selectPaymentMethod(methodValue) {
        cy.get(this.locator.form.paymentMethodInput, { timeout: 20000 })
            .select(methodValue)
        return this
    }

    tapRegisterButton() {
        cy.get(this.locator.form.registerButton).click()
        return this
    }

    verifySubmitRegister() {
        cy.get(this.locator.submit.registerValidation)
            .should('be.visible')
            .and('contain.text', 'Thank you for validating your ticket')
        return this
    }
}

export default FormValidatorPages