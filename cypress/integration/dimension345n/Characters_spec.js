describe('Characters', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/characters"]').click()
    .url().should('include', '/characters')
  })

  it('Should be on characters display page', () => {
    cy.url().should('include', '/characters')
  })

  it('Should display character image', () => {
    cy.get('[src="https://rickandmortyapi.com/api/character/avatar/11.jpeg"]')
  })

  it('Should see icon to favorite a character', () => {
    cy.get("[data-cy='blank-icon']")
  })

  it('Should activate favorite function when blank icon is clicked', () => {
    cy.get('#\\31 1 [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1').click()
    cy.get('#\\31 1 [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0')
  })

  it('Should be able UN favorite a character', () => {
    cy.get('#\\31 1 [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1').click()
    cy.get('#\\31 1 [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0').click()
    cy.get('#\\31 1 [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1')
  })

  

})