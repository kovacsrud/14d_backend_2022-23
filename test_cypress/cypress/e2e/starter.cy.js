describe('Backend teszt', () => {
  it('Kezdőoldal tesztje', () => {
    cy.visit('http://localhost:8000');
    cy.contains("Backend tesztelés");

  })
})