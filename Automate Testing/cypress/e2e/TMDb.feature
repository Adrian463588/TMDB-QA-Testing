Feature: TMDB Feature Marks as Favorite

@regression
Scenario: User changes language and runs favorite actions
    Given the user is on the homepage without login
    When the user changes language to "English"
    Then the page should display in "English"
    When the user changes language to "Indonesian"
    Then the page should display in "Indonesian"
  
@regression 
Scenario: User cannot mark movie as favorite without login [Negative]
    Given the user is on the homepage without login
    When the user selects a movie "Alien: Romulus"
    And the user clicks the favorite button
    Then the user should not be redirected to the login page
    And the user should remain on the movie page

@regression 
Scenario: User marks movie as favorite after login
    Given the user is on the login page
    When the user logs in with valid credentials
    And the user navigates to the homepage
    And the user selects a movie "Family Pack"
    And the user clicks the favorite button
    And the movie should be added to the user's favorite list

@regression
Scenario: User can sort movies in the favorite list
  Given the user is on the login page
  When the user logs in with valid credentials
  And the user has marked some movies as favorites
  And the user sorts the movies in their favorite list
  Then the movie will be sorted as they want

@regression
Scenario: User can remove movie from the favorite list
    Given the user is on the login page
    When the user logs in with valid credentials
    And the user has marked some movies as favorites
    When the user removes the movie "Family Pack" from favorites
    Then the movie should no longer be in the user's favorite list



 
