describe('Article functionality', () => {
    const article = {
        title: '1234',
        description: 'Quality Assurancee',
        body: 'QA  enthusiast',
        tag: 'Test',
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
    it('should edit the article', () => {
        cy.contains(Cypress.env('username')).click();
        cy.contains('Article title: ' + article.title).click();
        cy.contains('Edit Article').click();

        cy.get('textarea[placeholder="Write your article (in markdown)"]')
        .clear()
        .type(article.updatedBody);

        cy.contains('Update Article').click();

        cy.contains(article.updatedBody);
        cy.should('not.contain', article.body);
    });
    it('shoud write a comment', () => {
        cy.contains(Cypress.env('username')).click();
        cy.contains('Article title: ' + article.title).click();
        cy.get('textarea[placeholder="Write a comment..."]').type('Great article!');
        cy.contains('Post Comment').click();

        cy.contains('Great article!');
    });
    it('should like the article', () => {
        cy.contains(Cypress.env('username')).click();
        cy.get('.article-meta').contains('0');
        cy.get('.ion-heart').click();

        cy.get('.article-meta').contains('1');
    });
    it('should delete the article', () => {
        cy.contains(Cypress.env('username')).click();
        cy.contains('Article title: ' +article.title).click();
        cy.on('window:confirm', () => true);
        cy.contains('Delete Article').click();

        cy.contains(Cypress.env('username')).click();
        cy.reload();
        cy.contains(article.title).should('not.exist');
    });
    it('Should open article from global feed', () => {
      cy.contains('Global Feed').click();
      cy.contains('Article title:').click();
    });
}) 