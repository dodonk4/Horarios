const less = (subRowFirstHour, x, ii, firstPart, firstTwoDigitsFirstPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
    if (Number(lastTwoDigitsFirstPart) < 15) {
        console.log('A_0');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunction(0, '15', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) != false ? htmlModelFunction(0, '15', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) : ''}
        ${htmlModelFunction(1, '30', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) != false ? htmlModelFunction(1, '30', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) : ''}
        ${htmlModelFunction(2, '45', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) != false ? htmlModelFunction(2, '45', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) : ''}
        ${htmlModelCustom(3), x, ii}
        `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) < 30) {
        console.log('A_1');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunction(0, '30', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) != false ? htmlModelFunction(0, '30', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) : ''}
        ${htmlModelFunction(1, '45', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) != false ? htmlModelFunction(1, '45', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) : ''}
        ${htmlModelCustom(2), x, ii}
        `
        //FALTA CUSTOM
                //firstTwoDigitsFirstPart:00 - Custom:Custom
    }else if (Number(lastTwoDigitsFirstPart) < 45) {
        console.log('A_2');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunction(0, '45', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) != false ? htmlModelFunction(0, '45', lastTwoDigitsSecondPart, x, ii, firstPart, firstTwoDigitsFirstPart) : ''}
        ${htmlModelCustom(1), x, ii}
        `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) <= 59) {
        console.log('A_3');
        subRowFirstHour.innerHTML = `
        ${htmlModelCustom(0), x, ii}
        `;
        //FALTA CUSTOM
    }
}