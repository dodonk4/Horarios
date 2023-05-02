const htmlForAddTable = () => {
    const html = `<div class="schedule-table">
    <div class="row header-row">
        <div class="cell time-cell"></div>
        <div class="cell">Lunes</div>
        <div class="cell">Martes</div>
        <div class="cell">Miércoles</div>
        <div class="cell">Jueves</div>
        <div class="cell">Viernes</div>
        <div class="cell">Sábado</div>
        <div class="cell">Domingo</div>
    </div>
    <div class="row">
        <div class="cell time-cell">08:00 - 09:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">09:00 - 10:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">10:00 - 11:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">11:00 - 12:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">12:00 - 13:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">13:00 - 14:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">14:00 - 15:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">15:00 - 16:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">16:00 - 17:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">17:00 - 18:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">18:00 - 19:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">19:00 - 20:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">20:00 - 21:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">21:00 - 22:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">22:00 - 23:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
    <div class="row">
        <div class="cell time-cell">23:00 - 00:00</div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
        <div class="cell"><input type="text" class="cell-input" placeholder="..." id="horarios-example"></div>
    </div>
</div>`;
    return html
}