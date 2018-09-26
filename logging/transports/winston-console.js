var winston = require('winston');

module.exports = function () {
  return new (winston.transports.Console)({
    colorize: true,
    timestamp: true,
    level: 'info'
  });
};