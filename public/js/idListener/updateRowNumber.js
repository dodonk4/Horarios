const updateRowNumber = (rowNumber, tableNumber) => {
    
    // idChangedCount > 0 ? '' : break;
    let idChangedCount = sessionStorage.getItem('idChangedCountArray');
    

    if(idChangedCount.length > 0){
        idChangedCount = JSON.parse(idChangedCount);
        for (let i = 0; i < idChangedCount.length; i++) {//REVISAR Y PRESTARLE ATENCIÓN A COMPORTAMIENTO DEL +1
            const operationType = Number(idChangedCount[i].split('_')[0]);
            const codeTableNumber = Number(idChangedCount[i].split('_')[1]);
            const originId = Number(idChangedCount[i].split('_')[2]);
            //ORDER NUMBER ES ÚNICAMENTE PARA GUIARSE EN EL RARO CASO QUE SE MEZCLEN

            if(codeTableNumber === tableNumber){
                if (operationType === 0){
                    rowNumber <= originId ? rowNumber-- : '';
                }else if (operationType === 1){
                    rowNumber >= originId ? rowNumber++ : '';
                }else{
                    console.error('Wrong Operation Type');
                }
            }else{
                console.info('The tableNumber is different from the codeTableNumber')
            }
            
        }
    }else{
        ''
    }

    return rowNumber;
}