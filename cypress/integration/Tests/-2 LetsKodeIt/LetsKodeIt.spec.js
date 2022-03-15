/// <reference types="cypress" />

import BasePage from "../../pageObjects/BasePage";
import LetsKodeitHomePage from "../../pageObjects/LetsKodeitHomePage";
import ValidateCheckboxes from "../../pageObjects/ValidateCheckboxes";


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
    });
});