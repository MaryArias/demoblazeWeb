Feature: pet

    Scenario: POST add a Pet

        When the user sends a "post transactions" request using "<request>"
        Then I should get a "<responseStatus>" response and the post response should match "<response>"

        Examples:
            | request             | responseStatus | response             |
            | petPOSTRequest.json | 200            | petPOSTResponse.json |

    Scenario: GET obtain a Pet

        When the user sends a "get transactions" request using "<petId>"
        Then I should get a "<responseStatus>" response and the get response should match "<response>"

        Examples:
            | petId | responseStatus | response            |
            | 0     | 200            | petGETResponse.json |

    Scenario: PUT modify a Pet

        When the user sends a "put transactions" request using "<request>"
        Then I should get a "<responseStatus>" response and the put response should match "<response>"

        Examples:
            | request            | responseStatus | response            |
            | petPUTRequest.json | 200            | petPUTResponse.json |
