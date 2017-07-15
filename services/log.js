/* eslint-disable no-console */

require('colorslite');

module.exports = {
  info,
  error,
  warn,
  verbose,
};

function info(...args) {
  args.unshift(_surround('Info'.green));
  console.log(...args);
}

function verbose(...args) {
  args.unshift(_surround('Verbose'.magenta));
  console.log(...args);
}

function error(err) {
  console.log(...[_surround('Error'.red), err.message]);
  console.log(err);
}

function warn(...args) {
  args.unshift(_surround('Warn'.yellow));
  console.log(...args);
}

function _surround(prefix) {
  return '['.gray + prefix + ']'.gray;
}

// TODO: Implement log level
