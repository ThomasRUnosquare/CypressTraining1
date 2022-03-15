/// <reference types="cypress" />

class BasePage {
    launchApplication(page){
        cy.visit(page)
    //    cy.visit("/");
    }

    launchLetsKodeIt(){
        cy.visit("https://courses.letskodeit.com/practice")
    }
    logOutFromApplication(){
        cy.contains('Log Out').click()
    }
}

export default BasePage