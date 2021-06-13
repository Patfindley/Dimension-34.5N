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

})