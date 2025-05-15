describe('Profile functionality', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should edit profile', () => {
    cy.contains('Settings').click();
    cy.get('textarea[placeholder="Short bio about you"]').clear().type('QA automation enthusiast');
    cy.get('button').contains('Update Settings').click();
    cy.contains('QA automation enthusiast');
  });

    it('should logout successfully', () => {
    cy.contains('Settings').click();
    cy.contains('Or click here to logout.').click();
    cy.url().should('include', '/');
    cy.contains('Sign in').should('be.visible');
  });
});