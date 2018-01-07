const parse = require('pg-connection-string').parse;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      database : 'hos_development'
    },
    seeds: {
      directory: './seeds/development'
    },
    migrations: {
      tableName: 'migrations'
    },
  },
  test: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      database : 'hos_test'
    },
    seeds: {
      directory: './seeds/test'
    },
    migrations: {
      tableName: 'migrations'
    },
  },
  production: DATABASE_URL && {
    client: 'pg',
    connection: Object.assign({}, parse(DATABASE_URL), { ssl: true }),
    seeds: {
      directory: './seeds/production'
    },
    migrations: {
      tableName: 'migrations'
    },
  },
};
