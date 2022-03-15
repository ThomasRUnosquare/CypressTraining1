/// <reference types="cypress" />

import BasePage from "../../Pages/BasePage";
import LetsKodeitHomePage from "../../Pages/PracticePages/LetsKodeitHomePage";

const letsKodeItHome = new LetsKodeitHomePage;
const basePage = new BasePage;



describe("As a user I want to interact with the Lets kode it example", ()=> {
    before(function() {
        cy.fixture('urls.json').then(function (urldata)
        {
            this.urldata = urldata
        })
    });

    it("The LetsKodeIt homepage loads and all body contents are displayed", function () {
        let url = this.urldata.kodeit;
        basePage.launchApplication(url);
    }),

    it("As a user I want to select all the radio buttons", function () {
        letsKodeItHome.selectRadioButton("bmw")
    }),

    it("All the checkboxes are unchecked within the checkbox example", function (){
        const brands = ["bmw", "benz", "honda"];
        basePage.allElementsNotChecked(brands);  
    }),

    it("As a user I select each checkbox individually for each brand", function (){
        letsKodeItHome.selectCheckBox("bmw");
        letsKodeItHome.selectCheckBox("benz");
        letsKodeItHome.selectCheckBox("honda");
    })
});
