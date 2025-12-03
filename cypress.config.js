const fs = require('fs')
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    downloadsFolder: "cypress/downloads",
    env: {
      baseUrlLogin: "https://practice.expandtesting.com/login",
      baseUrlRegister: "https://practice.expandtesting.com/register",
      baseUrlDropCricles:
        "https://practice.expandtesting.com/drag-and-drop-circles",
      baseUrlFormValid: "https://practice.expandtesting.com/form-validation",
      baseUrlUpload: "https://practice.expandtesting.com/upload",
      baseUrlForgotPwd: "https://practice.expandtesting.com/forgot-password",
      baseUrlMultipleWindows: "https://practice.expandtesting.com/windows",
      baseUrlInputWeb: "https://practice.expandtesting.com/inputs",
      baseUrlDownloads: "https://practice.expandtesting.com/download",
      baseUrlWebTables: "https://demoqa.com/webtables",
    },
    setupNodeEvents(on, config) {
      on('task', {
        deleteFile(filePath) {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
            return true
          }
          return false
        },
        checkFileExists(filePath) {
          return fs.existsSync(filePath)
        }
      })

      return config
    },
  },
})
