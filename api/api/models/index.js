const models = require('./models');
const users = require('./users');



cabBookingSettings = {
 globals: {

 },
 loadSettings: function () {
   var that = this;
 }
};

cabBookingSettings.loadSettings();

module.exports = {
  User: models.User,
  UserToken: models.UserToken,
  Role: models.Role,
  authenticateUser: users.authenticateUser,
  registerUser: users.registerUser,
}