describe('Article functionality', () => {
    beforeEach(() =>{
        cy.visit('https://conduit.mate.academy/');
        cy.contains('Sign in').click();
        cy.login();
    });
    it('should post an article', () => {
        cy.contains('New Article').click();
        cy.get('input[placeholder="Article Title"]').clear().type('QA automation enthusiast');
        cy.get('input[placeholder="What\'s this article about?"').clear().type('QA');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').clear().type('QA  enthusiast');
        cy.get('input[placeholder="Enter tags"]').type('QA');
        cy.contains('Publish Article').click();
    })
})