/* ///<reference types="cypress" />
import rollUp from '../pageObject/rollUp'
import roundup from '../pageObject/roundup'
import framePage from '../pageObject/framePage'
   const fl=new roundup()
   const rollupPage=new rollUp()
   const framesPage=new framePage()


  describe('Check the \'Roll Up\' page for new user',()=>{
   
    before(()=>{
      cy.fixture('testData').then((data)=>{
      globalThis.data=data
      })
    })
  
      it('Verify Page title',()=>{
        rollupPage.getPageTitle().should('contains','FutureFuel')
      })
  
      it.only('Login the page',()=>{
        cy.login(data.loginUserName,data.loginPassword)
      })
  
      it('Verify the user is landed on the impact dashboard',()=>{ 
        fl.getPage().contains('Get started')
      })

      it.only('visits to  the "Roll Up" page',()=>{
        rollupPage.visitToRollUpPage()
      })


      it('visits to  the "Student Loan Account" page',()=>{
        rollupPage.studentLoanAccount()
      })

      it('Roll Up" activation while providing blank data',()=>{
        framesPage.enterBlankPassword(data.plaidUserName)
      })

      it('Roll Up" activation while providing invalid credentials or blank data',()=>{
        framesPage.enterBlankUsername(data.RollupPlaidPassword)
        framesPage.enterRollUpInvalidCredentials(data.RollupPlaidInvalidUserName,data.RollupPlaidPassword)
      })

      it('Roll Up" activation',()=>{
        framesPage.selectLoanServicerandEnterCredentials(data.plaidUserName,data.RollupPlaidPassword)
      })


      it.skip('Complete Loan Account Creation Step',()=>{
        rollupPage.completeLoanAccountCreationStep()
      })

      it('verify if Loan Account is created',()=>{
        rollupPage.getNotification().contains('Your student loan account was connected!').should('be.visible')
        //rollupPage.getNotification().contains('You already have a Plaid loan account for this servicer. If you want to change it, please do so from Roll Up.').should('be.visible')
        //rollupPage.whenLoanAccountIsAlreadyCreated()
      })


      it('Add loan ',()=>{
        rollupPage.addLoanForNewUser()
      })

      it.skip('Verify if loan account is created',()=>{
        rollupPage.getNotification().contains('You added loan account!').should('be.visible')
      })
      

      it('Remove Loan Account',()=>{
        rollupPage.removeLoanAccount()
      })

      it('verify if loan account is removed',()=>{
        rollupPage.getNotification().contains('We’ve removed your loan account.').should('be.visible')
      })


      it('Upload bank statement file',()=>{
        rollupPage.uploadTheFileForNewUser()()
      })


      it.skip('Verify if bank statement file has been Uploaded',()=>{
        rollupPage.getNotification().contains('We got your file!').should('be.visible')
      })

      


      
 
        
  })
  
  
  
  
     
              
    
   */