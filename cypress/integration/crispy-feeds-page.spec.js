/// <reference types="cypress" />

import { NewFeedPage } from "../page-objects/new-feed-page"
import { MainTopBar } from "../page-objects/main-top-bar"
import { LogInPage } from "../page-objects/log-in-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { SpecificFeedPage } from "../page-objects/specific-feed-page"
import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { BookmarkedFeedsPage } from "../page-objects/bookmarked-feeds-page"

const mainTopBar = new MainTopBar()
const loginPage = new LogInPage()
const signUpPage = new SignUpPage()
const newFeedPage = new NewFeedPage()
const allFeedsPage = new AllFeedsPage()
const bookmarkedFeedsPage = new BookmarkedFeedsPage()
const specificFeedPage = new SpecificFeedPage()
const base_app_url = Cypress.config("baseUrl")

describe("Feed Tests", () => {

    let testUsername
    
    before(() => { 
        // Sign Up New User
        var userNumber = Math.floor(Math.random() * 10000)
        var username = "test_user_" + userNumber
        var userpassword = "test_password"
        signUpPage.navigate()
        cy.signup(username, userpassword)  
        testUsername = username      
    })

    beforeEach(() => {
        newFeedPage.navigate()
        
        cy.url().then(urlString => {
            if(urlString.includes(loginPage.endpoint))
                cy.login(testUsername, "test_password")        
        })
    })

    it("Opening default New Feed page", () => {
        newFeedPage.feedUrlField().should("exist")
        newFeedPage.submitButton().should("exist")                   
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.newFeedButton().should("exist")
    })
   
    it.skip("Submit empty feed", () => {        
        newFeedPage.submitButton().click()

        newFeedPage.errorFieldFeed().should(
            "have.text",
            "This field is required."
        )
    })

    it.skip("Positive submit feed 1", () => {
        var feedUrl = "http://www.nu.nl/rss/Algemeen"
        newFeedPage.feedUrlField().type(feedUrl)
        newFeedPage.submitButton().click()

        cy.url().should("be.equal", `${base_app_url}${specificFeedPage.endpoint}1`)        
    })

    it.skip("Positive submit feed 2", () => {
        var feedUrl = "http://www.nu.nl/rss/Algemeen"
        newFeedPage.feedUrlField().type(feedUrl)
        newFeedPage.submitButton().click()

        cy.url().should("be.equal", `${base_app_url}${specificFeedPage.endpoint}2`)
    })

    it("Validate All Feeds added", () => {
        allFeedsPage.navigate()
        
        cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
        cy.contains("https://feeds.feedburner.com/tweakers/mixed").should("exist")
    })

    it("Validate specific feed", () => {
        specificFeedPage.navigate(1)

        cy.contains("test_user_").should("exist")
        cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
        specificFeedPage.checkForUpdatesButton().should("exist")
        specificFeedPage.bookmarkButton().should("exist")
    })

    it("Validate Empty Bookmark Feeds page", () => {
        bookmarkedFeedsPage.navigate()
        
        cy.contains("Nothing to see here. Move on!").should("exist")        
    })

    it("Validate Bookmark feed", () => {
        specificFeedPage.navigate(1)

        specificFeedPage.bookmarkButton().click()
        bookmarkedFeedsPage.navigate()
        cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
    })
    
})