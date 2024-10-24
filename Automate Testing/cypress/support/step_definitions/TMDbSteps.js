import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/loginPage";
import LanguagePage from "../pages/languagePage";
import HomePage from "../pages/homePage";
import MoviePage from "../pages/moviePage";
import ProfilePage from "../pages/ProfilePage";

const loginPage = new LoginPage();
const languagePage = new LanguagePage();
const homePage = new HomePage();
const moviePage = new MoviePage();
const profilePage = new ProfilePage();

Given("the user is on the homepage without login", () => {
  cy.visit("https://www.themoviedb.org/");
  cy.clearCookies(); // Pastikan tidak ada session login
});

When("the user selects a movie {string}", (movieTitle) => {
  moviePage.selectMovie(movieTitle);
});

When("the user clicks the favorite button", () => {
  moviePage.clickFavoriteIcon();
});

Then("the user should not be redirected to the login page", () => {
  cy.url().should("not.include", "/login"); // Pastikan tidak diarahkan ke halaman login
});

Then("the user should remain on the movie page", () => {
  cy.url().should("include", "/movie"); // URL harus tetap pada halaman movie
});

Given("the user is on the login page", () => {
  loginPage.visit();
});

When("the user logs in with valid credentials", () => {
  cy.fixture("loginData").then((user) => {
    loginPage.login(user.validUser.username, user.validUser.password);
  });
});

When("the user navigates to the homepage", () => {
  // Find and click the logo element to go to the homepage
  cy.get('a.logo[aria-label="Beranda"]').click({force: true});
  cy.wait(3000); // Wait for the page to load
});

Then("the movie should be added to the user's favorite list", (movieTitle) => {
  profilePage.verifyMovieInFavorites(movieTitle);
});

When("the user selects a movie {string}", (movieTitle) => {
  moviePage.selectMovie(movieTitle);
});

When("the user clicks the favorite button", () => {
  moviePage.clickFavoriteIcon();
});

Given("the user has marked some movies as favorites", () => {
  // Step 1: Click on "Overview" in the user menu
  cy.get("li.k-item span.k-link").contains("Overview").click();

  // Step 2: Wait for the dropdown to become visible and click on "Movies" under "Favorites"
  cy.get("ul.k-group.k-menu-group")
    .should("be.visible") // Ensure the dropdown is visible
    .find("a.k-link.k-menu-link")
    .contains("Film") // Match the link that contains "Film"
    .click({ force: true }); // Force click in case it's not interactable

  // Step 3: Verify that the movie title "Family Pack" and its subtitle "(Loups-Garous)" are marked as favorites
  cy.get("h2")
    .contains("Family Pack")
    .parent() // Navigate to the parent of the h2 element
    .within(() => {
      cy.get("span.title").contains("(Loups-Garous)").should("be.visible");
    });
});

When("the user removes the movie {string} from favorites", (movieTitle) => {
  profilePage.removeMovieFromFavorites(movieTitle);
});

Then("the movie should no longer be in the user's favorite list", () => {
  profilePage.verifyMovieNotInFavorites();
});

When("the user changes language to {string}", (language) => {
  moviePage.changeLanguage(language);
});

Then("the page should display in {string}", (language) => {
  moviePage.verifyLanguage(language);
});

When('the user sorts the movies in their favorite list', () => {
  profilePage.sortMoviesInFavorites();
});


Then('the movies will be sorted as the user wants', () => {
  profilePage.verifySortedMovies();
});
