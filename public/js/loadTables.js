fetch('/fetching')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        loadTables(data);     
    })
    .catch(error => console.error(error));



const contenedorDeTablas = document.getElementById('tablasCreadas');

const loadTables = (tables) => {
    console.log(tables);
    let realTables = tables;//MySql   ?????????????/
    // let realTables = tables.rows[0].count;
    let x = 0;
    // Array.isArray(tables[0]) === true ? '' : realTables = [tables];//mySql??????????????

    realTables.forEach(table => {
        console.log(table);
        x++;
        const row_headerRow = document.createElement('div');
        row_headerRow.innerHTML = `<div class="cell time-cell"></div>
            <div class="cell day">Lunes</div>
            <div class="cell day">Martes</div>
            <div class="cell day">Miércoles</div>
            <div class="cell day">Jueves</div>
            <div class="cell day">Viernes</div>
            <div class="cell day">Sábado</div>
            <div class="cell day">Domingo</div>`;
        row_headerRow.className = 'row header-row';
    

        const mainDivsContainer = document.getElementById('main-divs-container');

        const mainDiv = document.createElement(`div`);
        mainDiv.id = `main-div-${x}`;
        mainDiv.className = 'main-div';

        const newToggleTableButton = document.createElement('button');
        newToggleTableButton.id = `toggle-table-button${x}`;
        newToggleTableButton.innerText = `${table.rows.find(celda=> celda.celda_type === 'userTableName')['celda_value']}`;

        
        const editButton = document.createElement('button');
        editButton.textContent = 'Cambiar Nombre';
        editButton.id = `${x - 1}`
        editButton.addEventListener('click', () => {
            // let xForTableName = x;
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.value = newToggleTableButton.textContent;
            newInput.id = `tableName${editButton.id}`;
            newInput.style = `
            font-family: 'Roboto Mono', sans-serif;
            padding: 10px 20px;
            margin-bottom: 10px;
            background-color: #000;
            color: #fff;
            border: solid;
            border-radius: 5px;
            border-width: 0.5px;
            margin-left: 10px;
            transition: all 0.3s ease-in-out;
            width: 130px;
            `
            // console.log(newInput.id);
            newToggleTableButton.replaceWith(newInput);
            newInput.focus();
            updateValueFunction();

            // newInput.addEventListener('blur', () => {
            //     newToggleTableButton.textContent = newInput.value;
            //     newInput.replaceWith(newToggleTableButton);
            // });

            newInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    newToggleTableButton.textContent = newInput.value;
                    newInput.replaceWith(newToggleTableButton);
                  }
            })

            editButton.addEventListener('click', () => {
                newToggleTableButton.textContent = newInput.value;
                newInput.replaceWith(newToggleTableButton);
            });
        });


        const scheduleTableContainer = document.createElement('div');
        scheduleTableContainer.id = `schedule-table-container${x}`;
        scheduleTableContainer.className = "table-hidden";
        const scheduleTable = document.createElement('div');
        scheduleTable.className = `schedule-table`;
        const br = document.createElement('br');
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');
        br.innerHTML = `<br>`;
        br2.innerHTML = `<br>`;
        br3.innerHTML = `<br>`;
        scheduleTable.appendChild(br);
        scheduleTable.appendChild(br2);
        scheduleTable.appendChild(br3);
        mainDiv.appendChild(newToggleTableButton);
        mainDiv.appendChild(editButton);
        scheduleTable.appendChild(row_headerRow);



        newToggleTableButton.addEventListener("click", function() {
            if (scheduleTableContainer.classList.contains("table-hidden")) {
                scheduleTableContainer.classList.remove("table-hidden");
                scheduleTableContainer.classList.add("table-show");
                const elementsOff = scheduleTableContainer.querySelectorAll('* .off:not(.option):not(.sub-row)');
                elementsOff.forEach(element => {
                    element.classList.remove("off");
                    element.classList.add("on");
                });   
            } else {
                scheduleTableContainer.classList.remove("table-show");
                scheduleTableContainer.classList.add("table-hidden");
                const elementsOn = scheduleTableContainer.querySelectorAll('* .on:not(.option):not(.sub-row)');
                // scheduleTable.classList.remove("on");
                // scheduleTable.classList.add("off");
                elementsOn.forEach(element => {
                    element.classList.remove("on");
                    element.classList.add("off");
                });               
            }
        });


        
        // const numeroDeFilas2 = table.filter(celdas=> celdas.celda_scndId >= 0 && celdas.celda_scndId != null);
        const numeroDeFilas2 = table.rows.filter(celdas=> celdas.celda_type === 'schedule');
        // const numeroDeFilas3 = numeroDeFilas2.length/7
        for(let i=0; i < numeroDeFilas2.length; i++){
            
            let row = document.createElement('div');
            row.className = 'row';
            row.id = `row${x - 1}_${i}`;
            // 
            //ESTO ES PARA PONER EN EL HTML DE ROW ANTES DEL HORARIO
            //El botón haría que la barra sub-row y sus elementos opciones sean mostrados. Pero solo para los elementos que tienen su id. 
            //EJ: id="button-sub-row0_6"
            // console.log(-(i+1));
            // console.log(table.rows.find(celda=> celda.celda_scndid === '-1.0'));
            // // console.log(table.rows.find(celda=> celda.celda_scndId === 0.2));
            // // console.log("'" + -(i+1) + ".0'");
            // let testingVariable = -(i+1) + '.0';
            // let testingVariable2 = '-1.0';
            // console.log(testingVariable + " " + testingVariable2);
            // console.log(table.rows.find(celda=> celda.celda_scndid === testingVariable));
            // console.log(table.rows.find(celda=> celda.celda_scndid === '-1'));
            // console.log()
            row.innerHTML= `
                <div class="cell time-cell">
                <input type="button" class="button-sub-row" id="button-sub-row${x - 1}_${i}" value=">" style='align: left; width: 20px; height: 20px;'></input>${table.rows.find(celda=> celda.celda_scndid === -(i+1) + '.0')['celda_value']}</div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.0" value="${table.rows.find(celda=> celda.celda_scndid === i + '.0')['celda_value']}"></div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.1" value="${table.rows.find(celda=> celda.celda_scndid === i + '.1')['celda_value']}"></div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.2" value="${table.rows.find(celda=> celda.celda_scndid === i + '.2')['celda_value']}"></div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.3" value="${table.rows.find(celda=> celda.celda_scndid === i + '.3')['celda_value']}"></div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.4" value="${table.rows.find(celda=> celda.celda_scndid === i + '.4')['celda_value']}"></div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.5" value="${table.rows.find(celda=> celda.celda_scndid === i + '.5')['celda_value']}"></div>
                <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${x - 1}_${i}.6" value="${table.rows.find(celda=> celda.celda_scndid === i + '.6')['celda_value']}"></div>
                
            `;

            console.log(row);
            // let subRow2 = document.createElement('div');
            // const hourForFirstPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 7);
            // const hourForSecondPart = (table.find(celda=> celda.celda_scndId === -(i+1))['celda_value']).slice(0, 3);
            // subRow2.className = 'sub-row off2';
            // subRow2.innerHTML = `
            //     <div class="option off2" id="option_${x-1}_${i}.0">${hourForFirstPart} ${hourForSecondPart}45</div>
            //     <div class="option off2" id="option_${x-1}_${i}.1">${hourForFirstPart} ${hourForSecondPart}30</div>
            //     <div class="option off2" id="option_${x-1}_${i}.2">${hourForFirstPart} ${hourForSecondPart}15</div>
            //     <div class="option off2 custom" id="option_${x-1}_${i}.3">${hourForFirstPart} ${hourForSecondPart}<input class="inputForOptions" type="number"></div>
            //     `;
            // console.log(subRow2);

            //    //
            let subRow = subRowGerarchy(row, x, i);
            // console.log(subRow);
            //    //


            // const optionsToGiveEvent = subRow.querySelectorAll(`.option.off2:not(.custom)`);
            const commonOptionsToGiveEvent = subRow.querySelectorAll(`.option`);
            const customOptionsToGiveEvent = subRow.querySelectorAll(`.custom`);

            customOptionsToGiveEvent.forEach(element => {
                listenerForCustomOptions(element, row, scheduleTable, x, i);
            });

            commonOptionsToGiveEvent.forEach(element => {
                listenerForOptions(element, row, scheduleTable, x, i);
            });
            // const customOptionToGiveEvent = subRow.querySelector(`.option.off2.custom`);

            // console.log(customOptionToGiveEvent.querySelector('.inputForOptions'));

            // listenerForCustomOptions(customOptionToGiveEvent, row, scheduleTable, x, i);
            const rowButton = row.querySelector(`#button-sub-row${x - 1}_${i}`);
            const subRowElements = subRow.querySelectorAll('*');
            rowButton.addEventListener('click', () =>{
                if (subRow.classList.contains('off2')) {
                    subRow.classList.remove('off2');
                    subRow.classList.add('on2');
                    subRowElements.forEach(element => {
                        element.classList.remove('off2');
                        element.classList.add('on2');
                    });
                } else if (subRow.classList.contains('on2')) {
                    subRow.classList.remove('on2');
                    subRow.classList.add('off2');
                    subRowElements.forEach(element => {
                        element.classList.remove('on2');
                        element.classList.add('off2');
                    });
                } else{
                    console.error('No hay cambio de clase disponible');
                }
            })

            scheduleTable.appendChild(row);
            scheduleTable.appendChild(subRow);
        }

        const exampleDivForExpansion = document.createElement('div');
        exampleDivForExpansion.innerHTML = `<br><br><br><br>`;
        scheduleTable.appendChild(exampleDivForExpansion);
        scheduleTableContainer.appendChild(scheduleTable);
        mainDiv.appendChild(scheduleTableContainer);
        mainDivsContainer.appendChild(mainDiv);
        const elementsOfTheTable = scheduleTableContainer.querySelectorAll('* :not(.option):not(.sub-row)');
        elementsOfTheTable.forEach(element => {
            element.classList.add("off");
        });
    });   
    updateValueFunction();
    // idListener(0, 2, 'delete');//*OK
    
};

// module.exports = contenedorDeTablas;








