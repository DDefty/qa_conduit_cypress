describe('Article functionality', () => {
    const article = {
        title: 'QA automation enthusiast',
        description: 'Quality Assurance',
        body: 'QA  enthusiast',
        tag: 'QA',
        updatedBody: 'Quality Assurance entuhusiast'
    };

    beforeEach(() =>{
        cy.visit('https://conduit.mate.academy/');
        cy.contains('Sign in').click();
        cy.login();
    });
    it('should post an article', () => {
        cy.contains('New Article').click();
        cy.get('input[placeholder="Article Title"]').clear().type(article.title);
        cy.get('input[placeholder="What\'s this article about?"').clear().type(article.description);
        cy.get('textarea[placeholder="Write your article (in markdown)"]').clear().type(article.body);
        cy.get('input[placeholder="Enter tags"]').type(article.tag);
        cy.contains('Publish Article').click().click();

        cy.url().should('include', '/article/');
        cy.contains(article.title);
        cy.contains(article.tag);
    })
}) 