/// <reference types="cypress" />

class LetsKodeitHomePage {

    selectRadioButton(value)
    {
        cy.get('[type="radio"]').check(value)
        return this
    }

    selectCheckBox(value)
    {
        cy.get('[type="checkbox"]').check(value)
        return this
    }
    getTextBox() { return cy.get('') }
    getCheckbox() {
        var returnVal// = String(cy.get('[type="checkbox"]'))
         return returnVal; 
    }

}

export default LetsKodeitHomePage