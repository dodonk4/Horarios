const options = (scheduleTable, elementFromRowWhoContainsOption, newScheduleForRootRow, definitiveId, tableNumber, ii) => {

    const parentNode = scheduleTable;

    const lengthOfAllRowsInTheTable = Number(parentNode.querySelectorAll(`.row`).length);

    let referenceNode;

    let elementWithTheNextRowSchedule;

    let modifiedDefinitiveId;

    let elementWithTheElementWithTheNextRowSchedule;

    const isTheLastRowOrAnyOtherRow = (passCard) => {

        modifiedDefinitiveId = definitiveId.slice(0, -2) + '_' + (Number(definitiveId.split('_')[1]) - 1);

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

        if(passCard === 'lastRow'){

            referenceNode.remove();

            const newBr = document.createElement('br');

            newBr.id = 'lastElement';

            scheduleTable.appendChild(newBr);

        }else{
            ''
        }

        idListener(tableNumber, definitiveId, 'add');

    }

    if (Number(definitiveId.split('_')[1]) === lengthOfAllRowsInTheTable - 1) {

        console.log('lastRow');

        isTheLastRowOrAnyOtherRow('lastRow');

    } else {
        
        console.log('commonRow');

        isTheLastRowOrAnyOtherRow('commonRow');

    }
}