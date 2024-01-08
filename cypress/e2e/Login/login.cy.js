import LoginActions from "../pageObjects/pageActions/loginActions"

describe("Login to app",()=>{
    
    it("Login to the app usign email and password",()=>{
        const loginActions = new LoginActions()
        loginActions.validateLoginForm()
        loginActions.login("mrcleng@gmail.com","$Cleng0206")
        loginActions.validateLogo()
    })
})
