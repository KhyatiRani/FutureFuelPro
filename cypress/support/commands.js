import 'cypress-file-upload'; 
const or=require("../locators.json")



Cypress.Commands.add('login', (loginUserName,loginPassword) => {
        cy.get(or.FutureFuelLogin.email).clear().type(loginUserName)
        cy.get(or.FutureFuelLogin.password).clear().type(loginPassword)
        cy.get(or.FutureFuelLogin.login).click()
   })


  before("Visits the URL", () => {
    cy.visit('/')
    

   
  })

