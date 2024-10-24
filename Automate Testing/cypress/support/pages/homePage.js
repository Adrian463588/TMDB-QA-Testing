class HomePage {
  visit() {
    cy.visit("https://www.themoviedb.org/");
  }

  closeConsentPopup() {
    cy.get("button.onetrust-close-btn-handler").click({ force: true });
  }

  selectLanguage(language) {
    cy.get("li.translate").click();
    cy.get("input.k-textbox").type(`${language}{enter}`, { force: true });
    cy.get("a.no_click.button.rounded.upcase").click({ force: true });
  }
}

export default HomePage;
