/// <reference types="cypress"/>

const locator = require("../locators/login.json")

class LoginPageEments {

    loginForm(){
        return cy.get(locator.loginForm)
    }

    userEmail(){
        return cy.get(locator.userEmail)
    }

    userPassword(){
        return cy.get(locator.userPassword)
    }

    loginButton(){
        return cy.get(locator.loginButton)
    }
}

export default LoginPageEments;