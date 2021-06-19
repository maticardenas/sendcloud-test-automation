/// <reference types="cypress" />

export class SignUpPage {

    endpoint = "accounts/register/"

    usernameField() { return cy.get('#id_username') }

    passwordField() { return cy.get('#id_password1') }

    passwordConfirmationField() { return cy.get('#id_password2') }

    submitButton() { return cy.get('#submit-id-submit') }

}