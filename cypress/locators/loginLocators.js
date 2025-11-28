const LoginLocators = {
  form: {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
  },
  flash: {
    message: '#flash',
    closeButton: '#flash .btn-close'
  },
  nav: {
    logoutButton: 'a[href="/logout"]'
  }
}

export default LoginLocators