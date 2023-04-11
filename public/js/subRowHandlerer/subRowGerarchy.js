const subRowGerarchy = (element, x, ii) => {
    //This function will help to implement the right sub-row options to each row
    //The sub-row of a row ending in :30 will be different from one ending in :15 or :45
    const scheduleRaw = obtainSchedulesFromHtmlElement(element, '.time-cell');
    
    //NEW STRUCTURE
    const firstTwoDigitsFirstPart = scheduleRaw.slice(0,2);
    const firstTwoDigitsSecondPart = scheduleRaw.slice(8,10);
    const lastTwoDigitsFirstPart = scheduleRaw.slice(3, 5);
    const lastTwoDigitsSecondPart = scheduleRaw.slice(11, 13);

    const restOfHours = firstTwoDigitsSecondPart - firstTwoDigitsFirstPart;
    //Si restoOfHours es 0, los primeros digitos son iguales
    //Si restOfHours es mayor a 0, el primer digito de la última parte es mayor tantas veces como restOfHours indique
    //No es posible que restOfHours sea menor a 0

    //¿Qué pasa con los minutos entonces cuando se tiene un formato como 09:15 - 10:15?
    //Se restan las horas y restOfHours da 1
    //Se resta lastTwoDigitsSecondPart - lastTwoDigitsFirstPart y da 0
    //Por lo tanto, la diferencia de horas es de 1
    //! Entonces hay un problema con la estructura ya escrita. Hay que hacer un código que se adapte a cualquier estructura
    //! Es decir, que sirva tanto para 09:00 - 10:00 como para 09:15 - 10:15 o 09:15 - 10:30
    //Si empieza con :15 y termina con :15, el formato es{
    //  09:15 - 10:15
    //      09:15 - 09:30
    //      09:15 - 09:45
    //      09:15 - 10:00
    //      09:15 - [custom]:[custom]
    // }
    //Si empieza con :14 y termina con :15, el fomrato es{
    //  09:14 - 10:15
    //      09:14 - 09:15
    //      09:15 - 09:30
    //      09:15 - 09:45
    //      09:15 - 10:00
    //      09:15 - [custom]:[custom]
    //}
    //Si empieza con :16 y termina con :15, el formato es{
    //  09:16 - 10:15
    //      09:16 - 09:30
    //      09:16 - 09:45
    //      09:16 - 10:00
    //      09:15 - [custom]:[custom]
    //    
     

    console.log(`Esta es restOfHours: ${restOfHours}`);
    console.log(`Estos son los últimos digitos: ${lastTwoDigitsFirstPart} ${lastTwoDigitsSecondPart}`);

    if(restOfHours === 0){
        //Se agrega una sub-fila normal
        //¿Y si es de 09:15 a 10:15?
        '';
    }


    const newHourForFirstPart = scheduleRaw.slice(0,5).replace(':', '');
    const newHourForSecondPart = scheduleRaw.slice(8,13).replace(':', '');
    // console.log(`Está es la newStructure: ${newHourForFirstPart} ${newHourForSecondPart}`);
    
    //OLD STRUCTURE
    const scheduleEnding = scheduleRaw.slice(11, 14);
    console.log(`Ending es igual a: ${scheduleEnding}`);
    const hourForFirstPart = scheduleRaw.slice(0,7);
    const hourForSecondPart = scheduleRaw.slice(8,11);

    console.log(`Estos son los first y second: ${hourForFirstPart} y ${hourForSecondPart}`)

    let subRow = document.createElement('div');
    const htmlModelFunction = (lastId, lastMinutes) => {
        const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${hourForFirstPart} ${hourForSecondPart}${lastMinutes}</div>`;
        return htmlModel;
    }//Esto sirve para crear la sub-fila con sus horarios correspondientes

    // const hourForFirstPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 7);
    // const hourForSecondPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 3);
    subRow.className = 'sub-row off2';
    if (scheduleEnding < 15 ) {
        subRow.innerHTML = `
            ${htmlModelFunction(0, '10')}
            ${htmlModelFunction(1, '05')}
            ${htmlModelFunction(2, `<input class="inputForOptions" type="number">`)}
            `;

            //This is how a sub-row is created in "loadTables"
            //
            /*let subRow = document.createElement('div');
            const hourForFirstPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 7);
            const hourForSecondPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 3);
            subRow.className = 'sub-row off2';
            subRow.innerHTML = `
                <div class="option off2" id="option_${x-1}_${i}.0">${hourForFirstPart} ${hourForSecondPart}45</div>
                <div class="option off2" id="option_${x-1}_${i}.1">${hourForFirstPart} ${hourForSecondPart}30</div>
                <div class="option off2" id="option_${x-1}_${i}.2">${hourForFirstPart} ${hourForSecondPart}15</div>
                <div class="option off2 custom" id="option_${x-1}_${i}.3">${hourForFirstPart} ${hourForSecondPart}<input class="inputForOptions" type="number"></div>
                `;
            const optionsToGiveEvent = subRow.querySelectorAll(`.option.off2:not(.custom)`);
            optionsToGiveEvent.forEach(element => {
                listenersForOptions(element, row, scheduleTable);
            });
            const customOptionToGiveEvent = subRow.querySelector(`.option.off2.custom`);
            */
            //

            // Se inserta en la fila creada
            // Se borra la sub-fila de la fila raíz
            // Se implementa otra sub-fila correspondiente al nuevo horario de la fila raíz
    }else if (scheduleEnding < 30){
        subRow.innerHTML = `
            ${htmlModelFunction(0, '15')}
            ${htmlModelFunction(1, '10')}
            ${htmlModelFunction(2, '05')}
            ${htmlModelFunction(3, `<input class="inputForOptions" type="number">`)}
            `;
        //addEventListeners
        //appendChild a la row
    }else if (scheduleEnding < 45) {
        subRow.innerHTML = `
            ${htmlModelFunction(0, '30')}
            ${htmlModelFunction(1, '15')}
            ${htmlModelFunction(2, `<input class="inputForOptions" type="number">`)}
            `;
        //addEventListeners
        //appendChild a la row
    }else{
        subRow.innerHTML = `
            ${htmlModelFunction(0, '45')}
            ${htmlModelFunction(1, '30')}
            ${htmlModelFunction(2, '15')}
            ${htmlModelFunction(3, `<input class="inputForOptions" type="number">`)}
            `;
        //addEventListeners
        //appendChild a la row
    }

    console.log(subRow);
}

// subRowGerarchy(47);

