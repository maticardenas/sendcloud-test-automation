/// <reference types="cypress" />

import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { MainTopBar } from "../page-objects/main-top-bar"
import { SignUpPage } from "../page-objects/sign-up-page"

const mainTopBar = new MainTopBar()
const signUpPage = new SignUpPage()
const allFeedsPage = new AllFeedsPage()
const base_app_url = Cypress.config("baseUrl")
const { shortPasswords } = require('../fixtures/short_passwords')

describe("Sign Up Page tests", () => {    

    beforeEach(() => { signUpPage.navigate() })

    it("Opening default Sign Up page", () => {
        signUpPage.usernameField().should("exist")
        signUpPage.passwordField().should("exist")                
        signUpPage.passwordConfirmationField().should("exist")         
        signUpPage.submitButton().should("exist")                       
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.logInButton().should("exist")
    })

    it("Positive user sign up", () => {
        var userNumber = Math.floor(Math.random() * 10000)
        var username = "test_user_" + userNumber
        var userpassword = "test_password"
        cy.signup(username, userpassword)

        cy.url().should(
            "be.equal",
            `${base_app_url}${allFeedsPage.endpoint}`
        )
        allFeedsPage.alertMessage().should(
            "have.text",
            "Great success! Enjoy :)"
        )
        mainTopBar.bookmarkedButton().should("exist")
        mainTopBar.newFeedButton().should("exist")
        mainTopBar.logOutButton().should("exist")
    })

    it("Sign up already existing user", () => {
        var userNumber = Math.floor(Math.random() * 100000)
        var username = "test_user_" + userNumber
        var userpassword = "test_password"
        cy.signup(username, userpassword)
        
        signUpPage.navigate()
        cy.signup(username, userpassword)

        signUpPage.errorFieldUser().should(
            "have.text",
            "A user with that username already exists."
        )
        signUpPage.errorHintIdUsername().should("exist")
    })

    it("Sign up empty fields", () => {
        signUpPage.submitButton().click()

        validateFieldIsRequired(signUpPage.errorFieldUser())
        validateFieldIsRequired(signUpPage.errorFieldPassword())
        validateFieldIsRequired(signUpPage.errorFieldPasswordConfirm())
    })
    
    it("Sign up with different passwords", () => {
        var userNumber = Math.floor(Math.random() * 100000)
        var username = "test_user_" + userNumber
        var userpassword = "test_password"
        cy.signup(username, userpassword)
        
        signUpPage.navigate()
        cy.signup(username, userpassword)

        signUpPage.errorAlreadyExistingUsername().should("exist")
        signUpPage.errorHintIdUsername().should("exist")
    })

    shortPasswords.forEach((shortPassword) => {
        it(`Sign up with short (${shortPassword.length} chars) password  `, () => {
            var userNumber = Math.floor(Math.random() * 100000)
            var username = "test_user_" + userNumber
            cy.signup(username, shortPassword)
        })
    })

    function validateFieldIsRequired(field) {
        field.should(
            "have.text",
            "This field is required."
        )
    }
})