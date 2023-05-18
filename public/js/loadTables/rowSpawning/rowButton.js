const rowButtonFunction = (row, tableNumber, subRow, i) => {
    const rowButton = row.querySelector(`#button-sub-row${tableNumber}_${i}`);
        const subRowElements = subRow.querySelectorAll('*');
        rowButton.addEventListener('click', () =>{
            if (subRow.classList.contains('off2')) {
                subRow.classList.remove('off2');
                subRow.classList.add('on2');
                subRowElements.forEach(element => {
                    element.classList.remove('off2');
                    element.classList.add('on2');
                });
            } else if (subRow.classList.contains('on2')) {
                subRow.classList.remove('on2');
                subRow.classList.add('off2');
                subRowElements.forEach(element => {
                    element.classList.remove('on2');
                    element.classList.add('off2');
                });
            } else{
                console.error('No hay cambio de clase disponible');
            }
        })
 
}