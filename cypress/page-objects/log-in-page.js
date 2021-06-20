

export class LogInPage {

    endpoint = "accounts/login/"

    usernameField() { return cy.get('#id_username') }

    passwordField() { return cy.get('#id_password') }

    loginButton() { return cy.get('.bs-component > .btn') }

}