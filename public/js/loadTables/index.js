fetch('/fetching')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        loadTables(data);     
    })
    .catch(error => console.error(error));



const contenedorDeTablas = document.getElementById('tablasCreadas');

const loadTables = (tables) => {

    let x = 0;

    tables.forEach(table => {
        
        x++;

        const headerRow = headerRowFunction();

        const mainDivsContainer = document.getElementById('main-divs-container');

        const mainDiv = mainDivFunction(x);

        const toggleTableButton = toggleTableButtonFunction(table, x);

        const editButton = editButtonFunction(toggleTableButton, x)

        const scheduleTableContainer = scheduleTableContainerFunction(x);

        const scheduleTable = scheduleTableFunction();

        styleForMakingTableHideBehindNextDiv(scheduleTable);
    
        mainDiv.appendChild(toggleTableButton);

        mainDiv.appendChild(editButton);

        scheduleTable.appendChild(headerRow);

        toggleTableButtonShowAndHiddenEvent(toggleTableButton, scheduleTableContainer);

        const rowQuantity = table.rows.filter(celdas=> celdas.celda_type === 'schedule');

        rowSpawning(table, x, scheduleTable, rowQuantity);

        scheduleTableContainer.appendChild(scheduleTable);

        mainDiv.appendChild(scheduleTableContainer);

        mainDivsContainer.appendChild(mainDiv);

        givingClassOffFunction(scheduleTableContainer);

    }); 

    updateValueFunction();
    // idListener(0, 2, 'delete');//*OK
    // idListener(0, 2, 'add');
};










