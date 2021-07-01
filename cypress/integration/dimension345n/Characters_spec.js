describe('Characters', () => {
  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/characters"]').click()
  })

  it('Should be on characters display page', () => {
    cy.url().should('include', '/characters')
  })

  it("should show error if fetch fails", () => {
    cy.fixture('characters.json')
    .then(data => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/character', {
        statusCode: 404,
        delay: 100,
        body: data
      })
    })
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/characters"]').click()
    .get('.back-to-home')
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

  it("Should navigate you to episodes section when drop down link is clicked", () => {
    cy.get('.burger-container').click({force: true})
    .get('[href="/episodes"]').click({force: true})
    .url().should('include', '/episodes')
  })

  it("Should navigate you to locations section when drop down link is clicked", () => {
    cy.get('.burger-container').click({force: true})
    .get('[href="/locations"]').click({force: true})
    .url().should('include', '/locations')
  })

  it("Should navigate you back to home section when drop down link is clicked", () => {
    cy.get('.burger-container').click({force: true})
    .get('[href="/"]').click({force: true})
    .url().should('include', '/')
  })

  it('Should recognize a favorite when navigating home', () => {
    cy.get('#\\31 1 [data-cy=blank-icon]').click()
    cy.get('.burger-container').click({force: true})
    .get('[href="/"]').click({force: true})
    .get('#\\31 1 [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0')
  })

  it('Should unfavorite characters after navigating back home', () => {
    cy.get('#\\31 1 [data-cy=blank-icon]').click()
    cy.get('.burger-container').click({force: true})
    .get('[href="/"]').click({force: true})
    .get('#\\31 1 [data-cy=blank-icon]').click()
  })

})