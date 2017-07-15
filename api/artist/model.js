
const _ = require('lodash');

module.exports = ArtistModel;

function ArtistModel({ connection }) {
  const my = {
    connection,
  };

  const that = {
    getArtists,
    createArtist,
  };

  return that;

  async function getArtists() {
    const artists = await my.connection.artist.findAll();

    return artists.map(artist => artist.get());
  }

  async function createArtist(payload) {
    const newArtistProps = _.pick(payload, ['displayName']);
    const artist = await my.connection.artist.create(newArtistProps);

    return artist.get();
  }
}
