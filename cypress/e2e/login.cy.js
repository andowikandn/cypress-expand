import LoginPages from '../pages/loginPages'

describe('Login Test', () => {
  const loginPage = new LoginPages()

  beforeEach(() => {
    loginPage.visit()
  });

  it('Login with invalid credentials', () => {
    loginPage
      .inputUsername('typo')
      .inputPassword('typo')
      .tapLoginButton()
      .verifyErrorMessage()
      .tapCloseMessage()
  })

  it('Login with valid credentials', () => {
    loginPage
      .inputUsername('qwertyty')
      .inputPassword('Qwerty12#$')
      .tapLoginButton()
      .verifySuccessMessage()
      .tapCloseMessage()
  })

  it('End to end flow', () => {
    loginPage
      .inputUsername('qwertyty')
      .inputPassword('Qwerty12#$')
      .tapLoginButton()
      .verifySuccessMessage()
      .tapLogoutButton()
      .verifyLogoutMessage()
      .tapCloseMessage()
  })
})