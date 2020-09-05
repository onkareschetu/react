
exports.up = function(knex) {
    return knex.schema.createTable('user_tokens', function (t) {
     t.increments('id').unsigned().primary();
     t.integer('user_id');
     t.string('token').unique();
     t.timestamp('refreshed_at');
     t.timestamp('created_at').defaultTo(knex.fn.now());
     t.timestamp('updated_at').nullable();
    });
};
   
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_tokens');
};
   