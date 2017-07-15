
const Sequelize = require('sequelize');

module.exports = connection => connection.define('artist', {

  displayName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

});
