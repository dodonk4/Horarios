const htmlModelFunctionCustomSeveral = (lastId, tableNumber, rowNumber) => {

    const lastInputLastPart = document.createElement('input')
    lastInputLastPart.className = 'inputForOptions'; //VER SI PONERLE "ON" O NO
    lastInputLastPart.type = 'number';
    const htmlModel = `<div class="option off2 custom" id="option_${tableNumber}_${rowNumber}.${lastId}"><input class="inputForOptions" type="number">:<input class="inputForOptions" type="number"> - <input class="inputForOptions" type="number">:<input class="inputForOptions" type="number"></div>`;
    return htmlModel;
}