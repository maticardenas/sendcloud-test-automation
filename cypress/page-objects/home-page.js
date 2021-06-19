/// <reference types="cypress" />
export class HomePage{

    signUpButton(){ return cy.get('.btn') }

    logInButton(){ return cy.get('.navbar-right > li > a') }

    allFeedsButton(){ return cy.get(':nth-child(1) > li > a') }

    crispySuccostashButton() { return cy.get('.navbar-brand') } 

    navigate() {
        cy.visit("http://localhost:8000/")
    }

    clickSignUp() {
        this.signUpButton().click()
    }

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