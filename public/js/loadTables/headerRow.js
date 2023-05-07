const headerRowFunction = () =>{
    const headerRow = document.createElement('div');
    headerRow.innerHTML = `<div class="cell time-cell"></div>
        <div class="cell day">Lunes</div>
        <div class="cell day">Martes</div>
        <div class="cell day">Miércoles</div>
        <div class="cell day">Jueves</div>
        <div class="cell day">Viernes</div>
        <div class="cell day">Sábado</div>
        <div class="cell day">Domingo</div>`;
    headerRow.className = 'row header-row';
    return headerRow;
}