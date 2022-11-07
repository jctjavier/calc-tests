@Regression @HappyPath
Feature: Factorial Verification

  Background:
    Given I am on the factorial page

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 1 to 9
    When I input a value between 1 and 9
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 10 to 20
    When I input a value between 10 and 20
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 21 to 30
    When I input a value between 21 and 30
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 31 to 40
    When I input a value between 31 and 40
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 41 to 50
    When I input a value between 41 and 50
    Then I verify that the calculated factorial displayed is correct
  
  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 51 to 60
    When I input a value between 51 and 60
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 61 to 70
    When I input a value between 61 and 70
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 71 to 80
    When I input a value between 71 and 80
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 81 to 90
    When I input a value between 81 and 90
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 91 to 100
    When I input a value between 91 and 100
    Then I verify that the calculated factorial displayed is correct

  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 101 to 991
    When I input a value between 101 and 991
    Then I verify that the calculated factorial displayed is correct

  @Bug
  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 992 to 1000
    When I input a value between 992 and 1000
    Then I verify that the calculated factorial displayed is correct

  @MainTest
  Scenario Outline: Verify calculated factorial displayed is correct for any integer from 10 to 100
    When I input a value between 10 and 100
    Then I verify that the calculated factorial displayed is correct

  @Test
  Scenario Outline: Verify calculated factorial displayed is correct for any integer
    When I input "58" and click calculate
    Then I verify that the calculated factorial displayed is correct

# TODO: > 992 error