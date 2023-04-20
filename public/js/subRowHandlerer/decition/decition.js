const decition = (subRowFirstHour, x, ii, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart) => {
        
    if (restOfSchedules < 100) {
        less(subRowFirstHour, x, ii, firstPart, firstTwoDigitsFirstPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }


    if (restOfSchedules === 100) {
        equal(subRowFirstHour, x, ii, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }

    if (restOfSchedules > 100) {
        greater(subRowFirstHour, x, ii, restOfSchedules, firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart);
    }
    console.log(subRowFirstHour);
}