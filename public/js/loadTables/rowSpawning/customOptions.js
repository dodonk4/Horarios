const customOptionsFunction = (subRow, row, scheduleTable, tableNumber, i) => {
    const customOptionsToGiveEvent = subRow.querySelectorAll(`.custom`);
    customOptionsToGiveEvent.forEach(element => {
        listenerForCustomOptions(element, row, scheduleTable, tableNumber, i);
    });
}