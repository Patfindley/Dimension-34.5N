// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('stub', ()=> {
  cy.fixture('characters.json')
    .then(data => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/character', {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
  cy.fixture('episodes.json')
    .then(data => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/episode', {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
    cy.fixture('locations.json')
    .then(data => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/location', {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
})