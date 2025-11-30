import ForgotPasswordPages from '../pages/forgotPwdPages'

describe('Forgot Password Test', () => {
    const forgotPwdPage = new ForgotPasswordPages()

    beforeEach(() => {
        forgotPwdPage.visit()
    })

    it('Required field retrieve password', () => {
        forgotPwdPage
            .tapRetrieveButton()
            .verifyReqField()
    })

    it('Retrieve password an email has been sent', () => {
        forgotPwdPage
            .inputEmail('email@test.com')
            .tapRetrieveButton()
            .verifyResetPwd()
    })
})