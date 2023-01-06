Feature: pet

    Scenario: POST add a Pet

        When the user sends a post transaction request using "petPOSTRequest.json"
        Then I should get a "200" response and the post response should match "petPOSTResponse.json"
        
    Scenario: GET obtain a Pet

        When the user sends a get transaction request using "0"
        Then I should get a "200" response and the get response should match "petGETResponse.json"
        
    Scenario: PUT modify a Pet

        When the user sends a put transaction request using "petPUTRequest.json"
        Then I should get a "200" response and the put response should match "petPUTResponse.json"
