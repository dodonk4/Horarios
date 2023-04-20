const htmlModelFor = (lastId,  x, ii, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart, restOfSchedules) => {

    const condition = (i) => {
        
        const lengthOfAcumulation = String(Number(firstTwoDigitsFirstPart) + i).length;

            if (lengthOfAcumulation > 1) {
                const result = Number(firstTwoDigitsFirstPart) + i;
                return result;
            } else {
                const result = `0${Number(firstTwoDigitsFirstPart) + i}`;
                return result;
            }
    
    }
        
    let restOfSchedulesContainer = restOfSchedules;
    console.log(restOfSchedulesContainer);
    let hoursOfRestOfSchedules = Number(String(restOfSchedules).slice(0,1)); // CHECK
    let htmlModel = ``;



    let conditionOfFor = lastTwoDigitsSecondPart != '00' ? hoursOfRestOfSchedules : hoursOfRestOfSchedules =- 1;

    lastId === 0 ? conditionOfFor += 1 : "";

    console.log(conditionOfFor);


    for (let i = 0; i <= conditionOfFor; i++) {

        let newId = lastId;
        newId += i;

        const firstCondition = condition(i) > firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i);
        const secondCondition = newId != lastId ? '00' : lastTwoDigitsFirstPart;
        const thirdCondition =  condition(i+1) > firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i+1);
        const fourthCondition = condition(i+1) > firstTwoDigitsSecondPart ? lastTwoDigitsSecondPart : '00';

        let htmlInsertion = `<div class="option off2" id="option_${x-1}_${ii}.${lastId  + i}">${firstCondition}:${secondCondition} - ${thirdCondition}:${fourthCondition}</div>`;
        htmlModel += htmlInsertion;
        

        restOfSchedulesContainer -= 100;
        
    }
    return htmlModel;
}