const subRowGerarchy = (element, tableNumber, rowNumber) => {
    
    const subRowFirstHour = document.createElement('div');
    subRowFirstHour.id = `sub-row${tableNumber}_${rowNumber}`;
    subRowFirstHour.className = 'sub-row off2';

    // const subRowNewHours = document.createElement('div');
    // subRowNewHours.className = 'sub-row off2'; //ESTO ESTÁ MEDIO AL PEDO

    const vars = variables(element);

    const firstPart = vars[0];
    const firstTwoDigitsFirstPart = vars[1];
    const firstTwoDigitsSecondPart = vars[2];
    const lastTwoDigitsFirstPart = vars[3];
    const lastTwoDigitsSecondPart = vars[4];


    const restOfSchedules = restScheduleFunction(`${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}`,`${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}`);

    console.log('Estos son los restOfSchedules: ' + restOfSchedules)
    return decition(subRowFirstHour, tableNumber, rowNumber, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
}



