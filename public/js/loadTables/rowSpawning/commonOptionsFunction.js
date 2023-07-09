const commonOptionsFunction = (subRow, row, scheduleTable, tableNumber, rowNumber) => {
    const commonOptionsToGiveEvent = subRow.querySelectorAll(`.option`);
    commonOptionsToGiveEvent.forEach(element => {
        listenerForOptions(element, row, scheduleTable, tableNumber, rowNumber);
    });
}