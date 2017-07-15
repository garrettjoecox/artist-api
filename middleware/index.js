
const bodyParser = require('koa-bodyparser');

module.exports = (koa) => {
  koa.use(bodyParser());
};
