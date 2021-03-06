

export class LogInPage {

    endpoint = "accounts/login/"

    navigate() { cy.visit(`/${this.endpoint}`)}

    usernameField() { return cy.get('#id_username') }

    passwordField() { return cy.get('#id_password') }

    loginButton() { return cy.get('.bs-component > .btn') }

    typeUsername(username) {
         this.usernameField().type(username)
    }

    typePassword(password) {
        this.passwordField().type(password)
    }

    clikOnLogin() {
        this.loginButton().click()
    }

}