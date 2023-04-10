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


const subRowGerarchy = (element) => {
    //This function will help to implement the right sub-row options to each row
    //The sub-row of a row ending in :30 will be different from one ending in :15 or :45
    // console.log(element);

    const scheduleRaw = obtainSchedulesFromHtmlElement(element, '.time-cell');

    const scheduleEnding = scheduleRaw.slice(11, 14);
    console.log(scheduleEnding);
    const hourForFirstPart = '09:00 -';
    const hourForSecondPart = '10:';
    const x = 3;
    const i = 3;

    let subRow = document.createElement('div');
    const htmlModelFunction = (lastId, lastMinutes) => {
        const htmlModel = `<div class="option off2" id="option_${x-1}_${i}.${lastId}">${hourForFirstPart} ${hourForSecondPart}${lastMinutes}</div>`;
        return htmlModel;
    }
    // const hourForFirstPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 7);
    // const hourForSecondPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 3);
    subRow.className = 'sub-row off2';
    if (scheduleEnding < 15) {
        subRow.innerHTML = `
            ${htmlModelFunction(0, 10)}
            ${htmlModelFunction(1, 5)}
            ${htmlModelFunction(2, `<input class="inputForOptions" type="number">`)}
            `;
    }else if (scheduleEnding < 30){
        subRow.innerHTML = `
            ${htmlModelFunction(0, 15)}
            ${htmlModelFunction(1, 10)}
            ${htmlModelFunction(2, 5)}
            ${htmlModelFunction(3, `<input class="inputForOptions" type="number">`)}
            `;
    }else if (scheduleEnding < 45) {
        subRow.innerHTML = `
            ${htmlModelFunction(0, 30)}
            ${htmlModelFunction(1, 15)}
            ${htmlModelFunction(2, `<input class="inputForOptions" type="number">`)}
            `;
    }else{
        subRow.innerHTML = `
            ${htmlModelFunction(0, 45)}
            ${htmlModelFunction(1, 30)}
            ${htmlModelFunction(2, 15)}
            ${htmlModelFunction(3, `<input class="inputForOptions" type="number">`)}
            `;      
    }

    console.log(subRow);
}

// subRowGerarchy(47);

