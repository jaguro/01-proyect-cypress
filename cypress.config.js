const { defineConfig } = require("cypress");

module.exports = defineConfig({

  'chromeWebSecurity': false,
  'pageLoadTimeout': 60000,
  'video': false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    }, 
  },
});
