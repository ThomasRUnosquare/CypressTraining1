/// <reference types="cypress" />

import BasePage from "../../../[Obsolete]pageObjects/BasePage";
import LetsKodeitHomePage from "../../../[Obsolete]pageObjects/LetsKodeitHomePage";
import ValidateCheckboxes from "../../../[Obsolete]pageObjects/ValidateCheckboxes";

const letsKodeItHome = new LetsKodeitHomePage;
const validateCheckboxes = new ValidateCheckboxes;
const basePage = new BasePage;


describe("As a user I want to interact with the Lets kode it example", ()=> {
    it("The LetsKodeIt homepage loads and all body contents are displayed", ()=> {
        basePage.launchLetsKodeIt();
    }),
    it("All the checkboxes are unchecked within the checkbox example", ()=> {
        const brands = ["bmw", "benz", "honda"];
        validateCheckboxes.allElementsNotChecked(brands);    
    }),
    it("All the checkboxes are checked within the checkbox example", ()=> {
        const brands = ["bmw", "benz", "honda"];
        validateCheckboxes.checkAllElements(brands);
        validateCheckboxes.allElementsAreChecked(brands);  
        cy.wait(5000);
    });
});

describe("As a user I want to interact with the Index.html checkbox examples", ()=> {
    it("The Index.html webpage loads and all body contents are displayed", ()=> {
        basePage.launchApplication();
    }),
    it("All the checkboxes are unchecked within the checkbox example", ()=> {
        const vehicles = ["bike", "car", "bus", "boat"];
        validateCheckboxes.allElementsNotChecked(vehicles);    
    }),
    it("All the checkboxes are checked within the checkbox example", ()=> {
        const vehicles = ["bike", "car", "bus", "boat"];
        validateCheckboxes.checkAllElements(vehicles);
        validateCheckboxes.allElementsAreChecked(vehicles);  
    });
});

