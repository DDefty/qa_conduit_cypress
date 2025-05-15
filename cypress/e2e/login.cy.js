describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('Sign in').click();
  });

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type(Cypress.env('email'));
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', 'dawid');
  });

  it('should not login with invalid credentials', () => {
    cy.get('input[type="email"]').type('invalidemail123@gmail.com');
    cy.get('input[type="password"]').type('InValiDPassword');
    cy.get('button[type="submit"]').click();
    cy.contains('is invalid').should('be.visible');
  });

  it('should not login without password', () => {
    cy.get('input[type="email"]').type('invalidemail123@gmail.com');
    cy.get('button[type="submit"]').click();
    cy.contains("can\'t be blank").should('be.visible');
  });

  it('should not login without email', () => {
    cy.get('input[type="password"]').type('InValiDPassword');
    cy.get('button[type="submit"]').click();
    cy.contains("can\'t be blank").should('be.visible');
  });
});