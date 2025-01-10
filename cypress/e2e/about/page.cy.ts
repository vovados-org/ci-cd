describe("About page", () => {
  beforeEach(() => {
    // Visit the about page before each test
    cy.visit("/about")
  })

  it("should display the header", () => {
    cy.get("h1").should("exist")
  })
})
