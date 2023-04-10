const commonOptions = (rowWhoContainsOption, scheduleTable, noInput, i) => {
    const substractOfId = rowWhoContainsOption.querySelector('.button-sub-row').id.replace('button-sub-row', '');
    const newScheduleForRootRow = noInput.slice(0, 8) + noInput.slice(0,2) + `:${i}`;
    const newRow = document.createElement('div');
    newRow.className = '';
    newRow.innerHTML = `
    <div class="cell time-cell">
    <input type="button" class="button-sub-row" id="button-sub-row${substractOfId}" value=">" style='align: left; width: 20px; height: 20px;'>${newScheduleForRootRow}</div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.0" value=""></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.1" value=""></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.2" value=""></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.3" value=""></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.4" value=""></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.5" value=""></div>
    <div class="cell"><input type="text" placeholder="..." id="horarios${substractOfId}.6" value=""></div>
    `
    console.log(newRow);
    //hacer un insertBefore para que la div 
    // parentNode
    const parentNode = scheduleTable;
    console.log(parentNode);        
}
