//
// !!!!!!!!!!!!!!! EL PLANTEAMIENTO ESTÁ MAL
// !!!!!!!!!!!!!!! NO SON LOS PULTIMOS HORARIOS
// !!!!!!!!!!!!!!! ES LA RESTA DEL HORARIO
// !!!!!!!!!!!!!!! ES DECIR 09:00 - 10:00 = |60 - 60| = 0 lo que indica una hora
// !!!!!!!!!!!!!!!          09:15 - 10:45 = |45 - 15| = 30
// !!!!!!!!!!!!!!!          09:00 - 10:30 = |60 - 30| = 30
// !!!!!!!!!!!!!!!          09:45 - 10:23 = |15 - 37| = 22
// !!!!!!!!!!!!!!!          09:15 - 15:45 =  |? - ?| > 60 o que indica que va a estar la opción de agregar filas
//
// Si es 09:15 - 15:45, primero se resta el mayor con el menor (el mayor siempre sera el último a menos que se hable de 23:00 - 00:00)
//                          En este caso, se resta 15 - 9 lo que nos deja con 6. Lo que significa que hay 6 horas de diferencia
//                          Nos quedan los minutos. Se restarán los primeros y luego se sumaran los últimos minutos (6.00 - 0.15 + 0.45) = 6.30
//                          Por lo tanto, se determina que de 09:15 a 15:45 hay seis horas y media de diferencia 
//                          ¿Pero que se hace con ese dato?
////                          Se es posible agregar entonces:
////                          09:15 - 10:00
////                          09:15 - 11:00
////                          09:15 - 12:00
////                          09:15 - 13:00
////                          09:15 - 14:00
////                          09:15 - 15:00
////                          09:15 - 15:15
////                          09:15 - 15:30
////                          09:15 - 15:45> custom > 10:00
//
//                              o     
//                  
//                      Es esta opción porque contiene la sub-fila común de 09:15 y la sub-fila de nuevos horarios.
//                          09:15 - 09:30
//                          09:15 - 09:45
//                          09:15 - 09:[custom]
//                          09:15 - 10:00
//                          09:15 - 11:00
//                          09:15 - 12:00
//                          09:15 - 13:00
//                          09:15 - 14:00
//                          09:15 - 15:00
//                          09:15 - 15:15
//                          09:15 - 15:30
//                          09:15 - 15:45> custom > 10:00

const subRowGerarchy = (element, x, ii) => {
    //This function will help to implement the right sub-row options to each row
    //The sub-row of a row ending in :30 will be different from one ending in :15 or :45
    // console.log(element);
    const scheduleRaw = obtainSchedulesFromHtmlElement(element, '.time-cell');
    
    const scheduleEnding = scheduleRaw.slice(11, 14);
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

