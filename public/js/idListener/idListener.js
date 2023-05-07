//ESTE UPDATE ID SIRVE PARA CUANDO SE CREAN SUBFILAS Y SE TIENEN QUE CAMBIAR LOS ID DE LAS FIFLAS RESTANTES



const idListener = (tableNumber, changedId, action) => {

    console.log(tableNumber, changedId, action);
   
    
    const rows = document.querySelectorAll(`.row:not(.header-row)`);
    const buttons = document.querySelectorAll(`.button-sub-row`);
    const cellInputs = document.querySelectorAll(`.cell-input`); //NECESITO ÚNICAMENTE EL INPUT
    const options = document.querySelectorAll(`.option`);
    const array = [rows, buttons, cellInputs, options];

    
    const exactVariable = (variable, string) => {
        const exactVariable = [];

        variable.forEach(element => {
            if(element.id.includes(`${string}${tableNumber}`)){
                exactVariable.push(element);
            }else{
                '';
            };
        });

        return exactVariable;
    }

    const exactRows = exactVariable(rows, `row`); 
    const exactButtons = exactVariable(buttons, `button-sub-row`);
    const exactCellInputs = exactVariable(cellInputs, `horarios`);  
    // const exactOptions = exactVariable(options, `option_`);

    if(action === 'delete'){
        console.log('delete action');
        forDelete(exactRows, `row`, changedId, tableNumber);
        forDelete(exactButtons, `button-sub-row`, changedId, tableNumber);
        forDelete(exactCellInputs, `horarios`, changedId, tableNumber);
    }else if(action === 'add'){
        console.log('add action');
        forAdd(exactRows, `row`, changedId, tableNumber);
        forAdd(exactButtons, `button-sub-row`, changedId, tableNumber);
        forAdd(exactCellInputs, `horarios`, changedId, tableNumber);
    }else{
        console.error('No hay acción especificada');
    }

    // action === 'delete' ? console.log('delete') : console.log('add');

    //REVEER OPTION
};


     //ME DA UN PROBLEMA CON EL 3 ESTO