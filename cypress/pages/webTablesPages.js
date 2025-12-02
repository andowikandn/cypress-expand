import WebTablesLocators from '../locators/webTablesLocators'

class WebTablesPages {
    constructor() {
        this.locator = WebTablesLocators
    }

    visit() {
        cy.visit(Cypress.env('baseUrlWebTables'))
    }

    // WebTables List
    deleteInsurance() {
        cy.get(this.locator.list.deleteRecord1)
            .click()
        return this
    }

    deleteCompliance() {
        cy.get(this.locator.list.deleteRecord2)
            .click()
        return this
    }

    searchBox(search) {
        cy.get(this.locator.list.searchBox)
            .type(search)
        return this
    }

    verifyTechnologySearch() {
        cy.contains(this.locator.list.techDeptSeacrh, 'Technology')
            .should('be.visible')
        return this
    }

    verifyDesignSearch() {
        cy.contains(this.locator.list.designDeptSeacrh, 'Product Design')
            .should('be.visible')
        return this
    }

    verifyEmptySearch() {
        cy.get(this.locator.list.insuranceDisappear)
            .should('not.exist')
        cy.get(this.locator.list.complianceDisappear)
            .should('not.exist')
        return this
    }

    // Create New
    userAddNew() {
        cy.get(this.locator.create.addNewRecord)
            .click()
        return this
    }

    userCloseForm() {
        cy.get(this.locator.create.closeBtn)
            .click()
        return this
    }

    verifyBacktoList() {
        cy.get(this.locator.create.header)
            .should('be.visible')
            .and('contain.text', 'Web Tables')
        return this
    }

    userSubmit() {
        cy.get(this.locator.create.submitBtn)
            .click()
        return this
    }

    verifyReqField() {
        cy.get(this.locator.create.errorRegisForm)
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')
        return this
    }

    inputFirstName(inputFirst) {
        cy.get(this.locator.create.firstName)
            .type(inputFirst)
        return this
    }

    inputLastName(inputLast) {
        cy.get(this.locator.create.lastName)
            .type(inputLast)
        return this
    }

    inputUserEmail(inputEmail) {
        cy.get(this.locator.create.userEmail)
            .type(inputEmail)
        return this
    }

    inputAge(inputAge) {
        cy.get(this.locator.create.age)
            .type(inputAge)
        return this
    }

    inputSalary(inputSalary) {
        cy.get(this.locator.create.salary)
            .type(inputSalary)
        return this
    }

    inputDepartment(inputDepartment) {
        cy.get(this.locator.create.department)
            .type(inputDepartment)
        return this
    }
}

export default WebTablesPages