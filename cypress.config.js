const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // nothing else needed here for reporter
    },
    baseUrl: "https://www.wasi.lk/",
  },
});
