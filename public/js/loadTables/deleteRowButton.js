const deleteRowButtonFunction = (tableNumber, rowNumber) =>{
    const deleteRowButton = document.createElement('input');
    deleteRowButton.type = 'button';
    deleteRowButton.id = `delete-row-button${tableNumber}_${rowNumber}`;
    deleteRowButton.className = 'delete-row-button';

    deleteRowButton.innerText = 'x';

    return deleteRowButton;
}

//DEBERÁ RESPONDER AL ID LISTENER 
//ARCHIVO INUTIL, BORRAR