const forForCommonOptions = (option, checker, rowWhoContainsOption, scheduleTable, noInput, x, ii) => {
    for (let i = 0; i < 59; i++) {
        if (i.toString().length === 2) {
            if (option.innerHTML.includes(`${checker}:${i}`)) {
                commonOptions(rowWhoContainsOption, scheduleTable, noInput, i, x, ii);
                break;
            }
        } else if (i.toString().length === 1){
            if (option.innerHTML.includes(`${checker}:0${i}`)) {//ESTO INCLUYE :0, :4 Y :45, ES CUALQUIER COSA. NO SIRVE PARA AGREGAR EL ID COMO INDICACION DE HORARIO
                commonOptions(rowWhoContainsOption, scheduleTable, noInput, i, x, ii);
                break;
            }
        }
    
    }
}
