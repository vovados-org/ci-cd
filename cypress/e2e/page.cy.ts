describe("Home Page", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("/")
  })

  it("should display the show result button", () => {
    // Check if button exists and contains correct text
    cy.get('[data-testid="show-result"]').should("exist").and("have.text", "Show result")
  })

  it("should be able to click the button", () => {
    // Check if button is clickable
    cy.get('[data-testid="show-result"]').click()
  })
})
