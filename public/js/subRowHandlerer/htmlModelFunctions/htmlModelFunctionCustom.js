const htmlModelCustom = (lastId, x, ii, firstPart, firstTwoDigitsFirstPart) => {

    const lastInputLastPart = document.createElement('input')
    lastInputLastPart.className = 'inputForOptions'; //VER SI PONERLE "ON" O NO
    lastInputLastPart.type = 'number';

    const htmlModel = `<div class="option off2" id="option_${x-1}_${ii}.${lastId}">${firstPart} - ${firstTwoDigitsFirstPart}:${lastInputLastPart}</div>`;
    return htmlModel;
}