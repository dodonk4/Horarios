const rowFunction = (table, tableNumber, i) => {
    let row = document.createElement('div');
    row.className = 'row';
    row.id = `row${tableNumber}_${i}`;

    row.innerHTML= `
        <div class="cell time-cell">
        <input type="button" class="button-sub-row" id="button-sub-row${tableNumber}_${i}" value=">" style='align: left; width: 20px; height: 20px;'></input>${table.rows.find(celda=> celda.celda_scndid === -(i+1) + '.0')['celda_value']}</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.0" value="${table.rows.find(celda=> celda.celda_scndid === i + '.0')['celda_value']}"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.1" value="${table.rows.find(celda=> celda.celda_scndid === i + '.1')['celda_value']}"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.2" value="${table.rows.find(celda=> celda.celda_scndid === i + '.2')['celda_value']}"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.3" value="${table.rows.find(celda=> celda.celda_scndid === i + '.3')['celda_value']}"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.4" value="${table.rows.find(celda=> celda.celda_scndid === i + '.4')['celda_value']}"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.5" value="${table.rows.find(celda=> celda.celda_scndid === i + '.5')['celda_value']}"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios${tableNumber}_${i}.6" value="${table.rows.find(celda=> celda.celda_scndid === i + '.6')['celda_value']}"></div>
        
    `;
    return row;
}