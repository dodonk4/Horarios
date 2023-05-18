const customOptions = (scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, tableNumber, ii) => {
        const parentNode = scheduleTable;

        console.log('DefinitiveId es: ' + definitiveId);
        

        const lengthOfAllRowsInTheTable = Number(parentNode.querySelectorAll(`.row`).length);

        console.log('LengthOfAllRowsInTheTable es: ' + lengthOfAllRowsInTheTable);

        let referenceNode;

        if (Number(definitiveId.split('_')[1]) === lengthOfAllRowsInTheTable - 1) {
            //Se crea la fila por arriba del br
            referenceNode = parentNode.querySelector(`#lastElement`);

            console.log('ReferenceNode es: ' + referenceNode)

            //AGARRO UN ROW CON DEFINITIVE ID ANTERIOR PARA TRABAJAR EL HORARIO Y DARSELO A LA NUEVA FILA
            const modifiedDefinitiveId = definitiveId.slice(0, -2) + (Number(definitiveId.split('_')[1]) - 1);

            console.log('ModifiedDefinitiveId es: ' + modifiedDefinitiveId);

            const elementWithTheElementWithTheNextRowSchedule = parentNode.querySelector(`#row${modifiedDefinitiveId}`);

            console.log(elementWithTheElementWithTheNextRowSchedule);

            const elementWithTheNextRowSchedule = elementWithTheElementWithTheNextRowSchedule.querySelector('.time-cell');

            console.log(elementWithTheNextRowSchedule);

            const elementWithTheNextRowScheduleHTML = elementWithTheNextRowSchedule.innerHTML;
            let nextRowSchedule = elementWithTheNextRowScheduleHTML.replace(elementWithTheNextRowSchedule.querySelector('input').outerHTML, '');
            nextRowSchedule = nextRowSchedule.trim();
            const lastPartSchedule = '00:00';
            const firstPartSchedule = newScheduleForRootRow.slice(8,13)
            const finalSchedule = `${firstPartSchedule} - ${lastPartSchedule}`;

            console.log(finalSchedule);

            const newRow = document.createElement('div');
            newRow.className = 'row on';
            newRow.id = `row${definitiveId}`;
            newRow.innerHTML = htmlForCustomOption(definitiveId, finalSchedule);

            elementFromRowWhoContainsOption.innerHTML = `<input type="button" class="button-sub-row" id="button-sub-row${definitiveId}" value=">" style='align: left; width: 20px; height: 20px;'>${newScheduleForRootRow}`;

            parentNode.insertBefore(newRow, referenceNode);

            referenceNode.remove();

            const newBr = document.createElement('br');
            newBr.id = 'lastElement';
            scheduleTable.appendChild(newBr);

            idListener(tableNumber, definitiveId, 'add')
        } else {
            //Se usa el procedimiento normal
            referenceNode = parentNode.querySelector(`#row${definitiveId}`);

            const elementWithTheNextRowSchedule = referenceNode.querySelector('.time-cell');
            const elementWithTheNextRowScheduleHTML = elementWithTheNextRowSchedule.innerHTML;
            let nextRowSchedule = elementWithTheNextRowScheduleHTML.replace(elementWithTheNextRowSchedule.querySelector('input').outerHTML, '');
            nextRowSchedule = nextRowSchedule.trim();
            const lastPartSchedule = nextRowSchedule.slice(0, 6);
            const firstPartSchedule = newScheduleForRootRow.slice(8,13)
            const finalSchedule = `${firstPartSchedule} - ${lastPartSchedule}`;

            const newRow = document.createElement('div');
            newRow.className = 'row on';
            newRow.id = `row${definitiveId}`;
            newRow.innerHTML = htmlForCustomOption(definitiveId, finalSchedule);

            elementFromRowWhoContainsOption.innerHTML = `<input type="button" class="button-sub-row" id="button-sub-row${definitiveId}" value=">" style='align: left; width: 20px; height: 20px;'>${newScheduleForRootRow}`;

            parentNode.insertBefore(newRow, referenceNode);
            //ACÁ TIENE QUE IR LA MODIFICACIÓN DE ID:

            idListener(tableNumber, definitiveId, 'add')

        }
    }
