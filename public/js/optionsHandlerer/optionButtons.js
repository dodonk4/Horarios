const listenerForOptions = (option, rowWhoContainsOption, scheduleTable, x, ii) => {
    const elementFromRowWhoContainsOption = rowWhoContainsOption.querySelector('.time-cell');
    const elementFromRowWhoContainsOptionHTML = elementFromRowWhoContainsOption.innerHTML;
    let noInput = elementFromRowWhoContainsOptionHTML.replace(elementFromRowWhoContainsOption.querySelector('input').outerHTML, '');
    noInput = noInput.trim();
    const checker = noInput.slice(0, 8) + noInput.slice(0,2);
    option.addEventListener('click', () => {
        forForCommonOptions(option, checker, rowWhoContainsOption, scheduleTable, noInput, x, ii)
    })

}

const listenerForCustomOptions = (option, rowWhoContainsOption, scheduleTable, x, ii) => {
    let elementFromRowWhoContainsOption = rowWhoContainsOption.querySelector('.time-cell');
    const elementFromRowWhoContainsOptionHTML = elementFromRowWhoContainsOption.innerHTML;
    let noInput = elementFromRowWhoContainsOptionHTML.replace(elementFromRowWhoContainsOption.querySelector('input').outerHTML, '');
    noInput = noInput.trim();
    const checker = noInput.slice(0, 8) + noInput.slice(0,2);
    option.addEventListener('click', () => {
        if (option.querySelector('.inputForOptions').value.length === 0){
            console.log('Escriba un horario valido en el bloque');
        }else if (option.querySelector('.inputForOptions').value > 59){
            console.log('Escriba un horario igual o menor a 59 y mayor a 0');
        }else if(option.querySelector('.inputForOptions').value < 1){
            console.log('Escriba un mayor a 0 e igual o menor a 59');
        }else{
            forForCustomOptions(option, checker, rowWhoContainsOption, elementFromRowWhoContainsOption, scheduleTable, noInput, x, ii)
        }
        
    })
}