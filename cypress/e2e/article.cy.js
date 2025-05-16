const { beforeEach } = require("node:test")

describe('Article functionality', () => {
    beforeEach(() =>{
        cy.login();
    });
    it('should post an article', () => {
        cy.contains('New Article').click();
        cy.get('input[type="text"]').type('Test');
        cy.get('input[type="text"]').type('Test');
        cy.get('input[type="text"]').type('Test');
        cy.get('input[type="text"]').type('Test');
        
    })
})