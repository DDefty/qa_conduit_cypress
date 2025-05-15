describe('Profile functionality', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('Sign in').click();
    cy.get('input[type="email"]').type(Cypress.env('email'));
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();
  });

  it('should edit profile', () => {
    cy.contains('Settings').click();
    cy.get('textarea[placeholder="Short bio about you"]').clear().type('QA automation enthusiast');
    cy.get('button').contains('Update Settings').click();
    cy.contains('QA automation enthusiast');
  });
});