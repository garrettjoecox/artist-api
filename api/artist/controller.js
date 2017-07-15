
const artistUtils = require('./utils');
const _ = require('lodash');

module.exports = ArtistController;

function ArtistController({ artistModel }) {
  const my = {
    artistModel,
  };

  const that = {
    getArtists,
    createArtist,
  };

  return that;

  async function getArtists(ctx) {
    const artists = await my.artistModel.getArtists();
    const strippedArtists = artists.map(artistUtils.omit);

    ctx.body = {
      artists: strippedArtists,
    };
  }

  async function createArtist(ctx) {
    const newArtistProps = _.pick(ctx.request.body, ['displayName']);

    const artist = await my.artistModel.createArtist(newArtistProps);
    const strippedArtist = artistUtils.omit(artist);

    ctx.body = {
      artist: strippedArtist,
    };
  }
}
