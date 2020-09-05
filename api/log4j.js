const Log4js = require('log4js');
const configuration = require('./config/logging');
module.exports = () => {
    Log4js.configure(configuration);
    return Log4js.getLogger();
}