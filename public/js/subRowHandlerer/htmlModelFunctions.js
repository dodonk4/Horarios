// // const firstPart = variables([0]);
// // const firstTwoDigitsFirstPart = variables([1])
// // const firstTwoDigitsSecondPart = variables([2])
// // const lastTwoDigitsFirstPart = variables([3])
// // const lastTwoDigitsSecondPart = variables([4])


// const htmlModelFunction = (lastId, lastMinutes, limit, x, ii) => {
//     if(lastMinutes > limit){
//         return false
//     }
//     const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
//     return htmlModel;
// }

// const htmlModelFunctionSeveralHours = (lastId, lastMinutes, x, ii) => {
//     const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
//     return htmlModel;
// }

// const htmlModelFunction_no_limit = (lastId, lastMinutes, x, ii) => {

//     const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
//     return htmlModel;
// }

// const htmlModelFor = (lastId, x, ii) => {

//     const condition = (i) => {
        
//         const lengthOfAcumulation = String(Number(firstTwoDigitsFirstPart) + i).length;

//             if (lengthOfAcumulation > 1) {
//                 const result = Number(firstTwoDigitsFirstPart) + i;
//                 return result;
//             } else {
//                 const result = `0${Number(firstTwoDigitsFirstPart) + i}`;
//                 return result;
//             }
    
//     }
        
//     let restOfSchedulesContainer = restOfSchedules;
//     console.log(restOfSchedulesContainer);
//     let hoursOfRestOfSchedules = Number(String(restOfSchedules).slice(0,1)); // CHECK
//     let htmlModel = ``;



//     let conditionOfFor = lastTwoDigitsSecondPart != '00' ? hoursOfRestOfSchedules : hoursOfRestOfSchedules =- 1;

//     lastId === 0 ? conditionOfFor += 1 : "";

//     console.log(conditionOfFor);


//     for (let i = 0; i <= conditionOfFor; i++) {

//         let newId = lastId;
//         newId += i;

//         const firstCondition = condition(i) > firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i);
//         const secondCondition = newId != lastId ? '00' : lastTwoDigitsFirstPart;
//         const thirdCondition =  condition(i+1) > firstTwoDigitsSecondPart ? firstTwoDigitsSecondPart : condition(i+1);
//         const fourthCondition = condition(i+1) > firstTwoDigitsSecondPart ? lastTwoDigitsSecondPart : '00';

//         let htmlInsertion = `<div class="option off2" id="option_${x-1}_${ii}.${lastId  + i}">${firstCondition}:${secondCondition} - ${thirdCondition}:${fourthCondition}</div>`;
//         htmlModel += htmlInsertion;
        

//         restOfSchedulesContainer -= 100;
        
//     }

//     const htmlModelCustom = (lastId, x, ii) => {

//         const lastInputLastPart = document.createElement('input')
//         lastInputLastPart.className = 'inputForOptions'; //VER SI PONERLE "ON" O NO
//         lastInputLastPart.type = 'number';

//         const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastInputLastPart}</div>`;
//         return htmlModel;
//     }
//     return htmlModel;
// }