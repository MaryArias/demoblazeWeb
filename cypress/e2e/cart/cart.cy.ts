import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../POMs/homePage";

Given("I open the application", () => {
  cy.visit("/");
});
When("Click in Laptops button", () => {
  cy.intercept("POST", Cypress.env("apiUrl") + "/bycat").as("filtered");
  homePage.buttonLaptos.click();
  cy.wait("@filtered");
});
When("Click in the first laptop", () => {
  homePage.firstCardLink.click().invoke("text").as("laptopName");
});
When('Click in "add to cart" button', () => {
  homePage.addToCard.click();
});
Then('I see alert "Product added"', () => {
  cy.on("window:alert", (text) => {
    expect(text).to.contains("Product added");
  });
});
Then('click in "cart" button', () => {
  homePage.cartButton.click();
});
Then("Check laptop is in cart", () => {
  cy.get("@laptopName").then((name: unknown) => {
    cy.contains(name as string);
  });
});
