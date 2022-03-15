/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from "../../../pageObjects/BasePage";
import ValidateCheckboxes from "../../../pageObjects/ValidateCheckboxes";

const validateCheckboxes = new ValidateCheckboxes;
const basePage = new BasePage;
const brands = ["bmw", "benz", "honda"];

Given('Feature file is set up properly', function () {
    cy.log("Feature file is set up properly");
});

When('I open the LetsKodeIt website', function () {
    basePage.launchLetsKodeIt();
});

Then('All the checkboxes are unchecked within the checkbox tutorial', function () {
    validateCheckboxes.allElementsNotChecked(brands); 
});

When('I click all the checkboxes', function () {
    validateCheckboxes.checkAllElements(brands);
});

Then('all the checkboxes are checked within the checkbox tutorial', function () {
    validateCheckboxes.allElementsAreChecked(brands); 
});