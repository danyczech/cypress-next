describe('Forms tests', () => {
  beforeEach(()=> {
    cy.visit('/forms')
  })

  it('Test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('dana@email.com')
    cy.contains(/Successfully subbed: dana@email.com!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: dana@email.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: dana@email.com!/i).should('not.exist')

    cy.get('@subscribe-input').type('dana@email.cz')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Invalid email: dana@email.cz!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Invalid email: dana@email.cz!/i).should('not.exist')

    cy.contains(/fail!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/fail!/i).should('exist')
    cy.wait(3000)
    cy.contains(/fail!/i).should('not.exist')  
  })
})