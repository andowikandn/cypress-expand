import UploadLocators from '../locators/uploadLocators'

class UploadPages {
    visit() {
        cy.visit((Cypress.env('baseUrlUpload')))
    }

    selectChooseFile(fileName) {
        cy.get(UploadLocators.chooseFile).attachFile(fileName)
        return this
    }

    tapUploadButton() {
        cy.get(UploadLocators.uploadSubmit).click()
        return this
    }

    tapCloseBtn() {
        cy.get(UploadLocators.closeMsgBtn).click()
        return this
    }

    verifyFileTooLarge() {
        cy.get(UploadLocators.fileError)
            .should('be.visible')
            .and('contain.text', 'File too large')
        return this
    }

    verifyFileUploaded() {
        cy.get(UploadLocators.fileSuccess)
            .should('be.visible')
            .and('contain.text', 'Normal')
        return this
    }
}

export default UploadPages