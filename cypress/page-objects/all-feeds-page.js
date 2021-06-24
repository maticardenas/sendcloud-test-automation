/// <reference types="cypress" />

export class AllFeedsPage {

    endpoint = "feeds/"

    navigate() { cy.visit(`/${this.endpoint}`)}
    
    alertMessage() { return cy.get('.alert') }    

    titleLink(feedNumber){
        return cy.get(`tbody > :nth-child(${feedNumber}) > :nth-child(1) > a`)
    }

    clickOnTitleLink(feedNumber){
        this.titleLink(feedNumber).click()
    }
}