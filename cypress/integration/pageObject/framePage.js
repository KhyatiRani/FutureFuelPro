///<reference types="cypress" />
///<reference types = "Cypress-iframe"/>
require('cypress-xpath')
const or=require("../../locators.json")
import 'cypress-iframe';
class framePage{


    selectBankAndEnterCredentials(plaidUserName,plaidPassword){
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.Continue).should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).contains('Citibank Online').should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidUserName).should('be.visible').clear().type(plaidUserName)
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidPassword).should('be.visible').clear().type(plaidPassword,{parseSpecialCharSequences:false})
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.submit).should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.Continue).should('be.visible').click()
    }

    enterBlankUsername(RollupPlaidPassword){
      //cy.iframe(or.framePage.plaidLinkId).find(or.framePage.Continue).should('be.visible').click()
      //cy.iframe(or.framePage.plaidLinkId).contains('FedLoan Servicing').should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidUserName).should('be.visible').clear()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidPassword).should('be.visible').clear().type(RollupPlaidPassword,{parseSpecialCharSequences:false})
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.submit).should('be.visible').click()
      //cy.iframe(or.framePage.plaidLinkId).contains('Username is required').should('be.visible')
      //cy.iframe(or.framePage.plaidLinkId).contains('Exit').should('be.visible').click()
      //cy.iframe(or.framePage.plaidLinkId).find(or.framePage.Continue).should('be.visible').click()
    }

    enterBlankPassword(plaidUserName){
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.Continue).should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).contains('FedLoan Servicing').should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidUserName).should('be.visible').clear().type(plaidUserName)
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidPassword).should('be.visible').clear()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.submit).should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).contains('password is required').should('be.visible')
    }

    enterRollUpInvalidCredentials(RollupPlaidInvalidUserName,RollupPlaidPassword){
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidUserName).should('be.visible').clear().type(RollupPlaidInvalidUserName)
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidPassword).should('be.visible').clear().type(RollupPlaidPassword,{parseSpecialCharSequences:false})
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.submit).should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).contains('Try again').should('be.visible').click()
    }


    selectLoanServicerandEnterCredentials(plaidUserName,RollupPlaidPassword){
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidUserName).should('be.visible').clear().type(plaidUserName)
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.plaidPassword).should('be.visible').clear().type(RollupPlaidPassword,{parseSpecialCharSequences:false})
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.submit).should('be.visible').click()
      cy.iframe(or.framePage.plaidLinkId).find(or.framePage.Continue).should('be.visible').click()
      //cy.get(or.FutureFuelLogin.pageBody).contains('You already have a Plaid loan account for this servicer. If you want to change it, please do so from Roll Up.').should('be.visible')
    }

   } 
    

export default framePage