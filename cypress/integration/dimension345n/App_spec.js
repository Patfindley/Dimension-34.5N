describe('App', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000')
  })

  it('Should display a page with a search bar', () => {
    cy.get('input')
  })

  it('Should have hamburger menu', () => {
    cy.get('.burger-container')
  })

  it("should have a Mr. Meeseeks image and text bubble", () => {
    cy.get('.mr-meeseeks')
    .get('.bubble-text')
    .contains('End my agony and let me help you find something to learn!')
  })

  it('Should perform ridiculous opening animation when hamburger is clicked', () => {
    cy.get('.nav-open')
    .should('have.css', 'opacity', '0')
    cy.get('.burger-container').click()
    .should('have.css', 'opacity', '1')
  })

  it('Should perform ridiculous closing animation when hamburger is clicked again', () => {
    cy.get('.nav-open')
    .should('have.css', 'opacity', '0')
    .get('.burger-container').click()
    .get('.nav-open')
    .should('have.css', 'opacity', '1')
    cy.get('.mid').click()
    .wait(1500)
    cy.get('.nav-open')
    .should('have.css', 'opacity', '0')
  })

  it('Should show results when character is searched', () => {
    cy.get('input')
    .type('amish')
    .get('[src="https://rickandmortyapi.com/api/character/avatar/16.jpeg"]')
  })

  it('Should show results when episode is searched', () => {
    cy.get('input')
    .type('rick potion #9')
    .get('h3')
    .contains('Rick Potion #9')
  })

  it('Should show results when location is searched', () => {
    cy.get('input')
    .type('Post-Apocalyptic Earth')
    .get('h3')
    .contains('Planet')
  })

  it("Should navigate you to characters section when drop down link is clicked", () => {
    cy.get('.burger-container').click()
    .get('[href="/characters"]').click()
    .url().should('include', '/characters')
  })

  it("Should navigate you to episodes section when drop down link is clicked", () => {
    cy.get('.burger-container').click()
    .wait(1500)
    .get('[href="/episodes"]').click()
    .url().should('include', '/episodes')
  })

  it("Should navigate you to locations section when drop down link is clicked", () => {
    cy.get('.burger-container').click()
    .get('[href="/locations"]').click()
    .url().should('include', '/locations')
  })

  it("Should navigate you back to home section when drop down link is clicked", () => {
    cy.get('.burger-container').click()
    .get('[href="/"]').click()
    .url().should('include', '/')
  })

})