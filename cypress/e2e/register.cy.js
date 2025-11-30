import RegisterPages from '../pages/registerPages'

describe('Register Test', () => {
    const registerPage = new RegisterPages()

    beforeEach(() => {
        registerPage.visit()
    })

    it('Register with required error fileds', () => {
        registerPage.tapRegisterButton()
        registerPage.verifyErrorField()
        registerPage.tapCloseError()
    })

    it('Register with account already registered', () => {
        registerPage.inputUsername('qwertyty')
        registerPage.inputPassword('Qwerty12#$')
        registerPage.inputConfirmPassword('Qwerty12#$')
        registerPage.tapRegisterButton()
        registerPage.verifyErrorRegistered()
        registerPage.tapCloseError()
    })

    it('Register with new account', () => {
        registerPage.inputUsername('sarapanBubur')
        registerPage.inputPassword('Pepayap4h1t!')
        registerPage.inputConfirmPassword('Pepayap4h1t!')
        registerPage.tapRegisterButton()
        registerPage.verifySuccessRegister()
        registerPage.tapCloseError()
    })
})