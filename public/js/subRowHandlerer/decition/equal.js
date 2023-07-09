const equal = (subRowFirstHour, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
    if (Number(lastTwoDigitsFirstPart) < 15) {
        // console.log('B_0');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '15', tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(1, '30', tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(2, '45', tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionCustomSingular(3, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        `
        // <div class="option off2" id="option_${tableNumber-1}_${rowNumber}.${3}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        // `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) < 30) {
        // console.log('B_1');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '30', tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(1, '45', tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionCustomSingular(2, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        `
        // <div class="option off2" id="option_${tableNumber-1}_${rowNumber}.${2}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        
        //FALTA CUSTOM
                //firstTwoDigitsFirstPart:00 - Custom:Custom
    }else if (Number(lastTwoDigitsFirstPart) < 45) {
        // console.log('B_2');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '45', tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionCustomSingular(1, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}`
        // <div class="option off2" id="option_${tableNumber-1}_${rowNumber}.${1}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        // `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) <= 59) {
        // console.log('B_3');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionCustomSingular(0, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart)}
        `
        // <div class="option off2" id="option_${tableNumber-1}_${rowNumber}.${0}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        // `;
        //FALTA CUSTOM
    }
}