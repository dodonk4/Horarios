const htmlModelFunctionSeveralHours = (lastId, lastMinutes, x, ii, firstPart, firstTwoDigitsFirstPart) => {
    const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastMinutes}</div>`;
    return htmlModel;
}