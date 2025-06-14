
@login
Feature: Login Feature

  Background: 
    Given I have launched the simplilearn application
    When I click on the Login Link

  Scenario: Login Success
    And I enter the Username
    And I enter the Password
    And I click on the Login button
    Then I should be able to see the home page

@sanity
  Scenario: Login Failure Scenarios using test data as parameter
    And I enter the Username "abc@xyz.com"
    And I enter the Password "Abc@12345"
    And I click on the Login button
    Then I should be able to see the home page "The email address or password you have entered is invalid"

  Scenario Outline: Login Failure Scenerio using test data as Examples
    And I enter the Username "<UserName>"
    And I enter the Password "<Password>"
    And I click on the Login button
    Then I should be able to see the home page "<Error>"

    Examples: 
      | UserName    | Password | Error                                                     |
      | abc@xyz.com | Abc@1234 | The email address or password you have entered is invalid |
      | pqr@xyz.com | AAA@1234 | The email address or password you have entered is invalid |
