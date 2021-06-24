/// <reference types="cypress" />

export class FeedsEntryPage {

    endpoint = "/entry/"

    navigate(feedEntryId) { cy.visit(`/feeds/${feedEntryId}${this.endpoint}`)}

    commentField() { return cy.get('.CodeMirror') }

    commentAdded(commentNumber) { return cy.get(`#comment-${commentNumber}`) } 

    submitButton() { return cy.get('#submit-id-submit') }
    
    alertMessage() { return cy.get('.alert') }

    titleLink(feedNumber){
        return cy.get(`tbody > :nth-child(${feedNumber}) > :nth-child(1) > a`)
    }

    submitComment() {
        this.submitButton().click()
    }

    typeComment(comment) {
        this.commentField().type(comment)
    }

}