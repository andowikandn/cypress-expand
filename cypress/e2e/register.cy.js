import RegisterPages from '../pages/registerPages'

describe('Register Test', () => {
    const registerPage = new RegisterPages()

    beforeEach(() => {
        registerPage.visit()
    })

    it('Register with required error fileds', () => {
        registerPage
            .tapRegisterButton()
            .verifyErrorField()
            .tapCloseError()
    })

    it('Register with account already registered', () => {
        registerPage
            .inputUsername('qwertyty')
            .inputPassword('Qwerty12#$')
            .inputConfirmPassword('Qwerty12#$')
            .tapRegisterButton()
            .verifyErrorRegistered()
            .tapCloseError()
    })

    it('Register with new account', () => {
        registerPage
            .inputUsername('sarapanNasiUduk')
            .inputPassword('Pepayap4h1t!')
            .inputConfirmPassword('Pepayap4h1t!')
            .tapRegisterButton()
            .verifySuccessRegister()
            .tapCloseError()
    })
})