const decition = (subRowFirstHour, x, ii, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
       
    // if(firstTwoDigitsSecondPart === '00'){

    // }

    if (restOfSchedules < 100) {
        less(subRowFirstHour, x, ii, firstPart, firstTwoDigitsFirstPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }else if (restOfSchedules === 100) {
        equal(subRowFirstHour, x, ii, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }else if (restOfSchedules > 100) {
        greater(subRowFirstHour, x, ii, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }
    

    // console.log(subRowFirstHour);
    return subRowFirstHour;
}