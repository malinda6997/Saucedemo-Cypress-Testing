describe("Saucedemo Inventory Tests", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
    cy.visit("https://www.saucedemo.com/inventory.html");
  });

  it("TC007: Products list is visible after login", () => {
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });

  it("TC008: Product titles and prices are displayed", () => {
    cy.get(".inventory_item").each(($el) => {
      cy.wrap($el).find(".inventory_item_name").should("be.visible");
      cy.wrap($el).find(".inventory_item_price").should("be.visible");
    });
  });

  it("TC009: Sort products by price (low to high)", () => {
    cy.get(".product_sort_container").select("lohi");
    cy.get(".inventory_item_price").then((prices) => {
      const priceValues = [...prices].map((p) =>
        parseFloat(p.innerText.replace("$", ""))
      );
      const sorted = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sorted);
    });
  });
});
