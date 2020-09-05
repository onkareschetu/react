const models = require('../../models');
const express = require('express');

const router = express.Router();

router.post('/login', function (req, res){
  models.authenticateUser(req.body, function(err, user){
    if(!err) {
      res.send({status: 'success', data: user});
    } else {
      res.send({status: 'error'});
    }
  });
});

module.exports = router;