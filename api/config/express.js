const Status = require('http-status');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api/routes/v1');
const log4j = require('../log4j')();
const morgon = require('morgan');
const httpLogger = morgon('dev', {
    stream: {
        write(message) {
            log4j.info(message.slice(0,-1));
        }
    }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
app.use(httpLogger);


app.use(function (req, res, next) {
  log4j.info('-------------------------------------');
  log4j.info(req.path);
  log4j.info(JSON.stringify(req.query));
  log4j.info(JSON.stringify(req.params));
  log4j.info(JSON.stringify(req.body));
  log4j.info('-------------------------------------');
  next();
});
  
app.use((err, req, res, next) => {
  log4j.error(err);
  res.status(Status.INTERNAL_SERVER_ERROR).json({
    type: 'InternalServerError',
    message: err.message,
    stack: err.stack
  });
});

app.use('/v1', routes);

module.exports = app;