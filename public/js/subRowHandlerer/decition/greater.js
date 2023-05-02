const greater = (subRowFirstHour, x, ii, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
    if (Number(lastTwoDigitsFirstPart) < 15) {
        // console.log('C_0');
        //No va el FALSE porque en las primeras instancias va a haber algo mayor
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '15', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(1, '30', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(2, '45', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFor(3,x, ii, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart, restOfSchedules)}
        ${htmlModelFunctionCustomSeveral(4, x, ii)}
        `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) < 30) {
        // console.log('C_1');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '30', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(1, '45', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFor(2,x, ii, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart, restOfSchedules)}
        ${htmlModelFunctionCustomSeveral(3, x, ii)}
        `
        //FALTA CUSTOM
                //firstTwoDigitsFirstPart:00 - Custom:Custom
    }else if (Number(lastTwoDigitsFirstPart) < 45) {
        // console.log('C_2');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '45', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFor(1,x, ii, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart, restOfSchedules)}
        ${htmlModelFunctionCustomSeveral(2, x, ii)}
        `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) <= 59) {
        // console.log('C_3');
        subRowFirstHour.innerHTML = `
        ${htmlModelFor(0, x, ii, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart, restOfSchedules)}
        ${htmlModelFunctionCustomSeveral(1, x, ii)}
        `;
        //FALTA CUSTOM
    }
}