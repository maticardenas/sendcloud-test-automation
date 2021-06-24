/// <reference types="cypress" />

export class SpecificFeedPage {

    endpoint = "feeds/"

    navigate(feedId) { cy.visit(`/${this.endpoint}${feedId}`)}

    checkForUpdatesButton() { return cy.get('.text-right > .btn') }

    bookmarkButton() { return cy.get('[href="/feeds/1/toggle-bookmark/"] > .glyphicon') }

    addedByField() { return cy.get('.dl-horizontal > :nth-child(2)') }

    feedUrlField() { return cy.get('.dl-horizontal > :nth-child(4)') }

    titleLink(feedNumber){
        return cy.get(`tbody > :nth-child(${feedNumber}) > :nth-child(1) > a`)
    }
    
}