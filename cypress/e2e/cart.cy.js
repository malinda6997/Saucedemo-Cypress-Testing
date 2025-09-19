describe("Saucedemo Cart Tests", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
    cy.visit("https://www.saucedemo.com/inventory.html");
  });

  it("TC013: Add single product to cart", () => {
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("TC014: Remove product from cart (inventory page)", () => {
    cy.get(".btn_inventory").first().click();
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("TC015: View cart and verify items", () => {
    cy.get(".btn_inventory").eq(0).click();
    cy.get(".btn_inventory").eq(1).click();
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 2);
  });
});
