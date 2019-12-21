require('dotenv').config();
require('app-module-path').addPath(__dirname);

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      port: process.env.DB_LOCAL_PORT || 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './models/migrations/'
    },
    seeds: {
      directory: './models/seeds/'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './models/migrations/'
    },
    seeds: {
      directory: './models/seeds/'
    },
    useNullAsDefault: true
  },
  testing: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_LOCAL_TEST,
      user: process.env.DB_LOCAL_USER_TEST,
      password: process.env.DB_LOCAL_PASSWORD_TEST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './models/migrations/'
    },
    seeds: {
      directory: './models/seeds/test_seeds'
    },
    useNullAsDefault: true
  }
};