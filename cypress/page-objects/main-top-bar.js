

export class MainTopBar {

    logInButton(){ return cy.get('.navbar-right > li > a') }

    allFeedsButton(){ return cy.get(':nth-child(1) > li > a') }

    crispySuccostashButton() { return cy.get('.navbar-brand') } 

    clickLogIn() {
        this.logInButton().click()
    }

    clickAllFeeds() {
        this.allFeedsButton().click()
    }

    clickCrispySuccostash() {
        this.crispySuccostashButton().click()
    }

}