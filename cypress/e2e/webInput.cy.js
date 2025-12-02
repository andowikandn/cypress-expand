import WebInputPages from '../pages/webInputPages'

describe('Web Input Test', () => {
    const webInputPage = new WebInputPages()

    beforeEach(() => {
        webInputPage.visit()
    })

    it('Input the form then verify', () => {
        webInputPage
            .userInputNumber('12345')
            .userInputText('asdfg')
            .userInputPassword('password!')
            .userInputDate('2020-10-28')
            .tapDisplayButton()
            .verifyOutput()
    })

    it('Clear the form then verify', () => {
        webInputPage
            .userInputNumber('12345')
            .userInputText('qwerty')
            .userInputPassword('password!')
            .userInputDate('2020-10-30')
            .tapDisplayButton()
            .verifyOutput()
            .tapClearButton()
            .verifyOutput()
    })
})