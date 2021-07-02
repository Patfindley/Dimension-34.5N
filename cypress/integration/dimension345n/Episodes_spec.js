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

  it("should show error if fetch fails", () => {
    cy.fixture('episodes.json')
    .then(data => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/episode', {
        statusCode: 404,
        delay: 100,
        body: data
      })
    })
    cy.visit('http://localhost:3000/')
    cy.get('.burger-container').click()
    .get('[href="/episodes"]').click()
    .get('.back-to-home')
  })

  it('Should display episode info', () => {
    cy.get('#\\36 ')
  })

  it('Should see icon to favorite a episode', () => {
    cy.get("[data-cy='blank-icon']")
  })

  it('Should activate favorite function when blank icon is clicked', () => {
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '1').click()
    cy.get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0')
  })

  it('Should be able UN favorite a episode', () => {
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
    cy.get('#\\36 > [data-cy=blank-icon]').click()
    cy.get('.burger-container').click({force: true})
    .get('[href="/"]').click({force: true})
    .get('#\\36 > [data-cy=blank-icon]')
    .should('have.css', 'opacity', '0')
  })

  it('Should unfavorite episode after navigating back home', () => {
    cy.get('#\\36 > [data-cy=blank-icon]').click()
    cy.get('.burger-container').click({force: true})
    .get('[href="/"]').click({force: true})
    .get('#\\36 > [data-cy=blank-icon]').click()
  })

})