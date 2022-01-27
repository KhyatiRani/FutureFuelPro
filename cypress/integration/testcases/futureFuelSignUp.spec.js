/* ///<reference types="cypress" />
import roundup from '../pageObject/roundup'
import framePage from '../pageObject/framePage'
const fl=new roundup()
const ifa=new framePage()
describe('Check the Page Navigation',()=>{
  describe('Check the login Page',()=>{
   
    before(()=>{
      cy.fixture('testData').then((data)=>{
      globalThis.data=data
      })
    })
     
      it.skip('Verify Page title',()=>{
        fl.getPageTitle().should('contains','FutureFuel')
      })
  
      it.skip('Visit to forgot password page',()=>{ 
      fl.forgotPassword(data.loginUserName)
      })
  
  
      it.skip('Login Test with invalid credentials',()=>{ 
      fl.invalidcredentials(data.loginIncorrectUserName,data.loginIncorrectPassword)
      fl.blankUsername(data.blankUserName,data.loginPassword)
      fl.invalidUsername(data.loginIncorrectUserName,data.loginPassword)
      fl.blankUsernameAndinvalidPassword(data.blankUserName,data.loginIncorrectPassword)
      })
    })
   before(()=>{
      cy.fixture('testData').then((data)=>{
      globalThis.data=data
      })
    })

    it('Sign Up Page',()=>{
        fl.signUpPage()
      })
    it('Verify Page title',()=>{
      fl.getPageTitle().should('contains','FutureFuel')
    })

    
      
})


   
            
  

     
               
             
   
          
        

    

   
   */