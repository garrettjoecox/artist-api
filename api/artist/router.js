
const ArtistModel = require('./model');
const ArtistController = require('./controller');
const Router = require('koa-router');

module.exports = ArtistRouter;

function ArtistRouter({ connection, koa }) {
  const my = {};

  const that = {};

  constructor();
  return that;

  function constructor() {
    my.model = new ArtistModel({ connection });
    my.controller = new ArtistController({ artistModel: my.model });
    my.router = new Router();

    my.router
      .get('/artists', my.controller.getArtists)
      .post('/artists', my.controller.createArtist);

    koa
      .use(my.router.routes())
      .use(my.router.allowedMethods());
  }
}
