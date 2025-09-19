describe("Saucedemo Checkout Tests", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
    cy.visit("https://www.saucedemo.com/inventory.html");
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
  });

  it("TC020: Checkout requires customer info", () => {
    cy.get("#continue").click();
    cy.get('[data-test="error"]').should("contain", "First Name is required");
  });

  it("TC021: Complete checkout process", () => {
    cy.get("#first-name").type("Malinda");
    cy.get("#last-name").type("Prabath");
    cy.get("#postal-code").type("12345");
    cy.get("#continue").click();
    cy.get(".summary_total_label").should("be.visible");
    cy.get("#finish").click();
    cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
  });
});
