const WebTablesLocators = {
    list: {
        deleteRecord1: '#delete-record-1',
        deleteRecord2: '#delete-record-2',
        searchBox: '#searchBox',
        insuranceDisappear: 'div.rt-td:contains("Insurance")', // Insurance
        complianceDisappear: 'div.rt-td:contains("Compliance")', // Compliance
        noRowsFound: '.rt-noData', // No rows found
        techDeptSeacrh: 'div.rt-td:contains("Technology")', // Technology
        designDeptSeacrh: 'div.rt-td:contains("Design")', // Product Design
    },

    create: {
        addNewRecord: '#addNewRecordButton',
        closeBtn: 'button.close',
        submitBtn: '#submit',
        errorRegisForm: '#lastName',
        firstName: '#firstName',
        lastName: '#lastName',
        userEmail: '#userEmail',
        age: '#age',
        salary: '#salary',
        department: '#department',
        header: 'h1' // Web Tables
    }    
}

export default WebTablesLocators