const equal = (subRowFirstHour, x, ii, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
    if (Number(lastTwoDigitsFirstPart) < 15) {
        // console.log('B_0');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '15', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(1, '30', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(2, '45', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionCustomSingular(3, x, ii, firstPart, firstTwoDigitsFirstPart)}
        `
        // <div class="option off2" id="option_${x-1}_${ii}.${3}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        // `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) < 30) {
        // console.log('B_1');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '30', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionSeveralHours(1, '45', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionCustomSingular(2, x, ii, firstPart, firstTwoDigitsFirstPart)}
        `
        // <div class="option off2" id="option_${x-1}_${ii}.${2}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        
        //FALTA CUSTOM
                //firstTwoDigitsFirstPart:00 - Custom:Custom
    }else if (Number(lastTwoDigitsFirstPart) < 45) {
        // console.log('B_2');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionSeveralHours(0, '45', x, ii, firstPart, firstTwoDigitsFirstPart)}
        ${htmlModelFunctionCustomSingular(1, x, ii, firstPart, firstTwoDigitsFirstPart)}`
        // <div class="option off2" id="option_${x-1}_${ii}.${1}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        // `
        //FALTA CUSTOM
    }else if (Number(lastTwoDigitsFirstPart) <= 59) {
        // console.log('B_3');
        subRowFirstHour.innerHTML = `
        ${htmlModelFunctionCustomSingular(0, x, ii, firstPart, firstTwoDigitsFirstPart)}
        `
        // <div class="option off2" id="option_${x-1}_${ii}.${0}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
        // `;
        //FALTA CUSTOM
    }
}