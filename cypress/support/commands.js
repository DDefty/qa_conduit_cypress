Cypress.Commands.add('login', () => {
  const username = Cypress.env('username');
  cy.get('input[type="email"]').type(Cypress.env('email'));
  cy.get('input[type="password"]').type(Cypress.env('password'));
  cy.get('button[type="submit"]').click();
  cy.get('.navbar').should('contain', username);
});
