// const mysql = require('mysql');

// const pool = mysql.createPool({
//   connectionLimit: 10, // Límite de conexiones en el pool
//   host: 'localhost',
//   user: 'sqluser',
//   password: 'password',
//   database: 'tablas',
//   multipleStatements: true
// });

// const { Pool } = require('pg');

// const pool = new Pool({
//   host: 'localhost',
//   user: 'partner',
//   password: 'password',
//   database: 'postgres',
//   port: 5432
// });

// const pool = new Pool({
//   host: process.env.POSTGRES_HOST,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DATABASE,
//   port: 5432
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

module.exports = pool;
