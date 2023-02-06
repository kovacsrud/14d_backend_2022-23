describe('Összes adat letöltése', () => {
  it('fetch adatok', () => {
    cy.request('http://localhost:8000/adatok').as('testreq')
    cy.get('@testreq').then(res=>{
      expect(res.status).to.eq(200);
      assert.isArray(res.body,'Tömb/lista OK.');
    })
  })
})