
const _ = require('lodash');

module.exports = Config;

function Config(overrides = {}) {
  const my = {
    defaults: {
      env: process.env.NODE_ENV || 'development',
      port: process.env.PORT || 9001,

      database: {
        host: 'localhost',
        port: 3306,
        user: 'Configure in env',
        password: 'Configure in env',
        database: 'Configure in env',
      },
    },
  };

  const that = {};

  constructor();
  return that;

  function constructor() {
    const environment = overrides.env || my.defaults.env;

    try {
      const env = require(`./env/${environment}`); // eslint-disable-line

      _.defaultsDeep(that, overrides, env, my.defaults);
    } catch (e) {
      throw new Error(`Invalid env "${environment}"`);
    }
  }
}
