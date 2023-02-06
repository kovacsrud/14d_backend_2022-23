describe('Új adat felvitel teszt', () => {
  it('Új adat felvitel teszt', () => {
    cy.request({
      method:'POST',
      url:'http://localhost:8000/ujadat',
      body:{id:5,adat:"Szöveg5"}
  }).as('testreq')
    cy.get('@testreq').then(res=>{
      expect(res.status).to.eq(201);
      expect(res.body).has.property('message','Új adat beszúrva!')
      
    })
  })
})