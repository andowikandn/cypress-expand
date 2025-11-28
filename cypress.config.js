const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrlLogin: 'https://practice.expandtesting.com/login',
      baseUrlRegister: 'https://practice.expandtesting.com/register',
      baseUrlDropCricles: 'https://practice.expandtesting.com/drag-and-drop-circles',
      baseUrlFormValid: 'https://practice.expandtesting.com/form-validation',
      baseUrlUpload: 'https://practice.expandtesting.com/upload'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
// # username test expantesting
// # qwertyty
// # Qwerty12#$