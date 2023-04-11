const customOptions = (scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, x, ii) => {
        const parentNode = scheduleTable;
        const referenceNode = parentNode.querySelector(`#row${definitiveId}`);

        const elementWithTheNextRowSchedule = referenceNode.querySelector('.time-cell');
        const elementWithTheNextRowScheduleHTML = elementWithTheNextRowSchedule.innerHTML;
        let nextRowSchedule = elementWithTheNextRowScheduleHTML.replace(elementWithTheNextRowSchedule.querySelector('input').outerHTML, '');
        nextRowSchedule = nextRowSchedule.trim();
        const lastPartSchedule = nextRowSchedule.slice(0, 6);
        const firstPartSchedule = newScheduleForRootRow.slice(8,13)
        const finalSchedule = `${firstPartSchedule} - ${lastPartSchedule}`;

        // console.log(finalSchedule);
        const newRow = document.createElement('div');
        newRow.className = 'row on';
        newRow.id = `row_${definitiveId}`;
        newRow.innerHTML = htmlForCustomOption(definitiveId, finalSchedule);
        // console.log(definitiveId);
        elementFromRowWhoContainsOption.innerHTML = `<input type="button" class="button-sub-row" id="button-sub-row${definitiveId}" value=">" style='align: left; width: 20px; height: 20px;'>${newScheduleForRootRow}`;
        // console.log(elementFromRowWhoContainsOption);

        //Acá tendría que ir una función para borrar la subfila y agregar una nueva en relación al horario de la fila
        //Sería:
        subRowGerarchy(elementFromRowWhoContainsOption.parentNode, x, ii);
        subRowGerarchy(newRow, x, ii);

        parentNode.insertBefore(newRow, referenceNode);
        
    }
