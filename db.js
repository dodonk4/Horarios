// const mysql = require('mysql');

// const pool = mysql.createPool({
//   connectionLimit: 10, // Límite de conexiones en el pool
//   host: 'localhost',
//   user: 'sqluser',
//   password: 'password',
//   database: 'tablas',
//   multipleStatements: true
// });

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'partner',
  password: 'password',
  database: 'postgres',
  port: 5432
});

module.exports = pool;