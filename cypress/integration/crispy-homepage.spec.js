/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { MainTopBar } from "../page-objects/main-top-bar"

describe("", () => {
    const homePage = new HomePage()
    const mainTopBar = new MainTopBar()

    beforeEach(() => { homePage.navigate() })

    it("check default homepage", () => {
        homePage.signUpButton().should("exist")                
        
        mainTopBar.crispySuccostashButton().should("exist")
        mainTopBar.allFeedsButton().should("exist")
        mainTopBar.logInButton().should("exist")
    })


})


