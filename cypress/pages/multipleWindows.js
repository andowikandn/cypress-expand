import MultipleWindowsLocators from "../locators/multipleWindows"

class MultipleWindowPages {
    visit() {
        cy.visit(Cypress.env('baseUrlMultipleWindows'))
    }

    clickHere() {
        cy.get(MultipleWindowsLocators.clickHere)
            .invoke('removeAttr', 'target')
            .click()

        return this
    }

    verifyNewWindows() {
        cy.get(MultipleWindowsLocators.newWindowPage)
            .should('be.visible')
            .and('contain.text', 'Example of a new window page for Automation Testing Practice')

        cy.url()
            .should('include', MultipleWindowsLocators.urlNewWindow)

        return this
    }
}

export default MultipleWindowPages