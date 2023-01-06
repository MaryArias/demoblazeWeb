@Login @UI
Feature: As a QA, I want to login demoblaze app and search for desired product

    Background: login
        Given I open the application

    Scenario: Create the user
        When Click in Sign up
        And I create user 
        Then I see alert "Sign up successful"

    Scenario: Verify if user is logged in successfully
        When Click in logIn
        And I login application using username as "MaryArias" and password as "Marianella94"
        Then The header updates and shows log in and welcome "MaryArias" buttons


    