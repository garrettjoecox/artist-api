
const ArtistRouter = require('./artist/router');

module.exports = Api;

function Api({ config, connection, koa }) {
  const my = {};

  const that = {};

  constructor();
  return that;

  function constructor() {
    my.artistRouter = new ArtistRouter({
      config, connection, koa,
    });
  }
}
