// const mysql = require('mysql');
const express = require('express');
const app = express();
require('dotenv').config();

const pool = require('./db');
// const connection = db.connection;
// const pool = db.pool;
const exphbs = require('express-handlebars');
const path = require('path');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());



app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {

  // connection.query('SELECT * FROM horarios0', function(error, results, fields) {
  //   if (error) throw error;
  //   let valores = {}
  //   for (let i = 0; i < results.length; i++) {
  //     let idFinal = JSON.stringify(results[i].celda_scndId).replace('.', '_');
  //     const nombreInput = 'horarios0_' + idFinal;
  //     const valorInput = results[i].celda_value;
  //     valores[nombreInput] = valorInput;
  //   }
  //   res.render('index', {valores});
  // });
  res.render('index');

});



app.post('/update-value', (req, res) => {
  // Obtener los datos de la solicitud
  let id = req.body.id;
  let valor = req.body.valor;
  let numeroDeId;
  let tabla;
  let partes;
  let sql;
  // Separar el id en sus partes: nombre y número
  if(id.includes('tableName') === true){
    let tableNameIndex = id.indexOf("tableName");
    let number = id.substring(tableNameIndex + 9);
    tabla = `horarios${number}`;
    sql = `UPDATE ${tabla} SET celda_value = '${valor}' WHERE celda_type = 'userTableName'`;
  }else{
    partes = id.split('_');
    tabla = partes[0];
    numeroDeId = partes[1];
    sql = `UPDATE ${tabla} SET celda_value = '${valor}' WHERE celda_scndId = ${numeroDeId};`;
  }

  

  // Ejecutar la consulta SQL para actualizar el valor en la base de datos
  pool.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al actualizar el valor');
    } else {
      console.log('Valor actualizado correctamente');
      res.send('Valor actualizado correctamente');
    }
    
  });
});


app.post('/new-table', (req, res) => {
  // Obtener los datos de la solicitud
  let sqlTableName = req.body.sqlTableName;
  let userTableName = req.body.userTableName;
  let cells = req.body.cells;
  let schedules = req.body.schedules;
  const userTableNameForSql = `('${userTableName.celda_value}', ${null}, '${userTableName.celda_type}')`;
  const schedulesForSql = schedules.map(schedule => `('${schedule.celda_value}', ${schedule.celda_scndId}, '${schedule.celda_type}')`).join(', ');
  let sqlStringToCreate = `
  CREATE TABLE ` + sqlTableName + `(celda_id INT NOT NULL AUTO_INCREMENT, celda_value VARCHAR(60) NOT NULL, celda_scndId decimal(4,1), celda_type VARCHAR(60), PRIMARY KEY (celda_id));
  `

  const cellsForSql = cells.map(cell => `('${cell.celda_value}', ${cell.celda_scndId}, '${cell.celda_type}')`).join(', ');
  let sqlStringToInject = `INSERT INTO `+ sqlTableName +` (celda_value, celda_scndId, celda_type) values` + cellsForSql + ',' + schedulesForSql + ',' + userTableNameForSql + `;`
  let sqlTableAndData = sqlStringToCreate + sqlStringToInject;


  // Ejecutar la consulta SQL para actualizar el valor en la base de datos
  pool.query(sqlTableAndData, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear la nueva tabla');
    } else {
      console.log('Tabla creada correctamente');
      res.send('Tabla creada correctamente');
    }
  });
  

});


//SQL a script.js

app.get('/fetching', (req, res) => {
  const allTablesSqlCount = `SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'tablas' AND table_name LIKE 'horarios_'`;
  pool.query(allTablesSqlCount, (error, results) => {
    let sqlTablesQuantityData = results[0];
    let sqlTablesQuantityNumber = sqlTablesQuantityData['COUNT(*)'];
    
    let sqlQueriesArray = [];

    for (let i = 0; i < sqlTablesQuantityNumber; i++) {
      const sqlQuery = `SELECT * FROM horarios${i}`;
      sqlQueriesArray.push(sqlQuery);
    }

    const sqlQueriesString = sqlQueriesArray.join('; ') + ';';


    pool.query(sqlQueriesString, (error, results) => {
        if (error) throw error;
        res.json(results);
        
      });
    });

    
  })
  

app.get('/howManyTables', (req, res) => {
  const quantityOfTables = `SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'tablas' AND table_name LIKE 'horarios_'`;
  pool.query(quantityOfTables, (error, results) => {
    if (error) throw error;
    res.json(results);
  })
})

  
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

