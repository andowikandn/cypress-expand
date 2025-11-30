const FormValidatorLocators = {
    form: {
        contactNameInput: 'input[name="ContactName"]',
        contactNumberInput: 'input[name="contactnumber"]',
        pickUpDateInput: 'input[name="pickupdate"]',
        paymentMethodInput: 'select[name="payment"]',
        registerButton: 'button[type="submit"]'
    },

    submit: {
        invalidRequired: '.invalid-feedback',
        registerValidation: '[role="alert"]'
    }
}

export default FormValidatorLocators