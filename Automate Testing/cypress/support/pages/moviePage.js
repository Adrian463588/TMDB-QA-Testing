class MoviePage {
  selectMovie(movieTitle) {
    cy.contains("a", movieTitle).click();
  }

  clickFavoriteIcon() {
    cy.xpath('//*[@id="favourite"]').click({force: true});
  }

  changeLanguage(language) {
    // Step 1: Scroll to the top of the page to ensure the translate dropdown is visible
   

    // Step 2: Click on the language dropdown (translate icon)
    cy.get(".translate > div").click(); // More specific selector to ensure we are clicking on the correct element

    // Step 3: Click on the dropdown arrow to open the language selection
    cy.xpath('//*[@id="default_language_popup_label"]/span[2]').click({
      force: true,
    }); // Using XPath to click the arrow

    // Step 4: Type the desired language into the input box, ensuring only one element is targeted
    cy.get('input.k-textbox[role="listbox"]')
      .first()
      .type(`${language}{enter}`, { force: true });

    
  // Step 5: Ensure the dropdown is fully visible before selecting the language option
  cy.get('div#default_language_popup-list.k-list-container.k-popup.k-group.k-reset')
    .should('be.visible') // Wait for the entire dropdown to be visible
    .within(() => {
      // Step 6: Wait for the language option to be visible and select it
      const languageOption = language === "Indonesian" ? "Indonesian (id-ID)" : "English (en-US)";
      cy.xpath(`//ul[@id='default_language_popup_listbox']/li[contains(text(),'${languageOption}')]`)
        .should('be.visible')
        .click({ force: true });
    });

    // Step 6: Click the reload button to apply the language change
    cy.wait(5000); // Optional wait to ensure the page is fully loaded
    cy.get("a.no_click.button.rounded.upcase").click();
  }

  verifyLanguage(language) {
    // Step 6: Verify the page displays the welcome message in the correct language
    cy.contains(
      "h2",
      language === "Indonesian" ? "Selamat datang" : "Welcome"
    ).should("be.visible");
  }

  markMoviesAsFavorites(movies) {
    movies.forEach((movie) => {
      this.selectMovie(movie);
      this.clickFavoriteIcon();
    });
  }
}

export default MoviePage;
