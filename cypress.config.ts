const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress10-cucumber-preprocessor').default;
const resolve = require('resolve');

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };
      return on('file:preprocessor', cucumber(options));
    },
    baseUrl: "https://www.demoblaze.com",
    requestTimeout: 10000,
    defaultCommandTimeout: 15000,
    pageLoadTimeOut: 15000,
    ScreenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    env: {
      apiUrl: "https://api.demoblaze.com",
    },
  },
});
