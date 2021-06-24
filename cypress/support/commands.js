// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LogInPage } from "../page-objects/log-in-page"
import { SignUpPage } from "../page-objects/sign-up-page"

const signUpPage = new SignUpPage()
const logInPage = new LogInPage()

Cypress.Commands.add("signup", (username, password) => {
    signUpPage.typeUsername(username)
    signUpPage.typePassword(password)
    signUpPage.typePasswordConfirmation(password)
    signUpPage.clickOnSubmit()
})

Cypress.Commands.add("login", (username, password) => {
    logInPage.typeUsername(username)
    logInPage.typePassword(password)
    logInPage.clikOnLogin()
})
