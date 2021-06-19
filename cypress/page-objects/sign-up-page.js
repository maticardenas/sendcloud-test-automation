/// <reference types="cypress" />

export class SignUpPage {

    usernameField() { return cy.get('#id_username') }

    passwordField() { return cy.get('#id_password1') }

    passwordConfirmationField() { return cy.get('#id_password2') }

    submitButton() { return cy.get('#submit-id-submit') }

}