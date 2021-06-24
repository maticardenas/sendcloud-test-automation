/// <reference types="cypress" />

export class NewFeedPage {

    endpoint = "feeds/new/"

    navigate() { cy.visit(`/${this.endpoint}`)}
    
    feedUrlField() { return cy.get('#id_feed_url') }

    submitButton() { return cy.get('#submit-id-submit') }

    errorFieldFeed() { return cy.get("#error_1_id_feed_url") }

    typeFeedUrlField(feedUrl) {
        this.feedUrlField().type(feedUrl)
    }

    clickOnSubmitButton() {
        this.submitButton().click()  
    }

}