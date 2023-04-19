const subRowGerarchy = (element, x, ii) => {
    
    const scheduleRaw = obtainSchedulesFromHtmlElement(element, '.time-cell');
    
    const subRowFirstHour = document.createElement('div');
    subRowFirstHour.className = 'sub-row off2';

    const subRowNewHours = document.createElement('div');
    subRowNewHours.className = 'sub-row off2';


    const firstPart = scheduleRaw.slice(0, 5);
    const firstTwoDigitsFirstPart = scheduleRaw.slice(0, 2);
    const firstTwoDigitsSecondPart = scheduleRaw.slice(8, 10);
    const lastTwoDigitsFirstPart = scheduleRaw.slice(3, 5);
    const lastTwoDigitsSecondPart = scheduleRaw.slice(11, 13);

    //TESTING TOOL
    console.log(`
    Lista:
        ${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}
        ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}
        
        ${firstTwoDigitsSecondPart}`);

    

    // const restHoursFunction = (hora1, minuto1, hora2, minuto2) => {

    //     const seconds1 = hora1 * 3600 + minuto1 * 60;
    //     const seconds2 = hora2 * 3600 + minuto2 * 60;
    //     let secondsResult = seconds1 - seconds2;
        

    //     const hoursResult = Math.floor(secondsResult / 3600);
    //     secondsResult %= 3600;
    //     const minutesResult = Math.floor(secondsResult / 60);
        

    //     return hoursResult + ":" + minutesResult;
    // }

    const restOfSchedules = restScheduleFunction(`${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}`,`${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}`);

    console.log(restOfSchedules);

    const htmlModelFunction = (lastId, lastMinutes, limit) => {
        if(lastMinutes > limit){
            return false
        }
        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
        return htmlModel;
    }

    const htmlModelFunctionSeveralHours = (lastId, lastMinutes, limit) => {
        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
        return htmlModel;
    }

    const htmlModelFunction_no_limit = (lastId, lastMinutes) => {

        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
        return htmlModel;
    }

    const htmlModelFor = (lastId) => {
        const condition = (i, hours, position) => {
            
            const lengthOfAcumulation = String(Number(firstTwoDigitsFirstPart) + i).length;

                if (lengthOfAcumulation > 1) {
                    const result = Number(firstTwoDigitsFirstPart) + i;
                    return result;
                } else {
                    const result = `0${Number(firstTwoDigitsFirstPart) + i}`;
                    return result;
                }
        
        }
            
        let restOfSchedulesContainer = restOfSchedules;
        // let hoursOfRestOfSchedules = Math.floor(restOfSchedules/60) - 1; // CHECK
        let hoursOfRestOfSchedules = Number(String(restOfSchedules).slice(0,1)); // CHECK
        console.log(hoursOfRestOfSchedules);
        let htmlModel = ``;

        for (let i = 0; i <= hoursOfRestOfSchedules; i++) {

            let newId = lastId;
            newId += i;

            const firstCondition = condition(i, 23, 1) === firstTwoDigitsSecondPart && lastTwoDigitsSecondPart === '00' ? condition(i-1, 23, 1) :condition(i, 23, 1);
            const secondCondition = newId != lastId ? '00' : lastTwoDigitsFirstPart;
            const thirdCondition =  condition(i+1, 23, 1) >= firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i+1, 23, 2);
            const fourthCondition = restOfSchedulesContainer < 100 ? lastTwoDigitsSecondPart :'00';
            
            let htmlInsertion = `<div class="option off2" id="option_${x-1}_${ii}.${lastId  + i}">${firstCondition}:${secondCondition} - ${thirdCondition}:${fourthCondition}</div>`;
            htmlModel += htmlInsertion;
            
            restOfSchedulesContainer -= 100;
            console.log(i);
            // return htmlModel;
            
        }
        return htmlModel;
    }

    const htmlModelCustom = (lastId) => {

        const lastInputLastPart = document.createElement('input')
        lastInputLastPart.className = 'inputForOptions'; //VER SI PONERLE "ON" O NO
        lastInputLastPart.type = 'number';

        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastInputLastPart}</div>`;
        return htmlModel;
    }



    const decision = (firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
        if (restOfSchedules < 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                console.log('A_0');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '15', lastTwoDigitsSecondPart) != false ? htmlModelFunction(0, '15') : ''}
                ${htmlModelFunction(1, '30', lastTwoDigitsSecondPart) != false ? htmlModelFunction(1, '30') : ''}
                ${htmlModelFunction(2, '45', lastTwoDigitsSecondPart) != false ? htmlModelFunction(2, '45') : ''}
                ${htmlModelCustom(3)}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                console.log('A_1');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '30', lastTwoDigitsSecondPart) != false ? htmlModelFunction(0, '30') : ''}
                ${htmlModelFunction(1, '45', lastTwoDigitsSecondPart) != false ? htmlModelFunction(1, '45') : ''}
                ${htmlModelCustom(2)}
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                console.log('A_2');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '45', lastTwoDigitsSecondPart) != false ? htmlModelFunction(0, '45') : ''}
                ${htmlModelCustom(1)}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                console.log('A_3');
                subRowFirstHour.innerHTML = `
                ${htmlModelCustom(0)}
                `;
                //FALTA CUSTOM
            }
        }


        if (restOfSchedules === 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                console.log('B_0');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction_no_limit(0, '15')}
                ${htmlModelFunction_no_limit(1, '30')}
                ${htmlModelFunction_no_limit(2, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${3}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                console.log('B_1');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction_no_limit(0, '30')}
                ${htmlModelFunction_no_limit(1, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${2}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                console.log('B_2');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction_no_limit(0, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${1}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                console.log('B_3');
                subRowFirstHour.innerHTML = `
                <div class="option off2" id="option_${x-1}_${ii}.${0}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>`;
                //FALTA CUSTOM
            }
        }

        if (restOfSchedules > 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                console.log('C_0');
                //No va el FALSE porque en las primeras instancias va a haber algo mayor
                subRowFirstHour.innerHTML = `
                ${htmlModelFunctionSeveralHours(0, '15')}
                ${htmlModelFunctionSeveralHours(1, '30')}
                ${htmlModelFunctionSeveralHours(2, '45')}
                ${htmlModelFor(3)}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                console.log('C_1');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunctionSeveralHours(0, '30')}
                ${htmlModelFunctionSeveralHours(1, '45')}
                ${htmlModelFor(2)}
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                console.log('C_2');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunctionSeveralHours(0, '45')}
                ${htmlModelFor(1)}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                console.log('C_3');
                subRowFirstHour.innerHTML = `
               ${htmlModelFor(0)}`;
                //FALTA CUSTOM
            }
        }
        console.log(subRowFirstHour);
    }

    decision(firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
}


