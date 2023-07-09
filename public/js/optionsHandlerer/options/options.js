const options = (scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, tableNumber, rowNumber) => {

    const parentNode = scheduleTable;

    const lengthOfAllRowsInTheTable = Number(parentNode.querySelectorAll(`.row`).length);

    let referenceNode;

    let elementWithTheNextRowSchedule;

    let modifiedDefinitiveId;

    let elementWithTheElementWithTheNextRowSchedule;

    const isTheLastRowOrAnyOtherRow = (passCard) => {

        // modifiedDefinitiveId = definitiveId.slice(0, -2) + '_' + (Number(definitiveId.split('_')[1]) - 1);

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


        //AREA OF WORK FOR RESETING OPTIONS


        console.log('These are the objectives: ');
        const elementFromRowWhoContainsOptionParent = elementFromRowWhoContainsOption.parentNode;
        console.log(elementFromRowWhoContainsOptionParent.querySelector('.sub-row'));
        console.log(elementFromRowWhoContainsOptionParent, newRow);

        let newSubRow1 = subRowGerarchy(elementFromRowWhoContainsOptionParent, tableNumber, rowNumber);

        let anySubRow_testingTool = document.querySelectorAll(`.sub-row`)[rowNumber];

        

        scheduleTable.replaceChild(newSubRow1, anySubRow_testingTool);

        console.log(newSubRow1);
        

        // debugger;

        
        
        let newSubRow2 = subRowGerarchy(newRow, 0, 0);

        console.log(newSubRow2);


        //*This is form rowSpawning/index.js. Adapt it, it may help a lot

        // let subRow = subRowGerarchy(row, tableNumber, i);

        // customOptionsFunction(subRow, row, scheduleTable, tableNumber, i);
        // commonOptionsFunction(subRow, row, scheduleTable, tableNumber, i);
        
        

        // rowButtonFunction(row, tableNumber, subRow, i);


        // scheduleTable.appendChild(row);
        // scheduleTable.appendChild(subRow);

        ///////////////

        if(passCard === 'lastRow'){

            referenceNode.remove();

            const newBr = document.createElement('br');

            newBr.id = 'lastElement';

            scheduleTable.appendChild(newBr);

        }else{
            ''
        }

        console.log('here must be the reset to erase the original options and add new ones.');
        /*
         *optionsReseter(options)
         * 
        */

        debugger;

        rowNumber = updateRowNumber(rowNumber, tableNumber);//MODIFICA EL ROWNUMBER PARA QUE SEA COHERENTE CON LOS CAMBIOS DE LA SESIÓN

        idListener(tableNumber, definitiveId, 'add');

        rowButtonFunction(elementFromRowWhoContainsOption, tableNumber, newSubRow1, rowNumber);

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