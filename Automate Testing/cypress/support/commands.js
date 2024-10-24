// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

Cypress.Commands.add("login", (username, password) => {
  cy.get("ul.primary").find("li").contains("a", "Masuk").click();
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#login_button").click();
});

Cypress.Commands.add("movieHelper", () => {
  cy.get('a.image[title="Despicable Me 4"]').click();
  cy.get("#favourite").click();
  cy.get("div.nav_wrapper").find("a.logo").click({ force: true });
  cy.get('a.image[title="The Boy and the Heron"]').click();
  cy.get("#favourite").click();
  cy.get("div.nav_wrapper").find("a.logo").click({ force: true });
});

Cypress.Commands.add("overview", () => {
  cy.get("li.user").scrollIntoView().click();
  cy.contains("a", "Lihat Profil").click({ force: true });
  cy.get("#new_shortcut_bar").find("span.k-link.k-menu-link").click();
  cy.get(".group > :nth-child(2) > span.k-link").click();
});
