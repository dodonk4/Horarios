const givingClassOffFunction = (scheduleTableContainer) => {
    const elementsOfTheTable = scheduleTableContainer.querySelectorAll('* :not(.option):not(.sub-row)');
    elementsOfTheTable.forEach(element => {
        element.classList.add("off");
    });
}
