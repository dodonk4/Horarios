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

    console.log(`
    Lista:
        ${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}
        ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}`);

    
    const restHoursFunction = (schedule1, schedule2) => {
        
        const [hours1, minutes1] = schedule1.split(':').map(Number);
        const [hours2, minutes2] = schedule2.split(':').map(Number);
        const totalMinutes1 = hours1 * 60 + minutes1;
        const totalMinutes2 = hours2 * 60 + minutes2;
      
        
        const minutesResult = totalMinutes2 - totalMinutes1;
      

        const finalHours = Math.floor(minutesResult / 60);
        const finalMinutes = minutesResult % 60;

        const scheduleResult = `${finalHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`;
        const finalResult = Number(scheduleResult.replace(':', ''));
        
        return finalResult;
    }


    const restOfHours = restHoursFunction(`${firstTwoDigitsFirstPart}:${lastTwoDigitsFirstPart}`,`${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}`);

    const htmlModelFunction = (lastId, lastMinutes) => {
        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsSecondPart}:${lastMinutes}</div>`;
        return htmlModel;
    }

    const htmlModelFunction2 = (lastId, lastMinutes, limit) => {
        if(lastMinutes > limit){
            return false
        }
        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsSecondPart}:${lastMinutes}</div>`;
        return htmlModel;
    }

    const htmlModelFor = (lastId, lastMinutes) => {
        for (let i = 0; i < restOfHours; i++) {
            const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart + i} - ${firstTwoDigitsSecondPart}:${lastMinutes}</div>`;
            return htmlModel;
            
        }
    }

    const htmlModelCustom = (lastId, lastMinutes) => {

        const lastInputFirstPart = document.createElement('input')
        firstInput.className = 'inputForOptions'; //VER SI PONERLE "ON" O NO
        firstInput.type = 'number';


        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${lastInputFirstPart}:${lastMinutes}</div>`;
        return htmlModel;
    }



    const decision = (firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
        if (restOfHours < 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction2(0, '15', lastTwoDigitsSecondPart) != false ? htmlModelFunction2(0, '15') : ''}
                ${htmlModelFunction2(0, '30', lastTwoDigitsSecondPart) != false ? htmlModelFunction2(0, '30') : ''}
                ${htmlModelFunction2(0, '45', lastTwoDigitsSecondPart) != false ? htmlModelFunction2(0, '45') : ''}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '30')}
                ${htmlModelFunction(0, '45')}
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '45')}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                subRowFirstHour.innerHTML = ``;
                //FALTA CUSTOM
            }
        }


        if (restOfHours === 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '15')}
                ${htmlModelFunction(1, '30')}
                ${htmlModelFunction(2, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${3}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '30')}
                ${htmlModelFunction(1, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${2}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${1}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                subRowFirstHour.innerHTML = `
                <div class="option off2" id="option_${x-1}_${ii}.${0}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>`;
                //FALTA CUSTOM
            }
        }

        if (restOfHours > 100) {
            if (Number(lastTwoDigitsFirstPart) < 15) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '15')}
                ${htmlModelFunction(1, '30')}
                ${htmlModelFunction(2, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${3}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                ${htmlModelFor}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) < 30) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '30')}
                ${htmlModelFunction(1, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${2}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                ${htmlModelFor}
                `
                //FALTA CUSTOM
                        //firstTwoDigitsFirstPart:00 - Custom:Custom
            }else if (Number(lastTwoDigitsFirstPart) < 45) {
                subRowFirstHour.innerHTML = `
                ${htmlModelFunction(0, '45')}
                <div class="option off2" id="option_${x-1}_${ii}.${1}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                ${htmlModelFor}
                `
                //FALTA CUSTOM
            }else if (Number(lastTwoDigitsFirstPart) <= 59) {
                subRowFirstHour.innerHTML = `
                <div class="option off2" id="option_${x-1}_${ii}.${0}">${firstTwoDigitsFirstPart + 1}:${00} - ${firstTwoDigitsSecondPart}:${lastTwoDigitsSecondPart}</div>
                ${htmlModelFor}`;
                //FALTA CUSTOM
            }
        }
        console.log(subRowFirstHour);
    }

    decision(firstTwoDigitsFirstPart, lastTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsSecondPart);
}


