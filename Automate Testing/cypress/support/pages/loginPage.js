class LoginPage {
  visit() {
    cy.visit("https://www.themoviedb.org/login");
  }

  login(username, password) {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#login_button").click();
  }
}

export default LoginPage;
