/// <reference types="cypress" />

context('Utilities', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Cypress._ - call a lodash method', () => {
    cy.get('button').click();
    cy.get("span")
  })
})
