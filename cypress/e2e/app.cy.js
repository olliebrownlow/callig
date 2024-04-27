describe("Navigation", () => {
  it("should navigate to the contact page from a navlink", () => {
    // Start from the index page
    cy.visit("/");

    // Find a link with an href attribute containing "contact" and click it
    cy.get('a[href*="contact"]').last().click();

    // The new url should include "/contact"
    cy.url().should("include", "/contact");

    // The new page should contain an h1 with "Contact"
    cy.get("h1").contains("Contact Details");
  });

  it("should navigate to the contact page from the burger menu", () => {
    // Start from the index page
    cy.visit("/");

    cy.get(".bm-burger-button").click();

    // Find a link with an href attribute containing "contact" and click it
    cy.get('a[href*="contact"]').first().click();

    // The new url should include "/contact"
    cy.url().should("include", "/contact");

    // The new page should contain an h1 with "Contact"
    cy.get("h1").contains("Contact Details");
  });
});
