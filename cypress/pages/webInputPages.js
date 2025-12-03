import WebInputLocators from '../locators/webInputLocators'

class WebInputPages {
    visit() {
        cy.visit(Cypress.env('baseUrlInputWeb'))
    }

    userInputNumber(number) {
        cy.get(WebInputLocators.input.inputNumber)
            .type(number)
        return this
    }

    userInputText(text) {
        cy.get(WebInputLocators.input.inputText)
            .type(text)
        return this
    }

    userInputPassword(password) {
        cy.get(WebInputLocators.input.inputPassword)
            .type(password)
        return this
    }

    userInputDate(date) {
        cy.get(WebInputLocators.input.inputDate)
            .type(date)
        return this
    }

    tapDisplayButton() {
        cy.get(WebInputLocators.input.displayInputBtn)
            .click()
        return this
    }

    tapClearButton() {
        cy.get(WebInputLocators.input.clearInputBtn)
            .click()
        return this
    }

    verifyOutput() {
        cy.get(WebInputLocators.output.outputNumber)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log(text)
            })

        cy.get(WebInputLocators.output.outputText)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log(text)
            })

        cy.get(WebInputLocators.output.outputPassword)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log(text)
            })

        cy.get(WebInputLocators.output.outputDate)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log(text)
            })

        return this
    }

    verifyClearBtn() {
        cy.get(WebInputLocators.output
            .outputNumber)
            .should('not.exist')
        cy.get(WebInputLocators.output
            .outputText)
            .should('not.exist')
        cy.get(WebInputLocators.output
            .outputPassword)
            .should('not.exist')
        cy.get(WebInputLocators.output
            .outputDate)
            .should('not.exist')
    }

}

export default WebInputPages