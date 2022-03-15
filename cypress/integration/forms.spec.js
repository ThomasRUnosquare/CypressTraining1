/// <reference types="cypress" />

describe("Forms test", () => {
    // Tests here
    it("can get to the form", () => {
        cy.visit("/");
        cy.get("form");
    });

    it("can fill the form", () =>{
        cy.get('input[id="name"]').type("UserName01").should("have.value", "UserName01");
        cy.get('input[id="email"]').type("UserName01@gmail.com").should("have.value", "UserName01@gmail.com");   
    });


    it("can submit the form", () => {
        cy.get("form").submit();
    });
})