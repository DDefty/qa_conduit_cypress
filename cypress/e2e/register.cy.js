const { generateRandomEmail, generateStrongPassword, generateUsername } = require('../support/utils');

describe('Register functionality', () => {
    it('should register with valid credentials', () =>{
        cy.visit('https://conduit.mate.academy/');
        cy.contains('Sign up').click();
        const email = generateRandomEmail();
        const password = generateStrongPassword();
        const username = generateUsername();
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="Email"]').type(email);
        cy.get('input[type="Password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.get('.navbar').should('contain', username.toLowerCase());
    });
});