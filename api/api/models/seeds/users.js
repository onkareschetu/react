var crypto = require('crypto');
var password = crypto.createHash('md5').update('admin123').digest('hex');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'admin@cabbooking.com', firstname: 'Admin', lastname: 'Admin', role_id: '1', password: password}
      ]);
    });
};
