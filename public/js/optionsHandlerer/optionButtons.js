const listenerForOptions = (option, rowWhoContainsOption, scheduleTable, tableNumber, rowNumber) => {
    const elementFromRowWhoContainsOption = rowWhoContainsOption.querySelector('.time-cell');
    const elementFromRowWhoContainsOptionHTML = elementFromRowWhoContainsOption.innerHTML;
    let noInput = elementFromRowWhoContainsOptionHTML.replace(elementFromRowWhoContainsOption.querySelector('input').outerHTML, '');
    noInput = noInput.trim();
    const time = noInput.slice(0, 8) + noInput.slice(0,2);
    option.addEventListener('click', () => {
        // forForCommonOptions(option, time, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber)
        forToHandleOptions(option, time, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber, 'staticType');
        console.log('A function will be called to grant options the hability to read the new schedules given and reset themselves');
    })

}

const listenerForCustomOptions = (option, rowWhoContainsOption, scheduleTable, tableNumber, rowNumber) => {
    
    const elementFromRowWhoContainsOption = rowWhoContainsOption.querySelector('.time-cell');
    const elementFromRowWhoContainsOptionHTML = elementFromRowWhoContainsOption.innerHTML;
    let noInput = elementFromRowWhoContainsOptionHTML.replace(elementFromRowWhoContainsOption.querySelector('input').outerHTML, '');
    noInput = noInput.trim();
    const time = noInput.slice(0, 8) + noInput.slice(0,2);
    option.addEventListener('click', () => {
        if (option.querySelector('.inputForOptions').value.length === 0){
            console.log('Escriba un horario valido en el bloque');
        }else if (option.querySelector('.inputForOptions').value > 59){
            console.log('Escriba un horario igual o menor a 59 y mayor a 0');
        }else if(option.querySelector('.inputForOptions').value < 1){
            console.log('Escriba un mayor a 0 e igual o menor a 59');
        }else{
            // forForCustomOptions(option, time, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber)
            forToHandleOptions(option, time, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber, 'inputType')
        }
        console.log('A function will be called to grant options the hability to read the new schedules given and reset themselves');
        
    })
}

// const listenerForOptions_NewPrototype = (option, rowWhoContainsOption, scheduleTable, tableNumber, rowNumber) => {
//     const elementFromRowWhoContainsOption = rowWhoContainsOption.querySelector('.time-cell');
//     const elementFromRowWhoContainsOptionHTML = elementFromRowWhoContainsOption.innerHTML;
//     let noInput = elementFromRowWhoContainsOptionHTML.replace(elementFromRowWhoContainsOption.querySelector('input').outerHTML, '');
//     noInput = noInput.trim();
//     const time = noInput.slice(0, 8) + noInput.slice(0,2);
//     forToHandleOptions(option, time, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber, 'inputType');
//     if(option.querySelectorAll('.option:not(.custom').length > 0){
//         forToHandleOptions(option, time, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, tableNumber, rowNumber, 'staticType')
//     }

// }