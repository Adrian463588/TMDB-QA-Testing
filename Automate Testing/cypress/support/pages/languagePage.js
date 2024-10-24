class LanguagePage {
  closePrivacyPopup() {
    cy.get(
      "button.onetrust-close-btn-handler.onetrust-close-btn-ui.banner-close-button.ot-close-icon"
    ).click({ force: true });
  }

  openLanguageDropdown() {
    cy.get("li.translate").click();
  }

  selectLanguage(language) {
    cy.get("span.k-dropdown-wrap.k-state-default").click({ force: true });
    cy.get("input.k-textbox").type(`${language}{enter}`, { force: true });

    cy.xpath(
      `//ul[@id='default_language_popup_listbox']/li[contains(text(),'${language}')]`
    ).click({ force: true });

    cy.get("a.no_click.button.rounded.upcase")
      .should("be.visible")
      .click({ force: true });
  }

  verifyContentText(text) {
    cy.get(".title > h2").contains(text).should("be.visible");
  }
}

export default LanguagePage;
