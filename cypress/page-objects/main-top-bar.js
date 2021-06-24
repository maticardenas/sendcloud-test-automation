
export class MainTopBar {

    logInButton(){ return cy.contains("Login") }

    logOutButton(){ return cy.contains("Logout") }

    allFeedsButton(){ return cy.contains("All Feeds") }

    myFeedsButton(){ return cy.contains("My Feeds") }

    crispySuccostashButton() { return cy.get('.navbar-brand') } 

    bookmarkedButton() { return cy.contains('Bookmarked') } 

    newFeedButton() { return cy.contains('New Feed') }    

    clickOnLoginButton() {
        this.logInButton().click()
    }

    clickOnLogOutButton() {
        this.logOutButton().click()
    }

    clickAllFeedsButton() {
        this.allFeedsButton().click()
    }

    clickMyFeedsButton(){
        this.myFeedsButton().click()
    }

    clickCrispySuccostashButton() {
        this.crispySuccostashButton().click()
    }

    clickBookmarkedButton() {
        this.bookmarkedButton().click()
    }

    clickNewFeedButton() {
        this.newFeedButton().click()
    }

}