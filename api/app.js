const { port,  env } = require('./config/vars');
const app = require('./config/express');
const log4j = require('./log4j')();

app.listen(port, () => log4j.info(`server on port ${port} (${env})`));
module.exports = app;