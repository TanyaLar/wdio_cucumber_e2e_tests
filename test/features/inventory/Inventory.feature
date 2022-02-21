Feature: Inventory

     @debug
    Scenario Outline: <TestID>: Demo Inventory
        # Given Login to inventory web app
        Given As a standard user I login to inventory web app
            | UserType | Username                 |
            | StdUser  | standard_user            |
            | ProUser  | problem_user             |
            | PerfUser | performance_glitch _user |
        Then Inventory page should list <NumberOfProducts>
        Then Validate all products have valid price



        Examples:
            | TestID     | NumberOfProducts |
            | INVT_TC001 |         6        |
