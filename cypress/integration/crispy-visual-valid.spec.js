/// <reference types="cypress" />

import { LogInPage } from "../page-objects/log-in-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { HomePage } from "../page-objects/home-page"


const homePage = new HomePage()
const loginPage = new LogInPage()
const signUpPage = new SignUpPage()
const allFeedsPage = new AllFeedsPage()

describe("Visual Validation Tests", () => {
  
    beforeEach(() => {
        cy.eyesOpen({appName: 'Crispy-Succotash Visual Automation', batchName: 'Crispy-Succotash Visual Automation'})
    })

    afterEach(() => {
        cy.eyesClose()
    })

    it("Logged out navigation", () => {
        homePage.navigate()
        cy.eyesCheckWindow('Home Page')
        loginPage.navigate()
        cy.eyesCheckWindow('Log In Page')
        signUpPage.navigate()
        cy.eyesCheckWindow('SignUp Page')
        allFeedsPage.navigate()
        cy.eyesCheckWindow('All Feeds Page')
    })

})