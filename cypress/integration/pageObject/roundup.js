///<reference types="cypress" />
const or=require("../../locators.json")
class roundup{

     signUpPage(){
          cy.visit('https://nightly.futurefuel.io/start/org-mohit')
     }

     getPageTitle(){  
      return cy.title()
     }

     loginThePage(loginUserName,loginPassword){
        cy.get(or.FutureFuelLogin.email).clear().type(loginUserName)
        cy.get(or.FutureFuelLogin.password).clear().type(loginPassword)
        cy.get(or.FutureFuelLogin.login).click()
     }

     forgotPassword(loginUserName){
          cy.get(or.FutureFuelLogin.pageBody).contains('Forgot your password?').click()
          cy.get(or.FutureFuelLogin.pageBody).contains('Forgot password').should('be.visible')
          cy.get(or.FutureFuelLogin.emailRecover).clear().type(loginUserName)
          cy.get(or.FutureFuelLogin.resetPassword).click()
          cy.get(or.FutureFuelLogin.resetPasswordAssertionText).contains('If the provided email address matches an account, you will receive an email with the reset link shortly.').should('be.visible')
          cy.get(or.FutureFuelLogin.passwordRecoverLink).click()
          cy.get(or.FutureFuelLogin.loginLinkOnForgotpasswordPage).click()
          //cy.get(or.FutureFuelLogin.pageBody).contains('Log in to a debt-free future')
      }  

     invalidcredentials(loginIncorrectUserName,loginIncorrectPassword){
          cy.get(or.FutureFuelLogin.email).clear().type(loginIncorrectUserName)
          cy.get(or.FutureFuelLogin.password).clear().type(loginIncorrectPassword)
          cy.get(or.FutureFuelLogin.login).click()
          cy.get(or.FutureFuelLogin.pageBody).contains('Enter a valid email address.').should('be.visible')
     }

     blankUsername(blankUserName,loginPassword){
          cy.get(or.FutureFuelLogin.email).clear().type(blankUserName)
          cy.get(or.FutureFuelLogin.password).clear().type(loginPassword)
          cy.get(or.FutureFuelLogin.login).click()
          cy.get(or.FutureFuelLogin.pageBody).contains( 'Email required.').should('be.visible')
          
     }
     invalidUsername(loginIncorrectUserName,loginPassword){
          cy.get(or.FutureFuelLogin.email).clear().type(loginIncorrectUserName)
          cy.get(or.FutureFuelLogin.password).clear().type(loginPassword)
          cy.get(or.FutureFuelLogin.login).click()
          cy.get(or.FutureFuelLogin.pageBody).contains('Enter a valid email address.').should('be.visible')
          
     }
     invalidPassword(loginUserName,loginIncorrectPassword){
          cy.get(or.FutureFuelLogin.email).type(loginUserName)
          cy.get(or.FutureFuelLogin.password).type(loginIncorrectPassword)
          cy.get(or.FutureFuelLogin.login).click()
          cy.get(or.FutureFuelLogin.pageBody).contains('Your email or password is incorrect.').should('be.visible') 
         
     }
     blankUsernameAndinvalidPassword(blankUserName,loginIncorrectPassword){
          cy.get(or.FutureFuelLogin.email).clear().type(blankUserName)
          cy.get(or.FutureFuelLogin.password).clear().type(loginIncorrectPassword)
          cy.get(or.FutureFuelLogin.login).click()
          cy.get(or.FutureFuelLogin.pageBody).contains('Email required.').should('be.visible')
          
     }
     invalidUsernameAndBlankblankUsername(loginIncorrectUserName,loginIncorrectPassword){
          cy.get(or.FutureFuelLogin.email).type(loginIncorrectUserName)
          cy.get(or.FutureFuelLogin.password).type(loginIncorrectPassword)
          cy.get(or.FutureFuelLogin.login).click()
          cy.get(or.FutureFuelLogin.helperUsernameText)
          .should('have.text', 'Enter a valid email address.')
          cy.get(or.FutureFuelLogin.helperPasswordText)
          .should('have.text', 'Password required.') 
          
     }

     getPage(){
        return cy.get(or.FutureFuelLogin.pageBody)
     }

     visitToRoundUpPage(){
         cy.get(or.FutureFuelLogin.toggleIcon).click()
         cy.get(or.FutureFuelLogin.roundUpLink).click()
         cy.get(or.FutureFuelLogin.nextButton).click()
         cy.get(or.FutureFuelLogin.nextButton).click()
         cy.get(or.FutureFuelLogin.nextButton).click() 
     }

     linkToSpendingAccount(){
          cy.get(or.FutureFuelLogin.checkingRadioOption).check()
          cy.get(or.FutureFuelLogin.nextButton).click() 
          //cy.wait(3000)
     }

     addAFundingAccount(){
          cy.get(or.FutureFuelLogin.formToGetRadioButton).find(or.FutureFuelLogin.checkingRadioOption2).check()
          cy.get(or.FutureFuelLogin.nextButton).click() 
          cy.wait(3000)
          cy.get(or.FutureFuelLogin.pageBody).contains('Funding Account Authorization').should('be.visible')
     }



     fundingAccountAuthorization(){
          cy.get(or.FutureFuelLogin.pageBody).find(or.FutureFuelLogin.checkBoxAuth).check()
          cy.get(or.FutureFuelLogin.nextAuthButton,{timeout:10000}).click() 
          cy.get(or.FutureFuelLogin.pageBody).contains('Verify Account Ownership').should('be.visible')
     }

     uploadTheFile(){
          cy.get(or.FutureFuelLogin.pageBody).contains('Choose a file').attachFile('download.jpg',{ subjectType: 'drag-n-drop' })
          cy.get(or.FutureFuelLogin.FileUploadNextButton).click()
          cy.wait(20000)
     }
     
     disableRoundUp(){
          cy.get(or.FutureFuelLogin.disableOptionMenu).click()
          cy.get(or.FutureFuelLogin.disableOptionButton).click()
          cy.get(or.FutureFuelLogin.disableOptionConfirmButton).click()
     }

    
} 

   export default roundup