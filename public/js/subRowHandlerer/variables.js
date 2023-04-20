const variables = (element) => {
    const scheduleRaw = obtainSchedulesFromHtmlElement(element, '.time-cell');

    const firstPart = scheduleRaw.slice(0, 5);
    const firstTwoDigitsFirstPart = scheduleRaw.slice(0, 2);
    const firstTwoDigitsSecondPart = scheduleRaw.slice(8, 10);
    const lastTwoDigitsFirstPart = scheduleRaw.slice(3, 5);
    const lastTwoDigitsSecondPart = scheduleRaw.slice(11, 13);

    const finalArray = [firstPart, firstTwoDigitsFirstPart, firstTwoDigitsSecondPart, lastTwoDigitsFirstPart, lastTwoDigitsSecondPart];

    return finalArray;
};