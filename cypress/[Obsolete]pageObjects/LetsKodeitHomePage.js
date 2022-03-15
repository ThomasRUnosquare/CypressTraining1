/// <reference types="cypress" />

class LetsKodeitHomePage {

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
    validateCheckboxes()
    {
        // access the support classes of cy
        const brands = ["bmw", "benz", "honda"];
        cy.get('[id="bmwcheck"]').click()
      this.allElementsNotChecked(brands)
    }
}

export default LetsKodeitHomePage