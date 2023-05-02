const subRowGerarchy = (element, x, ii) => {
    
    const subRowFirstHour = document.createElement('div');
    subRowFirstHour.className = 'sub-row off2';

    const subRowNewHours = document.createElement('div');
    subRowNewHours.className = 'sub-row off2';

    const vars = variables(element);

    const firstPart = vars[0];
    const firstTwoDigitsFirstPart = vars[1];
    const firstTwoDigitsSecondPart = vars[2];
    const lastTwoDigitsFirstPart = vars[3];
    const lastTwoDigitsSecondPart = vars[4];


    // //TESTING TOOL
    // console.log(`
    // Lista:
    //     ${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}
    //     ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}
        
    //     ${firstTwoDigitsSecondPart}`);
    // //
    


    const restOfSchedules = restScheduleFunction(`${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}`,`${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}`);


    return decition(subRowFirstHour, x, ii, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
}



