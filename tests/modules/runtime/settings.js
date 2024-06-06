(function() {
  let env = require('./environments');
  let chai = require('chai');
  let data = require('./data');
  let utils = require('./utils');

  let options = {
    logAllRequests: false,
    logAllResponses: false,
    pause: 3000,
    syncTimeout: 600000000,
    apiCallTimeout: 600000000,
    env: "dev"
  };

  let environment = env.getEnvironmentCfg();
  exports.environment = environment[process.env.NODE_ENV || options.env];

  exports.utils = utils;
  exports.expect = chai.expect;
  exports.options = options;
  exports.runtimeData = data.getAll();
  exports.uninitialized = data.getDefaultEmptyValue();

  exports.setEnvironment = function(envName) {
    options[env] = envName;
  };

})();
