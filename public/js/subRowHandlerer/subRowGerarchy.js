const subRowGerarchy = (element, x, ii) => {
    const vars = variables(element);

    const firstPart = vars[0];
    const firstTwoDigitsFirstPart = vars[1];
    const firstTwoDigitsSecondPart = vars[2];
    const lastTwoDigitsFirstPart = vars[3];
    const lastTwoDigitsSecondPart = vars[4];

    const subRowFirstHour = document.createElement('div');
    subRowFirstHour.className = 'sub-row off2';

    const subRowNewHours = document.createElement('div');
    subRowNewHours.className = 'sub-row off2';

    //TESTING TOOL
    console.log(`
    Lista:
        ${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}
        ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}
        
        ${firstTwoDigitsSecondPart}`);

    


    const restOfSchedules = restScheduleFunction(`${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}`,`${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}`);


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

        const condition = (i) => {
            
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
        console.log(restOfSchedulesContainer);
        let hoursOfRestOfSchedules = Number(String(restOfSchedules).slice(0,1)); // CHECK
        let htmlModel = ``;



        let conditionOfFor = lastTwoDigitsSecondPart != '00' ? hoursOfRestOfSchedules : hoursOfRestOfSchedules =- 1;

        lastId === 0 ? conditionOfFor += 1 : "";

        console.log(conditionOfFor);


        for (let i = 0; i <= conditionOfFor; i++) {

            let newId = lastId;
            newId += i;

            const firstCondition = condition(i) > firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i);
            const secondCondition = newId != lastId ? '00' : lastTwoDigitsFirstPart;
            const thirdCondition =  condition(i+1) > firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i+1);
            const fourthCondition = condition(i+1) > firstTwoDigitsSecondPart ? lastTwoDigitsSecondPart : '00';

            let htmlInsertion = `<div class="option off2" id="option_${x-1}_${ii}.${lastId  + i}">${firstCondition}:${secondCondition} - ${thirdCondition}:${fourthCondition}</div>`;
            htmlModel += htmlInsertion;
            

            restOfSchedulesContainer -= 100;
            
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
                ${htmlModelFunction(0, '15', lastTwoDigitsSecondPart, x, ii) != false ? htmlModelFunction(0, '15', lastTwoDigitsSecondPart, x, ii) : ''}
                ${htmlModelFunction(1, '30', lastTwoDigitsSecondPart, x, ii) != false ? htmlModelFunction(1, '30', lastTwoDigitsSecondPart, x, ii) : ''}
                ${htmlModelFunction(2, '45', lastTwoDigitsSecondPart, x, ii) != false ? htmlModelFunction(2, '45', lastTwoDigitsSecondPart, x, ii) : ''}
                ${htmlModelCustom(3), x, ii}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                console.log('A_1');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '30', lastTwoDigitsSecondPart, x, ii) != false ? htmlModelFunction(0, '30', lastTwoDigitsSecondPart, x, ii) : ''}
                ${htmlModelFunction(1, '45', lastTwoDigitsSecondPart, x, ii) != false ? htmlModelFunction(1, '45', lastTwoDigitsSecondPart, x, ii) : ''}
                ${htmlModelCustom(2), x, ii}
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                console.log('A_2');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '45', lastTwoDigitsSecondPart, x, ii) != false ? htmlModelFunction(0, '45', lastTwoDigitsSecondPart, x, ii) : ''}
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


        if (restOfSchedules === 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                console.log('B_0');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction_no_limit(0, '15', x, ii)}
                ${htmlModelFunction_no_limit(1, '30', x, ii)}
                ${htmlModelFunction_no_limit(2, '45', x, ii)}
                <div class="option off2" id="option_${x-1}_${ii}.${3}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                console.log('B_1');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction_no_limit(0, '30', x, ii)}
                ${htmlModelFunction_no_limit(1, '45', x, ii)}
                <div class="option off2" id="option_${x-1}_${ii}.${2}">${firstTwoDigitsFirstPart}:${'00'} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                console.log('B_2');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction_no_limit(0, '45', x, ii)}
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
                ${htmlModelFunctionSeveralHours(0, '15', x, ii)}
                ${htmlModelFunctionSeveralHours(1, '30', x, ii)}
                ${htmlModelFunctionSeveralHours(2, '45', x, ii)}
                ${htmlModelFor(3, x, ii)}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                console.log('C_1');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunctionSeveralHours(0, '30', x, ii)}
                ${htmlModelFunctionSeveralHours(1, '45', x, ii)}
                ${htmlModelFor(2, x, ii)}
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                console.log('C_2');
                subRowFirstHour.innerHTML = `
                ${htmlModelFunctionSeveralHours(0, '45', x, ii)}
                ${htmlModelFor(1, x, ii)}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                console.log('C_3');
                subRowFirstHour.innerHTML = `
               ${htmlModelFor(0, x, ii)}`;
                //FALTA CUSTOM
            }
        }
        console.log(subRowFirstHour);
    }

    decision(firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
}


