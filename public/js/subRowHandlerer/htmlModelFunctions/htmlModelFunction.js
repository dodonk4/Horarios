const htmlModelFunction = (lastId, lastMinutes, limit, x, ii, firstPart, firstTwoDigitsFirstPart) => {
    if(lastMinutes > limit){
        return false
    }
    const htmlModel = `<div class="option off2" id="option_${x}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
    return htmlModel;
}