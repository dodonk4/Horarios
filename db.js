const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'sqluser2',
//   password: 'password',
//   database: 'tablas',
//   multipleStatements: true
// });

const pool = mysql.createPool({
  connectionLimit: 10, // Límite de conexiones en el pool
  host: 'localhost',
  user: 'sqluser2',
  password: 'password',
  database: 'tablas',
  multipleStatements: true
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Error al conectarse a la base de datos:', err);
//     return;
//   }
//   console.log('Conexión exitosa a la base de datos!');
// });

// module.exports = {connection, pool};
module.exports = pool;