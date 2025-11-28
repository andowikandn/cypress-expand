import LoginPages from '../pages/loginPages'

describe('Login Test', () => {
  const loginPage = new LoginPages()

  beforeEach(() => {
    loginPage.visit()
  });

  it('Login with invalid credentials', () => {
    loginPage.inputUsername('typo')
    loginPage.inputPassword('typo')
    loginPage.tapLoginButton()
    loginPage.verifyErrorMessage()
    loginPage.tapCloseMessage()
  })

  it('Login with valid credentials', () => {
    loginPage.inputUsername('qwertyty')
    loginPage.inputPassword('Qwerty12#$')
    loginPage.tapLoginButton()
    loginPage.verifySuccessMessage()
    loginPage.tapCloseMessage()
  })

  it('End to end flow', () => {
    loginPage.inputUsername('qwertyty')
    loginPage.inputPassword('Qwerty12#$')
    loginPage.tapLoginButton()
    loginPage.verifySuccessMessage()
    loginPage.tapLogoutButton()
    loginPage.verifyLogoutMessage()
    loginPage.tapCloseMessage()
  })
})

