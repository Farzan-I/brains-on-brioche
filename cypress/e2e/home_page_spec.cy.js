describe('Home page', () => {
  it('has the title', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy="nav-title"]').should('contain', 'Brains On Brioche');
    cy.get('[data-cy="nav--slogan"]').should('contain', 'The no-waste revolution');
  });
});
