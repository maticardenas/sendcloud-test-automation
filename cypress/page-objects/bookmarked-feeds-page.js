/// <reference types="cypress" />

export class BookmarkedFeedsPage {

    endpoint = "feeds/bookmarked/"

    navigate() { cy.visit(`/${this.endpoint}`)}

    bookmarkButton() { return cy.get('[href="/feeds/1/toggle-bookmark/"] > .glyphicon') }
    
    clickOnBookmarkButton() {
        this.bookmarkButton().click()
    }
}