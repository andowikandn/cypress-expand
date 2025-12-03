import DownloadLocators from '../locators/downloadLocators'

class DownloadPages {

    visit() {
        cy.visit(Cypress.env('baseUrlDownloads'))
        return this
    }

    downloadFile(locator, fileName) {
        const filePath = `${Cypress.config('downloadsFolder')}/${fileName}`
        cy.task('deleteFile', filePath)
        cy.get(locator).should('be.visible').click()
        cy.log(`Waiting for file: ${filePath}`)
        cy.log(`Waiting for ${fileName} to appear`)
        cy.waitUntil(() => cy.task('checkFileExists', filePath), {
            timeout: 20000,
            interval: 500
        });
        return this
    }

    verifyFile(fileName) {
        const filePath = `${Cypress.config('downloadsFolder')}/${fileName}`
        cy.readFile(filePath, 'binary', { timeout: 20000 })
            .should((buffer) => {
                expect(buffer, 'File should exist').not.to.be.null
                expect(buffer.length).to.be.gt(0)
            })
        return this
    }

    downloadPlaywrightFile() {
        return this.downloadFile(DownloadLocators.playwrightFile, '1764660998939_PlaywrightInterviewQna.pdf')
    }

    verifyPlaywrightFile() {
        return this.verifyFile('1764660998939_PlaywrightInterviewQna.pdf')
    }

    downloadImageFile() {
        return this.downloadFile(DownloadLocators.imageFile, '1764657941193_image (5).png')
    }

    verifyImageFile() {
        return this.verifyFile('1764657941193_image (5).png')
    }
}

export default DownloadPages