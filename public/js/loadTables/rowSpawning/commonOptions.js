const commonOptionsFunction = (subRow, row, scheduleTable, tableNumber, i) => {
    const commonOptionsToGiveEvent = subRow.querySelectorAll(`.option`);
    commonOptionsToGiveEvent.forEach(element => {
        listenerForOptions(element, row, scheduleTable, tableNumber, i);
    });
}