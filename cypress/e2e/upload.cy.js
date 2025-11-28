import UploadPages from '../pages/uploadPages'

describe('Upload Files Test', () => {
    const uploadPage = new UploadPages()

    beforeEach(() => {
        uploadPage.visit()
    })

    it('Choose file max then verify file too large', () => {
        uploadPage
            .selectChooseFile('fileLarge.png')
            .tapUploadButton()
            .verifyFileTooLarge()
            .tapCloseBtn()
    })

    it('Choose file normal then verify file uploaded', () => {
        uploadPage
            .selectChooseFile('fileNormal.png')
            .tapUploadButton()
            .verifyFileUploaded()
    })
})