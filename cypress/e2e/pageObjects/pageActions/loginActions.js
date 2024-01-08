import LoginPageEments  from "../pageElement/LoginPageEments";

class LoginActions{

    constructor(){
        this.loginelement = new LoginPageEments()
    }

    validateLoginForm(){
        this.loginelement.loginForm().should('be.visible')
    }

    login(email, password){
        cy.visit("/auth/signin")
        this.loginelement.userEmail().type(email)
        this.loginelement.userPassword().type(password)
        this.loginelement.loginButton().click()
    }

    validateLogo(){
        this.loginelement.logo().should('be.visible')
    }
} 

export default LoginActions;