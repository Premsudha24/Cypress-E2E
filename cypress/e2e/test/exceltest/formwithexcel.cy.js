describe('test excel', function () {
    it('test case 1 for excel', function () {
        cy.parseXlsx('C:/Users/ps/Cypress-E2E/cypress/fixtures/exceldatatest.xlsx').then((jsonData) => {
            cy.log(jsonData[0].data[1])
            for (let i = 0; i < jsonData[0].data.length; i++) {
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
                cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
                cy.get('[name="email"]').type(jsonData[0].data[i][2])
                cy.get('[name="message"]').type(jsonData[0].data[i][3])
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', "Thank You for your Message!")
            }
        })
    })
})