///<reference types="cypress" />
import rollUp from '../pageObject/rollUp'
import roundup from '../pageObject/roundup'
import framePage from '../pageObject/framePage'
let data=require("../../testData.json")
   const roundupPage=new roundup()
   const rollupPage=new rollUp()
   const framepage=new framePage()
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


      it('Upload bank statement',()=>{
        rollupPage.uploadTheFile()
      })

      it('Add loan',()=>{
        rollupPage.addLoan()
      })

      it('Verify if loan account is created',()=>{
        rollupPage.getNotification().contains('You added another loan account!').should('be.visible')
      })

      it('Manage Loan Account',()=>{
        rollupPage.updateLoanAccount()
      })

      it('verify if user is able to update the data of loan account',()=>{
        rollupPage.getNotification().contains('The changes you made were saved.').should('be.visible')
      })


      it('Manage Loan Statement',()=>{
        rollupPage.manageLoanStatementTest()
      })

      it.skip('verify if user is able to update the loan statement',()=>{
        rollupPage.getNotification().contains('Your loan statement has been updated.').should('be.visible')
      })
      

      it('Remove Loan Account',()=>{
        rollupPage.removeLoanAccount()
      })

      it('verify if loan account is removed',()=>{
        rollupPage.getNotification().contains('We’ve removed your loan account.').should('be.visible')
      })


      it.skip('visits to  the "Student Loan Account" page',()=>{
        rollupPage.studentLoanAccount()
      })

      it.skip('Roll Up" activation while providing blank data',()=>{
        framepage.enterBlankPassword(data.plaidUserName)
      })

      it.skip('Roll Up" activation while providing invalid credentials or blank data',()=>{
        framepage.enterBlankUsername(data.RollupPlaidPassword)
        framepage.enterRollUpInvalidCredentials(data.RollupPlaidInvalidUserName,data.RollupPlaidPassword)
      })

      it.skip('Roll Up" activation',()=>{
        framepage.selectLoanServicerandEnterCredentials(data.plaidUserName,data.RollupPlaidPassword)
      })


      it.skip('Complete Loan Account Creation Step',()=>{
        rollupPage.whenLoanAccountIsAlreadyCreated()
      })

      it.skip('verify if Loan Account is created',()=>{
        rollupPage.getNotification().contains('Your student loan account was connected!').should('be.visible')
      })

        
  })

  
  
     
              
    
  