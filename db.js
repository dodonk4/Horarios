const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10, // Límite de conexiones en el pool
  host: 'localhost',
  user: 'sqluser',
  password: 'password',
  database: 'tablas',
  multipleStatements: true
});

module.exports = pool;