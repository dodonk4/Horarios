const customOptionsFunction = (subRow, row, scheduleTable, tableNumber, rowNumber) => {
    const customOptionsToGiveEvent = subRow.querySelectorAll(`.custom`);
    customOptionsToGiveEvent.forEach(element => {
        listenerForCustomOptions(element, row, scheduleTable, tableNumber, rowNumber);
    });
}