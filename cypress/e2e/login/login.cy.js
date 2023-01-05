import {Given} from 'cypress-cucumber-preprocessor/steps';

Given('I open the application', ()=>{
    cy.visit('/');
})