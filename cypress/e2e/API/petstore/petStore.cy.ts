import { Then, When } from "cypress10-cucumber-preprocessor/steps";
import { pet } from "../../../interfaces/pet";

When(
  'the user sends a post transaction request using {string}',
  (body: string) => {
    cy.fixture(body).then((a) => {
      cy.request("POST", "https://petstore.swagger.io/v2/pet", a).as(
        "petCreated"
      );
    });
  }
);

Then(
  "I should get a {string} response and the post response should match {string}",
  (status: string, responseJson: string) => {
    cy.get<Cypress.Response<pet>>("@petCreated").then((req) => {
      console.log(req);
      expect(req.status).to.be.eq(+status);
      cy.fixture(responseJson).then((json) => {
        expect(req.body.name).to.be.equal(json.name);
        expect(req.body.photoUrls[0]).to.be.equal(json.photoUrls[0]);
        expect(req.body.tags[0].id).to.be.equal(json.tags[0].id);
        expect(req.body.tags[0].name).to.be.equal(json.tags[0].name);
        expect(req.body.status).to.be.equal(json.status);
      });
    });
  }
);

When(
  'the user sends a get transaction request using {string}',
  (petId: string) => {
    cy.request("GET", `https://petstore.swagger.io/v2/pet/${petId}`).as("pet");
  }
);

Then(
  "I should get a {string} response and the get response should match {string}",
  (status: string, responseJson: string) => {
    cy.get<Cypress.Response<pet>>("@pet").then((req) => {
      console.log(req);
      expect(req.status).to.be.eq(+status);
      cy.fixture(responseJson).then((json) => {
        expect(req.body.name).to.be.equal(json.name);
        expect(req.body.photoUrls[0]).to.be.equal(json.photoUrls[0]);
        expect(req.body.tags[0].id).to.be.equal(json.tags[0].id);
        expect(req.body.tags[0].name).to.be.equal(json.tags[0].name);
        expect(req.body.status).to.be.equal(json.status);
      });
    });
  }
);

When(
    'the user sends a put transaction request using {string}',
    (body: string) => {
      cy.fixture(body).then((a) => {
        cy.request("PUT", "https://petstore.swagger.io/v2/pet", a).as(
          "petModify"
        );
      });
    }
  );
  
  Then(
    "I should get a {string} response and the put response should match {string}",
    (status: string, responseJson: string) => {
      cy.get<Cypress.Response<pet>>("@petModify").then((req) => {
        console.log(req);
        expect(req.status).to.be.eq(+status);
        cy.fixture(responseJson).then((json) => {
          expect(req.body.name).to.be.equal(json.name);
          expect(req.body.photoUrls[0]).to.be.equal(json.photoUrls[0]);
          expect(req.body.tags[0].id).to.be.equal(json.tags[0].id);
          expect(req.body.tags[0].name).to.be.equal(json.tags[0].name);
          expect(req.body.status).to.be.equal(json.status);
        });
      });
    }
  );


