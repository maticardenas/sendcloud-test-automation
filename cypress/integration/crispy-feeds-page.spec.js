/// <reference types="cypress" />

import { NewFeedPage } from "../page-objects/new-feed-page"
import { MainTopBar } from "../page-objects/main-top-bar"
import { LogInPage } from "../page-objects/log-in-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { SpecificFeedPage } from "../page-objects/specific-feed-page"
import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { BookmarkedFeedsPage } from "../page-objects/bookmarked-feeds-page"
import { MyFeedsPage } from "../page-objects/my-feeds-page"
import { FeedsEntryPage } from "../page-objects/feeds-entry-page"

const mainTopBar = new MainTopBar()
const loginPage = new LogInPage()
const signUpPage = new SignUpPage()
const newFeedPage = new NewFeedPage()
const allFeedsPage = new AllFeedsPage()
const myFeedsPage = new MyFeedsPage()
const feedsEntryPage = new FeedsEntryPage()
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
        // Given - When - Then
        newFeedPage.feedUrlField().should("exist")
        newFeedPage.submitButton().should("exist")                   
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.newFeedButton().should("exist")
    })
   
    it("Submit empty feed", () => {        
        // Given - When
        newFeedPage.submitButton().click()

        // Then
        newFeedPage.errorFieldFeed().should(
            "have.text",
            "This field is required."
        )
    })

    it("My Feeds empty when user without feeds", () => {
        // Given - When
        myFeedsPage.navigate()

        // Then
        cy.contains("Nothing to see here. Move on!").should("exist")
    })

    context("New Feeds creation", () => {
        it("Positive submit feed 1", () => {
            // Given
            var feedUrl = "http://www.nu.nl/rss/Algemeen"

            // When
            newFeedPage.typeFeedUrlField(feedUrl)
            newFeedPage.clickOnSubmitButton()

            // Then
            cy.url().should("be.equal", `${base_app_url}${specificFeedPage.endpoint}1`)        
        })

        it("Positive submit feed 2", () => {
            // Given
            var feedUrl = "http://www.nu.nl/rss/Algemeen"

            // When
            newFeedPage.typeFeedUrlField(feedUrl)
            newFeedPage.clik

            // Then
            cy.url().should("be.equal", `${base_app_url}${specificFeedPage.endpoint}2`)
        })


        it("Validate All Feeds added", () => {
            // Given - When
            myFeedsPage.navigate()

            // Then
            cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
            cy.contains("https://feeds.feedburner.com/tweakers/mixed").should("exist")
        })
    })

    it("Validate All Feeds added", () => {
        // Given - When
        allFeedsPage.navigate()
        
        // Then
        cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
        cy.contains("https://feeds.feedburner.com/tweakers/mixed").should("exist")
    })

    it("Validate specific feed", () => {
        // Given - When
        specificFeedPage.navigate(1)

        // Then
        cy.contains("test_user_").should("exist")
        cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
        specificFeedPage.checkForUpdatesButton().should("exist")
        specificFeedPage.bookmarkButton().should("exist")
    })

    it("Validate Empty Bookmark Feeds page", () => {
        // Given - When
        bookmarkedFeedsPage.navigate()
        
        // Then
        cy.contains("Nothing to see here. Move on!").should("exist")        
    })

    it("Validate Bookmark feed", () => {
        // Given - When
        specificFeedPage.navigate(1)
        specificFeedPage.clickOnBookmarkButton()
        bookmarkedFeedsPage.navigate()

        // Then
        cy.contains("http://www.nu.nl/rss/Algemeen").should("exist")
    })

    it("Validate Feed Entry when Logged Out", () => {
        // Given - When
        mainTopBar.clickOnLogOutButton()
        allFeedsPage.navigate()
        allFeedsPage.clickOnTitleLink(1)
        specificFeedPage.clickOnTitleLink(1)

        // Then
        cy.contains("Sign in to comment").should("exist")
    })

    it("Validate Feed Entry when Logged In", () => {
        // Given - When
        allFeedsPage.navigate()
        allFeedsPage.clickOnTitleLink(1)
        specificFeedPage.clickOnTitleLink(1)

        // Then
        cy.contains("Sign in to comment").should("not.exist")
        feedsEntryPage.commentField().should("exist")
        feedsEntryPage.submitButton().should("exist")
    })

    it("Validate add comnent in Feed Entry", () => {
        // Given
        var test_number = Math.floor(Math.random() * 10000)
        
        // When
        allFeedsPage.navigate()
        allFeedsPage.clickOnTitleLink(1)
        specificFeedPage.clickOnTitleLink(1)
        feedsEntryPage.typeComment("Test comment number " + test_number)
        feedsEntryPage.submitComment()

        // Then        
        cy.contains(testUsername).should("exist")
        cy.contains("Test comment number " + test_number).should("exist")
    })
    
})