const { mysql } = require('../../config/vars');
const knex = require('knex')({
 client: 'mysql',
 connection: mysql
});
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('visibility');
bookshelf.plugin('pagination');

const User = bookshelf.Model.extend({
 tableName: 'users',
 hasTimestamps: true,
 user_tokens: function () {
   return this.hasMany(UserToken);
 },
 hidden: ['password']
});

const UserToken = bookshelf.Model.extend({
  tableName: 'user_tokens',
  user: function () {
    return this.belongsTo(User);
  }
});


module.exports = {
 User: User,
 Knex: knex,
 UserToken :UserToken,
};