/// <reference types="cypress" />

import { NewFeedPage } from "../page-objects/new-feed-page"
import { MainTopBar } from "../page-objects/main-top-bar"
import { LogInPage } from "../page-objects/log-in-page"
import { SignUpPage } from "../page-objects/sign-up-page"
import { SpecificFeedPage } from "../page-objects/specific-feed-page"
import { AllFeedsPage } from "../page-objects/all-feeds-page"
import { BookmarkedFeedsPage } from "../page-objects/bookmarked-feeds-page"
import { MyFeedsPage } from "../page-objects/my-feeds-page"
import { HomePage } from "../page-objects/home-page"


const mainTopBar = new MainTopBar()
const homePage = new HomePage()
const loginPage = new LogInPage()
const signUpPage = new SignUpPage()
const newFeedPage = new NewFeedPage()
const allFeedsPage = new AllFeedsPage()
const myFeedsPage = new MyFeedsPage()
const bookmarkedFeedsPage = new BookmarkedFeedsPage()
const specificFeedPage = new SpecificFeedPage()
const base_app_url = Cypress.config("baseUrl")

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