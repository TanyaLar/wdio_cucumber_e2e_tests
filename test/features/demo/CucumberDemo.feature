#@demo
Feature: Cucumber Demo
    I can have more info about the feature...
    - Questions/clarification
    - Known issues
    - Todo

    Background: Launch google page
        Given Google page is opened

    Scenario: Scenatio name
        When Search with WDIO
        Then Ckick on the first search result
        * URL should match https://webdriver.io/

    Scenario: Scenatio name
        When Search with webdriverio
        Then Ckick on the first search result
        * URL should match https://webdriver.io/
