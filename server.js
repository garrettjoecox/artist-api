
const Config = require('./config');
const Connection = require('./connection');
const Koa = require('koa');
const Api = require('./api');
const middleware = require('./middleware');
const log = require('./services/log');

module.exports = Server;

function Server(config = {}) {
  const my = {};

  const that = {
    start,
  };

  constructor();
  return that;

  function constructor() {
    my.config = new Config(config);
    my.connection = new Connection(my.config.database);
    my.koa = new Koa();

    middleware(my.koa);

    my.api = new Api({
      config: my.config,
      connection: my.connection,
      koa: my.koa,
    });
  }

  async function start() {
    await my.connection.sequelize.sync();

    await new Promise((resolve) => {
      my.koa.listen(my.config.port, () => resolve());
    });

    log.info(`Listening on ${my.config.port}`);
  }
}
