const toggleTableButtonFunction = (table, tableNumber) => {
    const toggleTableButton = document.createElement('button');
    toggleTableButton.id = `toggle-table-button${tableNumber}`;
    toggleTableButton.innerText = `${table.rows.find(celda=> celda.celda_type === 'userTableName')['celda_value']}`;
    return toggleTableButton;
}