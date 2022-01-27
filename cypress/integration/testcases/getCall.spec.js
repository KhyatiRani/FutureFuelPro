/// <reference types="cypress" />
import roundup from '../pageObject/roundup'
///<reference types = "Cypress-iframe"/>
let data = require("../../testData.json")
require('cypress-xpath')
const or = require("../../locators.json")
import 'cypress-iframe';
const roundupPage = new roundup()
describe('Verify get Request', function () {
    // Cypress.config('baseUrl', 'https://nightly.futurefuel.io')
    it.only('Validate get request', () => {
        //https://github.com/bahmutov/cy-api
        cy.api({
            url: '/login'
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })

    })
    it.only('POST-create', () => {
        const item = { 'email': 'abc@gmail.com', 'password': 'FuelF@rFuture123' }
        //const header = {"Content-Type": "application/json"}
        //cy.request('POST','https://api.nightly.futurefuel.io/api/1/auth/login', item,header)
        cy.api({
            method: 'POST',
            url: 'https://api.nightly.futurefuel.io/api/1/auth/login',

            // baseUrl is prepend to URL
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                email: 'abc@gmail.com',
                password: 'FuelF@rFuture123',
            },
            headers: {
                'Content-Type': 'application/json'
            },

        }).its('body')
            .its('data')
            .should('include', {})
    })



    it('Validate get request', () => {
        cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/auth/login'
            , (req) => {
                req.body = {
                    email: 'abc@gmail.com',
                    password: 'FuelF@rFuture123',
                }
                req.headers['Content-Type'] = 'application/json'
            }).as('login')


        cy.visit('/')
        cy.get('[name="email"]').clear().type('abc@gmail.com')
        cy.get('[name="password"]').clear().type('FuelF@rFuture123')
        cy.get('[data-testid="next-btn-login"] > .MuiButton-label').click()

        //cy.wait('@login')
        cy.wait('@login').then((interception) => {
            cy.log(interception.id)
            cy.log(interception.state)
            cy.log('status code is: ' + interception.response.statusCode)
            cy.log('response body is: ' + interception.response.body)

            expect(interception.response.statusCode).to.eq(200)
        })
    })




    /*  it('Validate get request', () => {
         cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/auth/login'
             , { fixture: 'loginData.json' }).as('login')


         cy.visit('/')
         cy.get('[name="email"]').clear().type('abc@gmail.com')
         cy.get('[name="password"]').clear().type('FuelF@rFuture123')
         cy.get('[data-testid="next-btn-login"] > .MuiButton-label').click()

         //cy.wait('@login')
         cy.wait('@login').then((interception) => {
             cy.log(interception.id)
             cy.log(interception.state)
             cy.log('status code is: ' + interception.response.statusCode)
             cy.log('response body is: ' + interception.response.body)

             expect(interception.response.statusCode).to.eq(200)
         })


         it('Login the page', () => {
             cy.login(data.loginUserName, data.loginPassword)
         })




         it('visits to  the "Round Up" page', () => {
             roundupPage.visitToRoundUpPage()
         })



         it('select Bank And Enter Credentials', () => {
             cy.intercept('POST', 'https://sandbox.plaid.com/link/item/create',
                 {

                 }).as('create')



             cy.iframe('#plaid-link-iframe-1').find('#aut-continue-button > span').should('be.visible').click()
             cy.iframe('#plaid-link-iframe-1').contains('Citibank Online').should('be.visible').click()
             cy.iframe('#plaid-link-iframe-1').find('#username').should('be.visible').clear().type('user_custom')
             cy.iframe('#plaid-link-iframe-1').find('#password').should('be.visible').clear().type('{ "seed": "some seed for user 2" }', { parseSpecialCharSequences: false })
             cy.iframe('#plaid-link-iframe-1').find('#aut-submit-button > span').should('be.visible').click()
             // cy.iframe('#plaid-link-iframe-1').contains('Continue').should('be.visible').click()


             cy.wait('@create').then((interception) => {
                 cy.log(interception.id)
                 cy.log(interception.state)
                 cy.log('status code is: ' + interception.response.statusCode)
                 cy.log('response body is: ' + interception.response.body)

                 expect(interception.response.statusCode).to.eq(200)
             })

         })
         it('Rollup functionality startup', () => {
             cy.get('[data-testid="nav-menu__toggle"] > .MuiGrid-root > .MuiSvgIcon-root').click()
             cy.get('[data-testid="navLinkRollup"] > .MuiBox-root > .MuiTypography-root').click()
             cy.get('[style=\"border-bottom: 1px solid rgb(220, 228, 239); padding: 26px 12px 26px 38px;\"] > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
             cy.xpath('(//*[@class="MuiButton-label"])[3]').click()
             cy.get('[data-testid="ac__expand-icon"]').click()

             cy.get('#downshift-0-item-1').click()
         })


         it('Rollup functionality', () => {
             cy.intercept('GET', 'https://api.nightly.futurefuel.io/api/1/users/products').as('rollup')



             // cy.get('[data-testid="next-btn"] > .MuiButton-label').click()
             cy.xpath('(//*[@name="name"])').type('test')
             cy.xpath('(//*[@name="balance"])').type('100,000')
             cy.xpath('(//*[@name="monthly_payment"])').type('500')
             cy.xpath('(//*[@name="interest_rate"])').type('2')
             cy.get('[data-testid="next-btn"] > .MuiButton-label').click()


             cy.wait('@rollup').then((interception) => {
                 cy.log(interception.id)
                 cy.log(interception.state)
                 cy.log('status code is: ' + interception.response.statusCode)
                 cy.log('response body is: ' + interception.response.body)


                 expect(interception.response.statusCode).to.eq(200)

             }) */
})


