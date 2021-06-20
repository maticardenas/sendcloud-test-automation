/// <reference types="cypress" />

export class HomePage{

    signUpButton(){ return cy.get('.btn') }

    navigate() {
        cy.visit("/")
    }

}