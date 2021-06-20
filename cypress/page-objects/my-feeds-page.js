/// <reference types="cypress" />

export class MyFeedsPage {

    endpoint = "feeds/my/"

    navigate() { cy.visit(`/${this.endpoint}`)}
    
}