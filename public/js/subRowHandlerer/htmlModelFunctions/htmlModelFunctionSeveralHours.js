const htmlModelFunctionSeveralHours = (lastId, lastMinutes, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart) => {
    const htmlModel = `<div class="option off2" id="option_${tableNumber}_${rowNumber}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
    return htmlModel;
}