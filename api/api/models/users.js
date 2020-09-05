const models = require('./models');
const crypto = require('crypto');
const moment = require('moment-timezone');
const { vueURL } = require('../../config/vars');

function createToken(user_id, clb) {
    var token = crypto.randomBytes(16).toString('hex');
    new models.UserToken({
      token: token,
      user_id: user_id,
      refreshed_at: models.Knex.fn.now()
    }).save().then(resData => {
      clb(null, resData);
    }).catch((err) => {
      clb(err, null);
    })
}
 
function authenticateUser (params, clb) {
    if(params.email && params.password){
        password_hash = crypto.createHash('md5').update(params.password).digest('hex');
        console.log('password_hash===========', password_hash);
        new models.User({email: params.email, password: password_hash, role_id: 1})
        .fetch()    
        .then(resData => {
            console.log('resData@@@@@', resData)
            if(resData) {
            createToken(resData.id, function (err, token) {
                if(err) {
                clb({err: 'true'},null);
                } else {
                var userdata = JSON.parse(JSON.stringify(resData));
                delete userdata.password;
                clb(null, {user: userdata, token: token.attributes.token});
                }
            });
            } else {
            clb({err: 'true'},null);
            }
        }).catch((err) => {
            clb({err: 'true'},null);
        });
    }else{
        clb({err: 'true'},null);
    }
}

function registerUser (params, clb){
    console.log('params', params);
    clb({err: 'true'}, null);
}

module.exports = {
    authenticateUser: authenticateUser,
    registerUser: registerUser,
}