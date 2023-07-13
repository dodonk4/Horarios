//ESTE UPDATE ID SIRVE PARA CUANDO SE CREAN SUBFILAS Y SE TIENEN QUE CAMBIAR LOS ID DE LAS FIFLAS RESTANTES

const idListener = (tableNumber, changedId, action, idChangeAccountPermission) => {

    // debugger;
   
    const rows = document.querySelectorAll(`.row:not(.header-row)`);

    const buttons = document.querySelectorAll(`.button-sub-row`);

    const cellInputs = document.querySelectorAll(`.cell-input`); //NECESITO ÚNICAMENTE EL INPUT

    //DEBERÍA DE AGREGAR AHORA LOS SUB-ROW YA QUE SE LES IMPLEMENTÓ UN ID

    const subrows = document.querySelectorAll(`.sub-row`);

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

    const exactSubRows = exactVariable(subrows, `sub-row`);

    if(action === 'delete'){

        console.log('delete action');

        forDelete(exactRows, `row`, changedId, tableNumber);

        forDelete(exactButtons, `button-sub-row`, changedId, tableNumber);

        forDelete(exactCellInputs, `horarios`, changedId, tableNumber);

        forDelete(exactSubRows, `sub-row`, changedId, tableNumber);

        idChangeAccountPermission === true ? idChangeAccount(changedId, 'delete', tableNumber) : '';

        // idChangeAccount(changedId, 'delete');

    }else if(action === 'add'){

        console.log('add action');

        forAdd(exactRows, `row`, changedId, tableNumber);

        forAdd(exactButtons, `button-sub-row`, changedId, tableNumber);

        forAdd(exactCellInputs, `horarios`, changedId, tableNumber);

        forAdd(exactSubRows, `sub-row`, changedId, tableNumber);

        idChangeAccountPermission === true ? idChangeAccount(changedId, 'add', tableNumber) : '';

        // idChangeAccount(changedId, 'add', tableNumber);

    }else{

        console.error('No hay acción especificada');
        
    }


    //REVEER OPTION
};


     //ME DA UN PROBLEMA CON EL 3 ESTO