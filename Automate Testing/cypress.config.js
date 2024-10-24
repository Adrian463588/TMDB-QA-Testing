const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on(
        "file:preprocessor",
        cucumber(),
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: ["**/*.feature", "**/*.cy.js"],
  },
});
