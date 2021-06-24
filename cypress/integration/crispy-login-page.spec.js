/// <reference types="cypress" />

import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { MainTopBar } from "../page-objects/main-top-bar"
import { LogInPage } from "../page-objects/log-in-page"
import { SignUpPage } from "../page-objects/sign-up-page"

const mainTopBar = new MainTopBar()
const loginPage = new LogInPage()
const signUpPage = new SignUpPage()
const allFeedsPage = new AllFeedsPage()
const base_app_url = Cypress.config("baseUrl")

describe("Log In Page Tests", () => {
    let testUsername

    before(() => { 
        var userNumber = Math.floor(Math.random() * 10000)
        var username = "test_user_" + userNumber
        var userpassword = "test_password"
        signUpPage.navigate()
        cy.signup(username, userpassword)
        testUsername = username
        mainTopBar.logOutButton().click()        
    })

    beforeEach(() => { loginPage.navigate() })

    it("Opening default Log In page", () => {
        // Given - When - Then
        loginPage.usernameField().should("exist")
        loginPage.passwordField().should("exist")                    
        loginPage.loginButton().should("exist")                       
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.logInButton().should("exist")
    })

    it("Positive user log in", () => {
        // Given - When
        cy.login(testUsername, "test_password")

        // Then
        cy.url().should(
            "be.equal",
            `${base_app_url}${allFeedsPage.endpoint}`
        )
        mainTopBar.bookmarkedButton().should("exist")
        mainTopBar.newFeedButton().should("exist")
        mainTopBar.logOutButton().should("exist")
    })
    
})