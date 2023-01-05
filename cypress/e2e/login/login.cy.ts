import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import homePage from "../../POMs/homePage";

Given("I open the application", () => {
  cy.visit("/");
});
When("Click in Sign up", () => {
  homePage.singUp.click();
});
When("I create user", () => {
  homePage.username
    .should("not.be.disabled")
    .type(faker.internet.userName(), { force: true });
  homePage.password.type(faker.internet.password(), { force: true });
});
Then('I see alert "Sign up successful"', () => {
  homePage.modalSignUp.click();
  cy.on("window:alert", (text) => {
    expect(text).to.contains("Sign up successful.");
  });
});
When('Click in "logIn"', () => {
  homePage.logIn.click();
});
When(
  `I login application using username as {string} and password as {string}`,
  (user: string, pass: string) => {
    homePage.loginUserName.type(user, { force: true });
    homePage.loginPassword.type(pass, { force: true });
    homePage.modalLogIn.click({ force: true });
  }
);
Then(
  "The header updates and shows log in and welcome {string} buttons",
  (user: string) => {
    homePage.welcome.should("exist").and("contain.text", user);
    homePage.logOut.should("exist");
  }
);

