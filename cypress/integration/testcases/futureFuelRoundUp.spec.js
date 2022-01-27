///<reference types="cypress" />
let data=require("../../testData.json")
import roundup from '../pageObject/roundup'
import framePage from '../pageObject/framePage'
  const roundupPage=new roundup()
   const framepage=new framePage()

   describe('Check the \'Login\' page',()=>{
    it('Verify Page title',()=>{
        roundupPage.getPageTitle().should('contains','FutureFuel')
      })
  
    it.skip('Login Test with invalid credentials',()=>{ 
           roundupPage.invalidcredentials(data.loginIncorrectUserName,data.loginIncorrectPassword)
           roundupPage.blankUsername(data.blankUserName,data.loginPassword)
           roundupPage.invalidUsername(data.loginIncorrectUserName,data.loginPassword)
           roundupPage.blankUsernameAndinvalidPassword(data.blankUserName,data.loginIncorrectPassword)
       })
        
    })
describe('Check the \'Round Up\' page',()=>{
   
    it('Login the page',()=>{
      cy.login(data.loginUserName,data.loginPassword)
    })

   
    it('Verify the user is landed on the impact dashboard',()=>{ 
      roundupPage.getPage().contains('Get started').should('be.visible')
    })

    it('visits to  the "Round Up" page',()=>{
      roundupPage.visitToRoundUpPage()
    })

    it('Round up Activation',()=>{
      framepage.selectBankAndEnterCredentials(data.plaidUserName,data.plaidPassword)
    })

    it('Connect to a spending account',()=>{
      roundupPage.linkToSpendingAccount()
    })

    it('Add a Funding account',()=>{
      roundupPage.addAFundingAccount()
    })


    it('Complete Funding account',()=>{
      roundupPage.fundingAccountAuthorization()
    })

   
    it('Upload bank statement',()=>{
      roundupPage.uploadTheFile()
    })
    it('disable the round up page ',()=>{
      roundupPage.disableRoundUp()
  })
      
})



   
            
  

     
               
             
   
          
        

    

   
  