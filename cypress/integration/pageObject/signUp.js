///<reference types="cypress" />
const or=require("../../locators.json")
class signUp{

     signUpPage(){
          cy.visit('https://nightly.futurefuel.io/start/org-mohit')
     }

     getPageTitle(){  
      return cy.title()
     }

     signUpPage(loginUserName,loginPassword){
        cy.get(or.signup.firstName).clear().type(' ')
        cy.get(or.signup.lastName).clear().type(' ') 
        cy.get(or.signup.email).clear().type(' ')
        cy.get(or.signup.password).clear().type(' ')
        cy.get(or.signup.checkboxConfirmation).check()
        cy.get().click()

     }

    
} 

   export default signUp