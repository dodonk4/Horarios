const htmlModelFunctionCustomSeveral = (lastId, x, ii) => {

    const lastInputLastPart = document.createElement('input')
    lastInputLastPart.className = 'inputForOptions'; //VER SI PONERLE "ON" O NO
    lastInputLastPart.type = 'number';
    const htmlModel = `<div class="option off2 custom" id="option_${x-1}_${ii}.${lastId}"><input class="inputForOptions" type="number">:<input class="inputForOptions" type="number"> - <input class="inputForOptions" type="number">:<input class="inputForOptions" type="number"></div>`;
    return htmlModel;
}