const scheduleTableContainerFunction = (tableNumber) => {
    const scheduleTableContainer = document.createElement('div');
    scheduleTableContainer.id = `schedule-table-container${tableNumber}`;
    scheduleTableContainer.className = "table-hidden";
    return scheduleTableContainer;
}