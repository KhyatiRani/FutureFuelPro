///<reference types="cypress" />

const or=require("../../locators.json")

class futureFuelLogin{

  
     getPageTitle(){  
      return cy.title()
     }

    loginThePage(loginUserName,loginPassword){
        cy.get(or.FutureFuelLogin.email).clear().type(loginUserName)
        cy.get(or.FutureFuelLogin.password).clear().type(loginPassword)
        cy.get(or.FutureFuelLogin.login).click()
    }

    getNotification(){
      return cy.get(or.FutureFuelLogin.pageBody)
    }

    visitToRollUpPage1(){
        cy.get(or.FutureFuelLogin.toggleIcon).click()
        cy.get(or.rollup.rollupLink).click()
        cy.get(or.FutureFuelLogin.nextButton).click()
        cy.get(or.FutureFuelLogin.nextButton).click()
    }
    visitToRollUpPage(){
      cy.get(or.FutureFuelLogin.toggleIcon).click()
      cy.get(or.rollup.rollupLink).click()
      cy.get(or.rollup.addPath1).click()
      cy.xpath(or.rollup.addLoanSelectButton).click()
      cy.get(or.FutureFuelLogin.nextButton).click()
      //cy.get(or.FutureFuelLogin.nextButton).click()
  }

    studentLoanAccount(){
      //cy.get(or.FutureFuelLogin.pageBody).contains('Done').click()
      cy.get(or.rollup.addPath1).click()
      cy.xpath(or.rollup.addLoanSelectButton).click()
      cy.get(or.FutureFuelLogin.nextButton).click()
      //cy.get(or.FutureFuelLogin.nextButton).click()
    }
  

    whenLoanAccountIsAlreadyCreated(){
        cy.get(or.FutureFuelLogin.pageBody).contains('You already have a Plaid loan account for this servicer. If you want to change it, please do so from Roll Up.').should('be.visible')   
    }


    addLoan(){
      cy.get(or.FutureFuelLogin.toggleIcon).click()
      cy.get(or.rollup.rollupLink).click()
       /*  cy.on('window:confirm', (text) => {
        expect(text).to.contains('Want to stop connecting a loan?')
        })
      cy.get(or.FutureFuelLogin.pageBody).contains('Leave').click()
      cy.get(or.FutureFuelLogin.toggleIcon).click()
      cy.get(or.rollup.rollupLink).click() */
      cy.get(or.rollup.addPath1).click()
      cy.xpath(or.rollup.loanSelectButton).click()
      cy.get(or.rollup.loanServicerDropDown).click()
      cy.get(or.rollup.dropDownSelector).click()
      cy.xpath(or.rollup.loanName).type('test')
      cy.xpath(or.rollup.balance).type('100,000')
      cy.xpath(or.rollup.monthly_payment).type('500')
      cy.xpath(or.rollup.interest_rate).type('2')
      cy.get(or.FutureFuelLogin.nextButton).click()
      //cy.get(or.FutureFuelLogin.pageBody).contains('You already have a Manual loan account for this servicer. If you want to change it, please do so from Roll Up').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Next').click()
      //cy.get(or.FutureFuelLogin.doneButton).click()
    }


    addLoanForNewUser(){
        cy.get(or.FutureFuelLogin.toggleIcon).click()
        cy.get(or.rollup.rollupLink).click()
       /*cy.on('window:confirm', (text) => {
        expect(text).to.contains('Want to stop connecting a loan?')
        })
        cy.get(or.FutureFuelLogin.pageBody).contains('Leave').click()
        cy.get(or.FutureFuelLogin.toggleIcon).click()
        cy.get(or.rollup.rollupLink).click() */
        cy.xpath(or.rollup.loanSelectButton).click()
        cy.get(or.rollup.loanServicerDropDown).click()
        cy.get(or.FutureFuelLogin.nextButton).click()
        cy.get(or.FutureFuelLogin.pageBody).contains('Please select a loan servicer from the list.').should('be.visible')
        cy.get(or.rollup.loanServicerDropDown).click()
        cy.get(or.rollup.dropDownSelector).click()
        cy.get(or.FutureFuelLogin.nextButton).click()
        cy.get(or.FutureFuelLogin.pageBody).contains('Please fill in all the loans fields.').should('be.visible')
        cy.xpath(or.rollup.loanName).type('test')
        cy.xpath(or.rollup.balance).type('100,000')
        cy.xpath(or.rollup.monthly_payment).type('500')
        cy.xpath(or.rollup.interest_rate).type('2')
        cy.get(or.FutureFuelLogin.nextButton).click()  
    }

    removeLoanAccount(){  
        //cy.get(or.FutureFuelLogin.pageBody).contains('Done').click()
        //cy.xpath(or.FutureFuelLogin.manageLoanButton).click() 
        cy.get(or.rollup.toggleOption).click()
        cy.get(or.FutureFuelLogin.pageBody).contains('Remove Loan Account').click() 
        cy.on('window:confirm', (text) => {
         expect(text).to.contains('Are you sure you want to remove this loan account?')
        })
        cy.get(or.FutureFuelLogin.pageBody).contains('Remove')
        cy.xpath(or.rollup.removeButton).click() 
    }

