const express = require('express');
const router = express.Router();
const auth = require('./auth');
const models = require('../../models');
const log4j = require('../../../log4j')();


router.use( function(req, res, next) {
  if (req.method === 'POST' || req.method === 'PUT') {
      var temp = res.send;
      res.send = function(str) {
        var payload = {
          protocol: req.protocol,
          host: req.get('host'),
          method: req.method,
          originalUrl: req.originalUrl,
          body: req.body,
          cookies: req.cookies,
          header: req.headers
        };
        if (arguments.length > 0 &&
        typeof arguments[0] === 'string') {
          //models.eventHelper.recordEvent(payload, str, res.locals.user);
        }
        temp.apply(this, arguments);
      };
  }
  next();
});

router.use('/auth', auth);

module.exports = router;