///<reference types="cypress" />
let data=require("../../testData.json")
import rollUp from '../pageObject/rollUp'
import roundup from '../pageObject/roundup'
import framePage from '../pageObject/framePage'
   const roundupPage=new roundup()
   const rollupPage=new rollUp()
   const framePage=new framePage()
describe('Check the \'Roll Up\' page',()=>{
  
    it('Verify Page title',()=>{
        rollupPage.getPageTitle().should('contains','FutureFuel')
    })
  
    it('Login the page',()=>{
        cy.login(data.loginUserName,data.loginPassword)
    })
    
  
    it('Verify the user is landed on the impact dashboard',()=>{ 
      roundupPage.getPage().contains('Get started')
    })


    it('visits to  the "Student Loan Account" page',()=>{
      rollupPage.visitToRollUpPage()
    })

    it('Roll Up" activation while providing blank data',()=>{
        framePage.enterBlankPassword(data.plaidUserName)
    })

    it('Roll Up" activation while providing invalid credentials or blank data',()=>{
        framePage.enterBlankUsername(data.RollupPlaidPassword)
        framePage.enterRollUpInvalidCredentials(data.RollupPlaidInvalidUserName,data.RollupPlaidPassword)
    })

    it('Roll Up" activation',()=>{
        framePage.selectLoanServicerandEnterCredentials(data.plaidUserName,data.RollupPlaidPassword)
    })


    it('Complete Loan Account Creation Step',()=>{
        rollupPage.whenLoanAccountIsAlreadyCreated()
    })

    it('verify if Loan Account is created',()=>{
        rollupPage.getNotification().contains('Your student loan account was connected!').should('be.visible')
    })


 
        
  })

  
  
     
              
    
  