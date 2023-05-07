const rowSpawning = (table, tableNumber, scheduleTable, rowQuantity) => {
    for(let i=0; i < rowQuantity.length; i++){
        
        let row = rowFunction(table, tableNumber, i)

        let subRow = subRowGerarchy(row, tableNumber, i);

        customOptionsFunction(subRow, row, scheduleTable, tableNumber, i);
        commonOptionsFunction(subRow, row, scheduleTable, tableNumber, i);
        

        rowButtonFunction(row, tableNumber, subRow, i);

        scheduleTable.appendChild(row);
        scheduleTable.appendChild(subRow);
    }
}
