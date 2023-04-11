const htmlForCommonOption = (substractOfId, newScheduleForRootRow) => {
    const html = `
    <div class="cell time-cell">
    <input type="button" class="button-sub-row" id="button-sub-row${substractOfId}" value=">" style='align: left; width: 20px; height: 20px;'>${newScheduleForRootRow}</div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.0" value="" class="on"></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.1" value="" class="on"></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.2" value="" class="on"></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.3" value="" class="on"></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.4" value="" class="on"></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.5" value="" class="on"></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.6" value="" class="on"></div>
    `
    return html
}