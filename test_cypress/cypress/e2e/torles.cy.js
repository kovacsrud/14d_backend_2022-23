describe('Adat törlés teszt', () => {
  it('Adat törlés teszt', () => {
    cy.request({
      method:'DELETE',
      url:'http://localhost:8000/torles',
      body:{id:5}
  }).as('testreq')
    cy.get('@testreq').then(res=>{
      expect(res.status).to.eq(200);
      expect(res.body).has.property('message','Adat törölve!');
      
    })
  })
})