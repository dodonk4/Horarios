const decition = (subRowFirstHour, tableNumber, rowNumber, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
       
    // if(firstTwoDigitsSecondPart === '00'){

    // }

    if (restOfSchedules < 100) {
        less(subRowFirstHour, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }else if (restOfSchedules === 100) {
        equal(subRowFirstHour, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }else if (restOfSchedules > 100) {
        greater(subRowFirstHour, tableNumber, rowNumber, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }
    

    // console.log(subRowFirstHour);
    return subRowFirstHour;
}