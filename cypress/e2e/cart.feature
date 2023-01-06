@UI
Feature: Product cart

 Background: login
        Given I open the application

    Scenario: Add laptop to cart and verify add cart
        When Click in Laptops button
        And Click in the first laptop
        And Click in add to cart button
        Then I see alert Product added
        And click in cart button
        And Check laptop is in cart
