@Login @UI
Feature:
    As a QA, I want to login demoblaze app and search for desired product

    Background: login
        Given I open the application

    Scenario Outline: Creat the user
        When Click in Sing up
        And I creat user name as <Username> and password as <Password>
        Then I see alert "Sign up successful"
    and click in "ok"

    Scenario Outline: Verify if user is logged in successfully
        When I login application using username as <Username> and password as <Password>
        Then The header updates and shows log out and welcome buttons

        Examples:
            | Username  | Password     |
            | MaryAriar | Marianella94 |

    Scenario: Add laptop to cart and verify add cart
        When I click in Laptops button
        And I click in the first laptop
        And I click in "add to cart" button
        Then I see alert "Product added"
        And click in "ok" button
        And click in "cart" button
        And I see total amount and "Place Order" button
