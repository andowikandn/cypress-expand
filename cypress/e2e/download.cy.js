import DownloadPages from '../pages/downloadPages'

describe('Dowload File Test', () => {
    const downloadPage = new DownloadPages()

    beforeEach(() => {
        downloadPage.visit()
    })

    it('Download playwritgh then verify file pdf', () => {
        downloadPage
            .downloadPlaywrightFile()
            .verifyPlaywrightFile()
    })

    it('Download image then verify file png', () => {
        downloadPage
            .downloadImageFile()
            .verifyImageFile()
    })
});