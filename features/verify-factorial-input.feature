@Regression @NegativeScenario
Feature: Factorial Input Verification

  Background:
    Given I am on the factorial page

  @Bug
  Scenario: Verify factorial calculator does not accept negative integers
    When I input "-10" and click calculate
    Then I verify that an error message is displayed

  Scenario: Verify factorial calculator does not accept letters only
    When I input "abcd" and click calculate
    Then I verify that an error message is displayed

  Scenario: Verify factorial calculator does not accept characters only
    When I input "!@#$%" and click calculate
    Then I verify that an error message is displayed

  Scenario: Verify factorial calculator does not accept numbers and characters
    When I input "10%" and click calculate
    Then I verify that an error message is displayed

  Scenario: Verify factorial calculator does not accept decimal values
    When I input "10.1" and click calculate
    Then I verify that an error message is displayed

  Scenario: Verify factorial calculator does not accept blank value
    When I input "" and click calculate
    Then I verify that an error message is displayed