    uploadTheFile(){
      cy.get(or.FutureFuelLogin.toggleIcon).click()
      cy.get(or.rollup.rollupLink).click()
     /*  cy.on('window:confirm', (text) => {
      expect(text).to.contains('Want to stop connecting a loan?')
      })
      cy.get(or.FutureFuelLogin.pageBody).contains('Leave').click()
      cy.get(or.FutureFuelLogin.toggleIcon).click()
      cy.get(or.rollup.rollupLink).click() */
     
      cy.get(or.rollup.addPath1).click()
      cy.xpath(or.rollup.fileUploadSelectButton).click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Choose a file').attachFile('MyStudentDataK.pdf',{ subjectType: 'drag-n-drop' })
      cy.get(or.FutureFuelLogin.pageBody).contains('File extension must be txt.').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Next').click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Please upload a MyStudentData file.').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Choose a file').attachFile('MyStudentDataK.txt',{ subjectType: 'drag-n-drop' })
     // cy.get(or.FutureFuelLogin.pageBody).contains('You have reached max NSLDS uploads within 24 hours.').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Back').click()
    }

    uploadTheFileForNewUser(){
      cy.get(or.FutureFuelLogin.toggleIcon).click()
      cy.get(or.rollup.rollupLink).click()
      cy.get(or.rollup.addPath1).click()
      cy.xpath(or.rollup.fileUploadSelectButton).click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Choose a file').attachFile('MyStudentDataK.txt',{ subjectType: 'drag-n-drop' })
      cy.get(or.FutureFuelLogin.pageBody).contains('Next').click()
      //cy.get(or.FutureFuelLogin.pageBody).contains('We got your file!').should('be.visible')
    }

    disableRollUp(){
        cy.get(or.FutureFuelLogin.toggleIcon).click()
        cy.get(or.rollup.rollupLink).click()
        cy.get(or.rollup.toggleOption).click()
        cy.get(or.rollup.removeLoanAccountOption).click()
        cy.on('window:confirm', (text) => {
        expect(text).to.contains('Are you sure you want to remove this loan account?')
      })
        cy.get(or.FutureFuelLogin.pageBody).contains('Remove')
        cy.xpath(or.rollup.loanAccountRemoveButton).click() 
        cy.get(or.rollup.closeButton).click()
        cy.xpath(or.rollup.loanAccountRemoveButton).click()    
  }
    closeThePopup(){
      cy.get(or.FutureFuelLogin.pageBody).contains('Remove')
    }


    updateLoanAccount(){
      //cy.get(or.FutureFuelLogin.pageBody).contains('Done').click()
      //cy.get(or.FutureFuelLogin.toggleIcon).click()
      //cy.get(or.rollup.rollupLink).click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Done').click()
      cy.get(or.rollup.toggleOption).click()
      //cy.xpath(or.rollup.manageLoanButton).click()
      cy.get('#Stroke-108').click()
      //cy.get(or.FutureFuelLogin.pageBody).contains('Manage Loan Details').click() 
      cy.xpath(or.rollup.monthly_payment).clear().type('200')
      cy.xpath(or.rollup.interest_rate).clear().type('3')
      cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('11/12/2021')
      cy.get(or.FutureFuelLogin.pageBody).contains('Close').click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Do you want to save the changes you made?').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Yes').click()
    }

    manageLoanStatementTest(){
      //cy.get(or.rollup.toggleOption).click()
      cy.xpath(or.rollup.manageLoanButton).click()
      cy.get('.MuiList-root > :nth-child(2) > .MuiTypography-root').click()
     // cy.get(or.FutureFuelLogin.pageBody).contains('Manage Loan Details').click() 
      //cy.get(or.FutureFuelLogin.pageBody).contains('Done').click() 
      //cy.get(or.FutureFuelLogin.pageBody).contains('You must have at least one loan statement on file.').should('be.visible')
      //cy.get(or.FutureFuelLogin.pageBody).contains('Choose a file').attachFile('download.jpg',{ subjectType: 'drag-n-drop' })
      
      //cy.get(or.FutureFuelLogin.pageBody).contains('File extension must be one of: jpeg, jpg, png, pdf.').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Choose a file').attachFile('download.jpg',{ subjectType: 'drag-n-drop' })
      cy.get(or.FutureFuelLogin.pageBody).contains('Done').click()   
    }

    changePrimaryLoanAccount(){
      cy.get(or.rollup.toggleOption).click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Change Primary Loan Account').click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Choose a Primary Loan Account').should('be.visible')
      cy.get(or.FutureFuelLogin.pageBody).contains('Link another loan account').click()
      cy.get(or.FutureFuelLogin.pageBody).contains('Connect a loan account').should('be.visible')


      
      
      
    }


    
} 

  export default futureFuelLogin