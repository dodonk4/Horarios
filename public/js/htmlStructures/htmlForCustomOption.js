const htmlForCustomOption = (definitiveId, finalSchedule) => {
    const html = `
    <input type="button" class="delete-row-button" id="delete-row-button${definitiveId}" value="X"></input>
    <div class="cell time-cell on">
    <input type="button" class="button-sub-row on" id="button-sub-row${definitiveId}" value=">" style='align: left; width: 20px; height: 20px;'>${finalSchedule}</div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.0" value="" class="on"></div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.1" value="" class="on"></div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.2" value="" class="on"></div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.3" value="" class="on"></div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.4" value="" class="on"></div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.5" value="" class="on"></div>
    <div class="cell on"><input type="text" placeholder="..." id="horarios${definitiveId}.6" value="" class="on"></div>
    `;
    return html
}