const editButtonFunction = (toggleTableButton, tableNumber) => {
    const editButton = document.createElement('button');
        editButton.textContent = 'Cambiar Nombre';
        editButton.id = `${tableNumber - 1}`;
            //EDIT BUTTON ADDEVENTLISTENER
        editButtonChangeNameEvent(editButton, toggleTableButton);
        
    return editButton;
}