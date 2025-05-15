Cypress.Commands.add('login', () => {
  cy.visit('https://conduit.mate.academy/');
  cy.contains('Sign in').click();
  cy.get('input[type="email"]').type(Cypress.env('email'));
  cy.get('input[type="password"]').type(Cypress.env('password'));
  cy.get('button[type="submit"]').click();
  cy.get('.navbar').should('contain', Cypress.env('username'));
});
