describe("Saucedemo Login Tests", () => {
  it("TC001: Login with valid username & password", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("contain", "/inventory.html");
  });

  it("TC002: Login with valid username & wrong password", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("wrong_pass");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("contain", "do not match");
  });

  it("TC003: Login with empty fields", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("contain", "Username is required");
  });
});
