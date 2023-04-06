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
        mainDivsContainerLength3 = data[0]['COUNT(*)'];
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
    newScheduleTable.innerHTML = `<div class="schedule-table">
        <div class="row header-row">
            <div class="cell time-cell"></div>
            <div class="cell">Lunes</div>
            <div class="cell">Martes</div>
            <div class="cell">Miércoles</div>
            <div class="cell">Jueves</div>
            <div class="cell">Viernes</div>
            <div class="cell">Sábado</div>
            <div class="cell">Domingo</div>
        </div>
        <div class="row">
            <div class="cell time-cell">8:00 - 9:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">9:00 - 10:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">10:00 - 11:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">11:00 - 12:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">12:00 - 13:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">13:00 - 14:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">14:00 - 15:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">15:00 - 16:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">16:00 - 17:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">17:00 - 18:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">18:00 - 19:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">19:00 - 20:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">20:00 - 21:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">21:00 - 22:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">22:00 - 23:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
        <div class="row">
            <div class="cell time-cell">23:00 - 00:00</div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
            <div class="cell"><input type="text" placeholder="..." id="horarios-example"></div>
        </div>
    </div>`;
    tableContainer.appendChild(tableButton);
    tableContainer.appendChild(newScheduleTable);
    tableContainer.appendChild(editButton);
    tableContainer.appendChild(addButton);
    mainDivsContainer.appendChild(tableContainer);
    mainDivsContainer.appendChild(addButton);

    toggleTable(`toggle-table-button${mainDivsContainerLength3}`, `schedule-table-container${mainDivsContainerLength3}`);
}

addButton.addEventListener('click', addTable);