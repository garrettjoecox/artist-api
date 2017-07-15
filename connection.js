
const Sequelize = require('sequelize');
const path = require('path');

module.exports = Connection;

function Connection(config = {}) {
  const that = {
    sequelize: null,

    artist: null,
  };

  constructor();
  return that;

  function constructor() {
    that.sequelize = new Sequelize(config.database, config.user, config.password, {
      host: config.host,
      port: config.port,
      logging: false,
      dialect: 'mysql',
    });

    that.artist = that.sequelize.import(path.join(__dirname, 'api/artist/schema'));
  }
}
