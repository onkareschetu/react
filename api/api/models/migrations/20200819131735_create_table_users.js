
exports.up = function(knex) {
    return knex.schema.createTable('users', function (t) {
     t.increments('id').unsigned().primary();
     t.string('firstname').nullable();
     t.string('lastname').nullable();
     t.string('phone');
     t.integer('role_id');
     t.string('email').notNull().unique().index();
     t.string('password').notNull();
     t.string('avatar');
     t.string('address').nullable();
     t.timestamp('created_at').defaultTo(knex.fn.now());
     t.timestamp('updated_at').nullable();
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExist('users')
};
