///<reference types="cypress" />
const or=require("../../locators.json")
import roundup from '../pageObject/roundup'

  const roundupPage=new roundup()
  

   describe('Check the \'Login\' page',()=>{
    it('Verify Page title',()=>{
        roundupPage.getPageTitle().should('contains','FutureFuel')
      })

          
    it('login page',()=>{
    cy.get(or.FutureFuelLogin.email).clear().type('abc@gmail.com')
    cy.get(or.FutureFuelLogin.password).clear().type('FuelF@rFuture123')
    cy.get(or.FutureFuelLogin.login).click()
    /* cy.get('[d="M24.667 10.792h1.541v1.542h-1.541v-1.542zm-9.25 1.628c.91-.53 1.956-.857 3.083-.857 2.277 0 4.246 1.254 5.314 3.093l3.936-.008v-2.574a2.828 2.828 0 00-2.826-2.823h-9.507v3.17z"]').click()
    cy.contains('Log In').click() */
    })
    
    
 /*    it('windowpop up',() =>{
  const pop_url = "https://www.instagram.com/futurefuel_io/"
  cy.window().then(win =>{
      const stub=cy.stub(win,'open').as('windowopen')
      
  })
  cy.get(':nth-child(3) > .MuiTypography-root > .MuiSvgIcon-root').click()
  cy.get('@windowopen').should('be.calledWith',pop_url)
  cy.window().then(win =>{
      win.location.href = pop_url
      cy.contains('[placeholder="Search"]').type('khyati')
  }) */


 
  it('Handling new Browser Window', function () {
    const pop_url = "https://www.youtube.com/"
  cy.window().then(win => {
        const stub = cy.stub(win, 'open').as('open')
    }) 
    //cy.get(':nth-child(3) > .MuiTypography-root > .MuiSvgIcon-root').click()
   // cy.get('@open')
       //.should("be.called", pop_url)
      cy.window().then(win =>{
           win.location.href = pop_url
        cy.get('.TqC_a').type('khyati')
      })
        })
    })
   











 

 
