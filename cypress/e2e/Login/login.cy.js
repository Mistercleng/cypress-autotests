import LoginActions from "../pageObjects/pageActions/loginActions"
/// <reference types="cypress" />


describe("Login to app",()=>{
    
    it("Login to the app usign email and password",()=>{
        const loginActions = new LoginActions()
        cy.visit("/auth/signin")
        cy.get(".form").should('be.visible')

        loginActions.login("mrcleng@gmail.com","$Cleng0206")
        // cy.get("#email").type("mrcleng@gmail.com")
        // cy.get("#password").type("$Cleng0206")
        // cy.get("button").click()
        cy.get("img").should("be.visible")
    })
})

/**
 * # ids
 * . class
 * [data-testid]
 * [name=""]
 * 
 */