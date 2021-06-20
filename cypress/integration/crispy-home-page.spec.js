/// <reference types="cypress" />

import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { HomePage } from "../page-objects/home-page"
import { LogInPage } from "../page-objects/log-in-page"
import { MainTopBar } from "../page-objects/main-top-bar"
import { SignUpPage } from "../page-objects/sign-up-page"

const homePage = new HomePage()
const mainTopBar = new MainTopBar()
const signUpPage = new SignUpPage()
const logInPage = new LogInPage()
const allFeedsPage = new AllFeedsPage()
const base_app_url = Cypress.config("baseUrl")

describe("Home page smoke tests", () => {    

    beforeEach(() => { homePage.navigate() })

    it("validates default homepage", () => {
        homePage.signUpButton().should("exist")                
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.logInButton().should("exist")
    })

    it("validate click sign up opens", () => {
        homePage.signUpButton().click()       
        cy.url().should(
            "be.equal",
            `${base_app_url}${signUpPage.endpoint}`
        )
    })

    it("validate log in opens", () => {
        mainTopBar.logInButton().click()  
        cy.url().should(
            "be.equal",
            `${base_app_url}${logInPage.endpoint}`
        )   
    })

    it("validate all feeds opens", () => {
        mainTopBar.allFeedsButton().click()
        cy.url().should(
            "be.equal",
            `${base_app_url}${allFeedsPage.endpoint}`
        )   
    })

})

