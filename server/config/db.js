const { Client } = require('pg')
const connection = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'childgrowth',
  password: '123',
  port: 5432,
})

connection.connect();
module.exports = connection;