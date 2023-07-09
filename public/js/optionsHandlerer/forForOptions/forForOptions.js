const forForOptions = (option, checker, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber, passCard) => {
    // debugger;
    for (let i = 0; i < 59; i++) {

        if (i.toString().length === 2) {

            let lastChecker;

            if (passCard === 'inputType') {

                lastChecker = checker + `:${option.querySelector('.inputForOptions').value}`;

            } else {

                lastChecker = checker + `:${option.innerHTML.split("-")[1].split(":")[1]}`;

            }

            if (lastChecker === `${checker}:${i}`) {

                const substractOfId = rowWhoContainsOption.querySelector('.button-sub-row').id.replace('button-sub-row', '');

                const substractOfIdLastDigit = substractOfId.length === 4 ? substractOfId.slice(2, 4) : substractOfId.slice(2, 3);

                const newScheduleForRootRow = noInput.slice(0, 8) + noInput.slice(0,2) + `:${i}`;

                const definitiveId = `${substractOfId.replace(`_${substractOfIdLastDigit}`, `_${Number(substractOfIdLastDigit) + 1}`)}`;

                options(scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, tableNumber, rowNumber);

                break;

            }

        } else if (i.toString().length === 1){

            let lastChecker;
            
            if (passCard === 'inputType') {

                lastChecker = checker + `:0${option.querySelector('.inputForOptions').value}`;

            } else {

                lastChecker = checker + `:0${option.innerHTML.split("-")[1].split(":")[1]}`;

            }

            if (lastChecker === `${checker}:0${i}`) {//ESTO INCLUYE :0, :4 Y :45, ES CUALQUIER COSA. NO SIRVE PARA AGREGAR EL ID COMO INDICACION DE HORARIO

                const substractOfId = rowWhoContainsOption.querySelector('.button-sub-row').id.replace('button-sub-row', '');

                const newScheduleForRootRow = noInput.slice(0, 8) + noInput.slice(0,2) + `:0${i}`;

                const definitiveId = substractOfId;

                options(scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, tableNumber, rowNumber);

                break;

            }
            
        } 
    }
}
