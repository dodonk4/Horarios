const htmlModelFunction = (lastId, lastMinutes, limit, tableNumber, rowNumber, firstPart, firstTwoDigitsFirstPart) => {
    if(lastMinutes >= limit && limit != '00'){
        return false
    }
    const htmlModel = `<div class="option off2" id="option_${tableNumber}_${rowNumber}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
    return htmlModel;
}