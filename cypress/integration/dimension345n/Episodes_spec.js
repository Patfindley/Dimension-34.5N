describe('Episodes', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/episodes"]').click()
  })

  it('Should be on episodes display page', () => {
    cy.url().should('include', '/episodes')
  })

  it('Should display episode info', () => {
    cy.get('#\\36 ')
  })

  it('Should see icon to favorite a episode', () => {
    cy.get("[data-cy='blank-icon']")
  })

  

})