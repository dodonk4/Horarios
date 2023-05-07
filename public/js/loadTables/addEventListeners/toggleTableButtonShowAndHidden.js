const toggleTableButtonShowAndHiddenEvent = (toggleTableButton, scheduleTableContainer) => {
    toggleTableButton.addEventListener("click", function() {
        if (scheduleTableContainer.classList.contains("table-hidden")) {
            scheduleTableContainer.classList.remove("table-hidden");
            scheduleTableContainer.classList.add("table-show");
            const elementsOff = scheduleTableContainer.querySelectorAll('* .off:not(.option):not(.sub-row)');
            elementsOff.forEach(element => {
                element.classList.remove("off");
                element.classList.add("on");
            });   
        } else {
            scheduleTableContainer.classList.remove("table-show");
            scheduleTableContainer.classList.add("table-hidden");
            const elementsOn = scheduleTableContainer.querySelectorAll('* .on:not(.option):not(.sub-row)');
            // scheduleTable.classList.remove("on");
            // scheduleTable.classList.add("off");
            elementsOn.forEach(element => {
                element.classList.remove("on");
                element.classList.add("off");
            });               
        }
    });
}