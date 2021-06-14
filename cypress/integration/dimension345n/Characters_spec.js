describe('Characters', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/characters"]').click()
    .url().should('include', '/characters')
  })

  

})