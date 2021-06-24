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

    it("Validates default homepage", () => {
        // Given - When - Then
        homePage.signUpButton().should("exist")                
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.logInButton().should("exist")
    })

    it("Validate  Sign Up opens", () => {
        // Given - When
        homePage.clickOnSignUp()      

        // Then
        cy.url().should(
            "be.equal",
            `${base_app_url}${signUpPage.endpoint}`
        )
    })

    it("Validate Log In opens", () => {
        // Given - When
        mainTopBar.clickOnLoginButton()

        // Then
        cy.url().should(
            "be.equal",
            `${base_app_url}${logInPage.endpoint}`
        )   
    })

    it("Validate All Feeds opens", () => {
        // Given - When
        mainTopBar.clickAllFeedsButton()

        // Then
        cy.url().should(
            "be.equal",
            `${base_app_url}${allFeedsPage.endpoint}`
        )   
    })

})


