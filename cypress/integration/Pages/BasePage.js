/// <reference types="cypress" />

/// BasePage contains all reusable methods to be passed throughout the application
class BasePage {
    launchApplication(url){
        cy.visit(url)
    }

    allElementsNotChecked([...mArray])
    {
        for (let i = 0; i < mArray.length; i++) {
            cy.get('[type="checkbox"]').eq(i).should("not.be.checked");
            cy.log("Checked:" + mArray[i]);
        }      
    }

    allElementsAreChecked([...mArray])
    {
        for (let i = 0; i < mArray.length; i++) {
            cy.get('[type="checkbox"]').eq(i).should("be.checked");
            cy.log("Checked:" + mArray[i]);
        }
    }

    checkAllElements([...mArray])
    {
        for (let i = 0; i < mArray.length; i++) {
            cy.get('[type="checkbox"]').eq(i).click()
        }
    }
}

export default BasePage