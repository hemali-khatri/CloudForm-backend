require('dotenv').config();
module.exports = {
  // development: {
  //   client: 'mysql2',
  //   connection: {
  //     host: '127.0.0.1',
  //     user: 'root',
  //     password: 'Tatva@123',
  //     database: 'finalproject'
  //   },
  //   migrations: {
  //     directory: './migrations'
  //   },
  //   seeds: {
  //     directory: './seeds'
  //   }
  development:{
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'finalproject'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'finalproject'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
