describe('Locations', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/locations"]').click()
  })

  it('Should be on locations display page', () => {
    cy.url().should('include', '/locations')
  })

  it('Should display location info', () => {
    cy.get('#\\36 ')
  })

  it('Should see icon to favorite a location', () => {
    cy.get("[data-cy='blank-icon']")
  })

  

})