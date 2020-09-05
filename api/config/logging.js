const { env } = require('./vars');
const path = require('path');
const logPath = path.join(__dirname, '../logs/development.log');
const loggingParams = {
    development: {
      appenders: {
        out: { type: 'console' },
        app: { type: 'file', filename: logPath }
      },
      categories: {
        default: { appenders: ['out', 'app'], level: 'info'}
      }
    },
    staging: {
     appenders: {
       file: { type: 'file', filename: logPath }
      },
      categories: {
        default: { appenders: ['file'], level: 'info'}
      }
    },
    production: {
      appenders: {
        out: { type: 'console', layout: { type: 'basic' } }
      },
      categories: {
        default: { appenders: ['out'], level: 'info' }
      }
    }
};

module.exports = loggingParams[env];
