/// <reference types="cypress" />

class ValidateMyIndex {

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

export default ValidateMyIndex