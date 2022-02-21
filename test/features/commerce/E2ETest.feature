Feature: Customer search

    @demo @smoke @debug
    Scenario Outline: <TestID>: Search external customers
        Given Get list of users from reqres.in
        When As Admin user login to nopcommers site
        # When Search users in customer list
        Then Verify if all users exist in customer list



        Examples:
            | TestID    |
            | E2E_TC001 |
