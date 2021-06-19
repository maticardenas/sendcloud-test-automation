/// <reference types="cypress" />

export class HomePage{

    home_page_url = Cypress.env("base_app_url")

    signUpButton(){ return cy.get('.btn') }

    navigate() {
        cy.visit(this.home_page_url)
    }

}