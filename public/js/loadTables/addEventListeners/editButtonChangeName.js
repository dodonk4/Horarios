const editButtonChangeNameEvent = (editButton, toggleTableButton) => {
    editButton.addEventListener('click', () => {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.value = toggleTableButton.textContent;
        newInput.id = `tableName${editButton.id}`;
        newInput.className = 'changeName';

        toggleTableButton.replaceWith(newInput);
        newInput.focus();
        updateValueFunction();

        newInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                toggleTableButton.textContent = newInput.value;
                newInput.replaceWith(toggleTableButton);
              }
        })

        editButton.addEventListener('click', () => {
            toggleTableButton.textContent = newInput.value;
            newInput.replaceWith(toggleTableButton);
        });
    });
}