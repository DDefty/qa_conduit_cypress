describe('Login functionality', () => {
    it('should login with valid credentials', () =>{
        cy.visit('https://conduit.mate.academy/');
        cy.contains('Sign in').click();
        cy.get('input[type="email"]').type(Cypress.env('email'));
        cy.get('input[type="password"]').type(Cypress.env('password'));
        cy.get('button[type="submit"]').click();
    });
    it('shouldnt login with invalid credentials', () =>{
        cy.visit('https://conduit.mate.academy/');
        cy.contains('Sign in').click();
        cy.get('input[type="email"]').type('invalideamil123@gmail.com');
        cy.get('input[type="password"]').type('InValiDPassword');
        cy.get('button[type="submit"]').click();
        cy.contains('is invalid').should('be.visible');
    });
});