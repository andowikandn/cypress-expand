import FormValidatorPages from '../pages/formValidatorPages'

describe('Form Validator Test', () => {
    const formValidPage = new FormValidatorPages()

    beforeEach(() => {
        formValidPage.visit()
    })

    it('Filling form validator', () => {
        formValidPage
            .clearInputContactName('Bram')
            .inputContactNumber('021-1234567')
            .pickUpDateInput('2025-10-30')
            .selectPaymentMethod('cashondelivery')
            .tapRegisterButton()
            .verifySubmitRegister()
    })
})