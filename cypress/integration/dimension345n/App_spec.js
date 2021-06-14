describe('App', () => {
  beforeEach(() => {
    cy.fixture('characters.json')
    .then(data => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/character', {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
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

  it('Should show results when search bar is used', () => {
    cy.get('input')
    .type('amish')
  })

  it("Should navigate you to characters section when drop down link is clicked", () => {
    cy.get('.burger-container').click()
    .get('[href="/characters"]').click()
    .url().should('include', '/characters')
  })

  it("Should navigate you to episodes section when drop down link is clicked", () => {
    cy.get('.burger-container').click()
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