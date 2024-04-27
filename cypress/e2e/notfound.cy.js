describe("404 not found", () => {
  it("should show the 404 page from navigation to a random subpage", () => {
    cy.on("uncaught:exception", (e, runnable) => {
      console.log("error", e);
      console.log("runnable", runnable);
      if (e.message.includes("NEXT_NOT_FOUND")) {
        return false;
      }
    });
    cy.visit("/random", { failOnStatusCode: false });

    cy.url().should("include", "/random");

    cy.get("h2").contains("Uh oh! 404 Page not found");
  });

  it("should navigate to the home page from the 404 using the return home button", () => {
    cy.on("uncaught:exception", (e, runnable) => {
      console.log("error", e);
      console.log("runnable", runnable);
      if (e.message.includes("NEXT_NOT_FOUND")) {
        return false;
      }
    });
    cy.visit("/random", { failOnStatusCode: false });

    cy.get('[data-testid="goHome"]').click();

    cy.url().should("eq", "http://localhost:3000/");

    // The new page should contain an h1 with "Carolina Calligraphy"
    cy.get("h1").contains("Carolina Calligraphy");
  });

  it("should navigate to the home page from the 404 using the burger menu", () => {
    cy.on("uncaught:exception", (e, runnable) => {
      console.log("error", e);
      console.log("runnable", runnable);
      if (e.message.includes("NEXT_NOT_FOUND")) {
        return false;
      }
    });
    cy.visit("/random", { failOnStatusCode: false });

    cy.get(".bm-burger-button").click();

    cy.get('a[href*="/"]').first().click();

    cy.url().should("eq", "http://localhost:3000/");

    // The new page should contain an h1 with "Carolina Calligraphy"
    cy.get("h1").contains("Carolina Calligraphy");
  });
});
