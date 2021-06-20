/// <reference types="cypress" />

export class SpecificFeedPage {

    endpoint = "feeds/"

    navigate(feedId) { cy.visit(`/${this.endpoint}/${feedId}`)}
    
}