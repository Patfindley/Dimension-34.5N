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

  it('Should activate favorite function when blank icon is clicked', () => {
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1').click()
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0')
  })

  it('Should be able UN favorite a location', () => {
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1').click()
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0').click()
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1')
  })

  it("Should navigate you to characters section when drop down link is clicked", () => {
    cy.get('.burger-container').click({force: true})
    .get('[href="/characters"]').click({force: true})
    .url().should('include', '/characters')
  })

  

})