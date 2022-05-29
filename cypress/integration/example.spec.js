// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("꼭 필요한 테스트", { tags: "mandatory" }, () => {
    cy.visit("http://localhost:3000/landing")
    cy.contains("h1", "You did it!")
    cy.intercept("GET", "/dev/getLambda", {
      hostname: "https://zkhru142hl.execute-api.ap-northeast-2.amazonaws.com",
      body: "HELLO FROM CYPRESS",
    }).as("getLambda")
    cy.wait("@getLambda")
    // .its('response.body')
    // .should('equal', 'HELLO FROM CYPRESS');
    cy.get("#app > :nth-child(4)").should("have.text", "GGGG")
  })

  it("필요 없는 테스트", () => {
    cy.visit("http://localhost:3000/landing")
    cy.contains("h1", "You did it!")
    cy.intercept("GET", "/dev/getLambda", {
      hostname: "https://zkhru142hl.execute-api.ap-northeast-2.amazonaws.com",
      body: "HELLO FROM CYPRESS",
    }).as("getLambda")
    cy.wait("@getLambda")
    // .its('response.body')
    // .should('equal', 'HELLO FROM CYPRESS');
    cy.get("#app > :nth-child(4)").should("have.text", "GGGG")
  })
})
