/// <reference types="cypress" />

export class AllFeedsPage {

    endpoint = "feeds/"
    
    alertMessage() { return cy.get('.alert') }

}