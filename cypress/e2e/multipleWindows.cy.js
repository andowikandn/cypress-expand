import MultipleWindowPages from '../pages/multipleWindows'

describe('Multiple Windows Test', () => {
    const multipleWindowPage = new MultipleWindowPages()

    beforeEach(() => {
        multipleWindowPage.visit()
    })

    it('Click the link verify new windows', () => {
        multipleWindowPage
            .clickHere()
            .verifyNewWindows()
    })
})