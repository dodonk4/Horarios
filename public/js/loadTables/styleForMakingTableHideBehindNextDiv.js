const styleForMakingTableHideBehindNextDiv = (scheduleTable) => {
    const br = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');
    br.innerHTML = `<br>`;
    br2.innerHTML = `<br>`;
    br3.innerHTML = `<br>`;

    scheduleTable.appendChild(br);
    scheduleTable.appendChild(br2);
    scheduleTable.appendChild(br3);
}