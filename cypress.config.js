const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env: {
    Url: "https://www.saucedemo.com/",
  }
});
