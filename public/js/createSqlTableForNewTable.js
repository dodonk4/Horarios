const quantityOfTables = () => {
    fetch('/howManyTables')
    .then(response => response.json())
    .then(data => {

        showMainDivs(data);
      
      
    })
    .catch(error => console.error(error));

};
let mainDivsContainerLength;

const showMainDivs = (data) => {
    mainDivsContainerLength = data;
    return mainDivsContainerLength;
}
   
quantityOfTables();
let sessionCounterForTableCreation = 0;

addButton.addEventListener('click', () => {
    
    let tableIdNumber = Number(mainDivsContainerLength);
    let sqlTableName = `horarios${tableIdNumber + sessionCounterForTableCreation}`;
    let userTableName = {celda_value: 'Nueva Tabla', celda_scndId: '', celda_type: 'userTableName'};
    sessionCounterForTableCreation++;
    let arrayOfSchedulesAndCells = sqlForNewTable();

    createSqlTableForNewTable(sqlTableName, arrayOfSchedulesAndCells[0], arrayOfSchedulesAndCells[1], userTableName);

});


const createSqlTableForNewTable = (sqlTableName, schedules, cells, userTableName) => {
    fetch('/new-table', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ id: id, valor: valor })
        body: JSON.stringify({ sqlTableName: sqlTableName, schedules: schedules, cells: cells, userTableName: userTableName })
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Ocurrió un error al crear la tabla SQL');
        }
        console.log('Tabla creada con éxito!');
    })
    .catch(error => {
        console.error(error);
    });

};
