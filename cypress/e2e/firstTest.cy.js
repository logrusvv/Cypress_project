/// <reference types="Cypress" />

it("By ID", () => {
  cy.visit("https://next.privat24.ua/deposit/open")
  cy.get('tbody').find('td').find('div').find('button').eq('0')
  
});

