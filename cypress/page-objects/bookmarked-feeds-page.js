/// <reference types="cypress" />

export class BookmarkedFeedsPage {

    endpoint = "feeds/bookmarked/"

    navigate(feedId) { cy.visit(`/${this.endpoint}`)}

    checkForUpdatesButton() { return cy.get('.text-right > .btn') }

    bookmarkButton() { return cy.get('[href="/feeds/1/toggle-bookmark/"] > .glyphicon') }
    
}