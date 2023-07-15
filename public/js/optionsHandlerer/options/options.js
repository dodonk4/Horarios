const options = (scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, tableNumber, rowNumber) => {

    const parentNode = scheduleTable;

    const lengthOfAllRowsInTheTable = Number(parentNode.querySelectorAll(`.row`).length);

    let referenceNode;

    let elementWithTheNextRowSchedule;

    let modifiedDefinitiveId;

    let elementWithTheElementWithTheNextRowSchedule;

    const isTheLastRowOrAnyOtherRow = (passCard) => {

        let lastNumberOfDefinitiveId = Number(definitiveId.split('_')[1]);
        let lastNumberOfDefinitiveIdUpdated = lastNumberOfDefinitiveId - 1;
        modifiedDefinitiveId = definitiveId.split('_')[0] + '_' + lastNumberOfDefinitiveIdUpdated;

        if(passCard === 'lastRow'){

            referenceNode = parentNode.querySelector(`#lastElement`);

            elementWithTheElementWithTheNextRowSchedule = parentNode.querySelector(`#row${modifiedDefinitiveId}`);

            elementWithTheNextRowSchedule = elementWithTheElementWithTheNextRowSchedule.querySelector('.time-cell')

        }else{

            referenceNode = parentNode.querySelector(`#row${definitiveId}`);

            elementWithTheNextRowSchedule = referenceNode.querySelector('.time-cell');

        }

        const elementWithTheNextRowScheduleHTML = elementWithTheNextRowSchedule.innerHTML;

        let nextRowSchedule = elementWithTheNextRowScheduleHTML.replace(elementWithTheNextRowSchedule.querySelector('input').outerHTML, '');//*BIEN

        nextRowSchedule = nextRowSchedule.trim();

        let lastPartSchedule

        passCard === 'lastRow' ? lastPartSchedule = '00:00' : lastPartSchedule = nextRowSchedule.slice(0, 6);

        const firstPartSchedule = newScheduleForRootRow.slice(8,13)

        const finalSchedule = `${firstPartSchedule} - ${lastPartSchedule}`;

        const newRow = document.createElement('div');

        newRow.className = 'row on';

        newRow.id = `row${definitiveId}`;

        newRow.innerHTML = htmlForCustomOption(definitiveId, finalSchedule);

        elementFromRowWhoContainsOption.innerHTML = `<input type="button" class="button-sub-row" id="button-sub-row${modifiedDefinitiveId}" value=">" style='align: left; width: 20px; height: 20px;'>${newScheduleForRootRow}`;

        parentNode.insertBefore(newRow, referenceNode);

        '';


        //AREA OF WORK FOR RESETING OPTIONS

        const elementFromRowWhoContainsOptionParent = elementFromRowWhoContainsOption.parentNode;

        // rowNumber = updateRowNumber(rowNumber, tableNumber);
        
        rowNumber = Number(elementFromRowWhoContainsOptionParent.id.split('_')[1]);


        // let firstUpdatedRowNumber = updateRowNumber(rowNumber, tableNumber);

        // firstUpdatedRowNumber === rowNumber ? '' : rowNumber = firstUpdatedRowNumber;

        const newSubRow1 = subRowGerarchy(elementFromRowWhoContainsOptionParent, tableNumber, rowNumber);

        const mainDiv = document.querySelectorAll(`.main-div`)[tableNumber];

        const subRowToBeReplaced = mainDiv.querySelectorAll(`.sub-row`)[rowNumber];//CAMBIAR NOMBRE
        
        scheduleTable.replaceChild(newSubRow1, subRowToBeReplaced);


        ///////////////

        if(passCard === 'lastRow'){

            referenceNode.remove();

            const newBr = document.createElement('br');

            newBr.id = 'lastElement';

            scheduleTable.appendChild(newBr);

        }else{
            ''
        }


        // rowNumber = updateRowNumber(rowNumber, tableNumber);//MODIFICA EL ROWNUMBER PARA QUE SEA COHERENTE CON LOS CAMBIOS DE LA SESIÓN

        idListener(tableNumber, definitiveId, 'add', true);

        const newSubRow2 = subRowGerarchy(newRow, tableNumber, (rowNumber + 1));// ESTE NUEVO SUB-ROW SERVIRÁ PARA LA SEGUNDA PARTE QUE QUEDA CUANDO SE CREA UNA FILA. POR EJEMPLO, SI HAY UN 08:00 - 08:30, ESTE SERA PARA EL 08:30 - 09:00

        let newLastNumberOfId = Number(definitiveId.split('_')[1]);
        let newLastNumberOfIdUpdated = newLastNumberOfId + 1;
        let newModifiedId = definitiveId.split('_')[0] + '_' + newLastNumberOfIdUpdated;

        let newReferenceNode = parentNode.querySelector(`#row${newModifiedId}`);

        console.log(newReferenceNode);
        parentNode.insertBefore(newSubRow2, newReferenceNode);

        idListener(tableNumber, definitiveId, 'add', false);

        rowButtonFunction(elementFromRowWhoContainsOption, tableNumber, newSubRow1, rowNumber);

        // rowNumber = updateRowNumber(rowNumber, tableNumber);

        rowButtonFunction(newRow, tableNumber, newSubRow2, (rowNumber + 1));

        debugger;

        console.log(elementFromRowWhoContainsOption);
        // console.log(elementFromRowWhoContainsOption)

        // listenerForOptions(newSubRow1, elementFromRowWhoContainsOption, scheduleTable, tableNumber, rowNumber);//ATENCIÓN CUANDO SOLO ESTE ELCUSTOM, CAPAZ DE ERROR
        // listenerForCustomOptions(newSubRow1, elementFromRowWhoContainsOption, scheduleTable, tableNumber, rowNumber);
        // listenerForOptions(newSubRow2, newRow, scheduleTable, tableNumber, (rowNumber + 1));
        // listenerForCustomOptions(newSubRow2, newRow, scheduleTable, tableNumber, (rowNumber + 1));

        customOptionsFunction(newSubRow1, elementFromRowWhoContainsOptionParent, scheduleTable, tableNumber, rowNumber);
        commonOptionsFunction(newSubRow1, elementFromRowWhoContainsOptionParent, scheduleTable, tableNumber, rowNumber);
        customOptionsFunction(newSubRow2, newRow, scheduleTable, tableNumber, rowNumber);
        commonOptionsFunction(newSubRow2, newRow, scheduleTable, tableNumber, rowNumber);
        

        //NO ESTÁ FUNCIONANDO

        // if(passCard === 'lastRow'){
        //     ''
        // }else{
        //     // debugger;
        //     let lastNumberOfId = Number(definitiveId.split('_')[1]);
        //     let lastNumberOfIdUpdated = lastNumberOfId + 1;
        //     let modifiedId = definitiveId.split('_')[0] + '_' + lastNumberOfIdUpdated;

        //     let newReferenceNode = parentNode.querySelector(`#row${modifiedId}`);
        //     parentNode.insertBefore(newSubRow2, newReferenceNode);
        // }

    }

    if (Number(definitiveId.split('_')[1]) === lengthOfAllRowsInTheTable - 1) {

        console.log('lastRow');

        isTheLastRowOrAnyOtherRow('lastRow');

    } else {
        
        console.log('commonRow');

        isTheLastRowOrAnyOtherRow('commonRow');

    }

    
    //"elementWithTheNextRowSchedule" is the next row which isn't modified
}
