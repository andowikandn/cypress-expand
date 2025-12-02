import WebTablesPages from '../pages/webTablesPages'

describe('Web Tables Test Demo QA: CRUD', () => {
    const webTablesPage = new WebTablesPages()

    beforeEach(() => {
        webTablesPage.visit()
    })

    it('Delete list Insurance then verify is empty', () => {
        webTablesPage
            .deleteInsurance()
            .searchBox('Insurance')
            .verifyEmptySearch()
        })

    it('Delete list Compliance then verify is empty', () => {
        webTablesPage
            .deleteCompliance()
            .searchBox('Compliance')
            .verifyEmptySearch()
    })

    it('User add new record', () => {
        webTablesPage
            .userAddNew()
            .userCloseForm()
            .verifyBacktoList()
    })

    it('User add new clik submit then verify required field', () => {
        webTablesPage
            .userAddNew()
            .userSubmit()
            .verifyReqField()
    })

    it('User add new valid form then search Technology', () => {
        webTablesPage
            .userAddNew()
            .inputFirstName('Budi')
            .inputLastName('Pekerti')
            .inputUserEmail('budi.pekerti@email.com')
            .inputAge('30')
            .inputSalary('12000000')
            .inputDepartment('Technology')
            .userSubmit()
            .searchBox('Technology')
            .verifyTechnologySearch()
    })

    it('User add new valid form then search Design', () => {
        webTablesPage
            .userAddNew()
            .inputFirstName('Anisa')
            .inputLastName('Bakrie')
            .inputUserEmail('anisa.bakrie@email.com')
            .inputAge('28')
            .inputSalary('15000000')
            .inputDepartment('Product Design')
            .userSubmit()
            .searchBox('Design')
            .verifyDesignSearch()
    })
})