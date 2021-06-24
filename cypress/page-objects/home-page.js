/// <reference types="cypress" />

export class HomePage{

    endpoint = "/"

    navigate() {
        cy.visit(this.endpoint)
    }

    signUpButton() { return cy.get('.btn') }  
    
    clickOnSignUp() {
        this.signUpButton().click()
    }

}