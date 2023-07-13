const addButton = document.getElementById('add-table-btn');
const mainDivsContainer = document.getElementById('main-divs-container');

const quantityOfTables3 = () => {
    fetch('/howManyTables')
    .then(response => response.json())
    .then(data => {


        showMainDivs3(data);
        
      
      
    })
    .catch(error => console.error(error));

};
 let mainDivsContainerLength3;

    const showMainDivs3 = (data) => {
        mainDivsContainerLength3 = data;
        return mainDivsContainerLength3;
    }
   
    quantityOfTables3();

const addTable = () => {
    mainDivsContainerLength3++;
    const tableButton = document.createElement('button');
    tableButton.textContent = 'Nueva Tabla';
    tableButton.id = `toggle-table-button${mainDivsContainerLength3}`;
    const editButton = document.createElement('button');
    editButton.textContent = 'Cambiar Nombre';

    editButton.addEventListener('click', () => {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.value = tableButton.textContent;
        tableButton.replaceWith(newInput);

        newInput.addEventListener('change', () => {
            tableButton.textContent = newInput.value;
            newInput.replaceWith(tableButton);
        });

    });
    
    const tableContainer = document.createElement('div');
    tableContainer.id = `main-div-${mainDivsContainerLength3}`;
    tableContainer.className = `main-div`;
    const newScheduleTable = document.createElement('div');
    newScheduleTable.id = `schedule-table-container${mainDivsContainerLength3}`;
    newScheduleTable.className = `table-hidden`;
    newScheduleTable.innerHTML = htmlForAddTable();
    
    tableContainer.appendChild(tableButton);
    tableContainer.appendChild(newScheduleTable);
    tableContainer.appendChild(editButton);
    tableContainer.appendChild(addButton);
    mainDivsContainer.appendChild(tableContainer);
    mainDivsContainer.appendChild(addButton);

    toggleTable(`toggle-table-button${mainDivsContainerLength3}`, `schedule-table-container${mainDivsContainerLength3}`);
}

// addButton.addEventListener('click', addTable);