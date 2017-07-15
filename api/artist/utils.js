
const _ = require('lodash');

module.exports = {
  omit,
};

function omit(artist) {
  return _.omit(artist, ['createdAt', 'updatedAt']);
}
