// Update with your config settings.
const { mysql } = require('./vars');

module.exports = {
  development: {
    client: 'mysql',
    timezone: 'UTC',
    connection: {
      host: mysql.host,
      database: mysql.database,
      user: mysql.user,
      password: mysql.password,
      timezone: 'UTC'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../api/models/migrations'
    },
    seeds: {
      directory: '../api/models/seeds'
    }
  },
  staging: {
    client: 'mysql',
    timezone: 'UTC',
    connection: {
      database: mysql.database,
      host: mysql.host,
      user: mysql.user,
      password: mysql.password,
      timezone: 'UTC'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../api/models/migrations'
    },
    seeds: {
      directory: '../api/models/seeds'
    }
  },
  production: {
    client: 'mysql',
    timezone: 'UTC',
    connection: {
      host: mysql.host,
      user: mysql.user,
      password: mysql.password,
      database: mysql.database,
      timezone: 'UTC'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../api/models/migrations'
    },
    seeds: {
      directory: '../api/models/seeds'
    }
  }
};
