/// <reference types="cypress" />

export class SignUpPage {

    endpoint = "accounts/register/"

    navigate() { cy.visit(`/${this.endpoint}`)}

    usernameField() { return cy.get('#id_username') }    

    passwordField() { return cy.get('#id_password1') }

    passwordConfirmationField() { return cy.get('#id_password2') }

    submitButton() { return cy.get('#submit-id-submit') }

    errorFieldUser() { return cy.get('#error_1_id_username > strong') }
    
    errorFieldPassword() {return cy.get('#error_1_id_password1 > strong') } 

    errorFieldPasswordConfirm() {return cy.get('#error_1_id_password2 > strong') } 

    errorHintIdUsername() { return cy.get('#hint_id_username') } 


    typeUsername(username) {
        this.usernameField().type(username)
    }

    typePassword(password) {
       this.passwordField().type(password)
    }

    typePasswordConfirmation(password) {
        this.passwordConfirmationField().type(password)
    }

    clickOnSubmit() {
        this.submitButton().click()
    }
}