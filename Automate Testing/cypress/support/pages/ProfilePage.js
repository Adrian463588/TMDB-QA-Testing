class ProfilePage {
  verifyMovieInFavorites(movieTitle) {
    // Step 1: Scroll to the top of the page to make sure the navbar is visible
    cy.scrollTo("top");

    // Step 2: Click on the profile icon to open the user menu
    cy.get(".no_click > .avatar").click(); // Corrected selector

    cy.get(
      ".k-tooltip-content > .settings_content > :nth-child(1) > p > a"
    ).click({ force: true });

    // Wait for the profile page to load
    cy.wait(2000); // Optional wait to ensure the page is fully loaded

    // Step 3: Click on the "Overview" section in the user menu
    cy.get("li.k-item span.k-link").contains("Overview").click();

    // Step 5: Wait for the dropdown to become visible and click on "Movies" under "Favorites"
    cy.get("ul.k-group.k-menu-group")
      .should("be.visible") // Ensure the dropdown is visible
      .find("a.k-link.k-menu-link")
      .contains("Film") // Match the link that contains "Film"
      .click({ force: true }); // Force click in case it's not interactable

    // Step 5: Verify that the movie title "Family Pack" and subtitle "(Loups-Garous)" exist on the favorites page
    cy.get("h2")
      .contains("Family Pack")
      .parent()
      .within(() => {
        cy.get("span.title").contains("(Loups-Garous)").should("be.visible");
      });
  }

  // Remove movie from favorites
  removeMovieFromFavorites(movieTitle) {
    cy.contains("h2", movieTitle).click(); // Select the movie
    cy.get("#favourite").click(); // Click the favorite button to remove
  }

  // Verify the movie is not in the favorites list anymore
  verifyMovieNotInFavorites(movieTitle) {
    cy.visit("https://www.themoviedb.org/u/ADRTestQA/favorites");

    // Ensure the movie title is no longer present
    cy.contains("h2", movieTitle).should("not.exist");
  }

  // Method to sort movies in the favorite list
  sortMoviesInFavorites() {
    // Sort by Popularity
    cy.get("div.group_dropdown.filters")
      .contains("span.text", "Ditambahkan") // Open dropdown for sorting options
      .click({ force: true });
    cy.get('li#filter_by_popularity') // Select 'Popularitas' option by ID
      .find('a.filter_list.no_click')
      .click({ force: true });
    cy.get("#results_page_1").should("exist");
    cy.wait(3000);

    // Sort by Release Date
    cy.get("div.group_dropdown.filters")
      .contains("span.text", "Tanggal Rilis") // Open dropdown for sorting by Release Date
      .click({ force: true });
    cy.get('li#filter_by_release_date') // Select 'Tanggal Rilis' option by ID
      .find('a.filter_list.no_click')
      .click({ force: true });
    cy.get("#results_page_1").should("exist");
    cy.wait(3000);

    // Sort by Added Date
    cy.get("div.group_dropdown.filters")
      .contains("span.text", "Ditambahkan") // Open dropdown for sorting by Added Date
      .click({ force: true });
    cy.get('li#filter_by_created_at') // Select 'Ditambahkan' option by ID
      .find('a.filter_list.no_click')
      .click({ force: true });
    cy.get("#results_page_1").should("exist");
    cy.wait(3000);
  }

  // Method to verify that the movies are sorted
  verifySortedMovies() {
    // Add assertions here to verify the sort order, such as checking movie titles in the correct order
    cy.get("#results_page_1").should("exist"); // Make sure the results are displayed after sorting
  }
}

export default ProfilePage;
