const forAdd = (exactArray, string, changedId, tableNumber) => {
    let positionOfNewElement;

    if (string === 'horarios') {

        //*EL CHANGEID ES EL DE LA FILA BAJO LA ORIGINAL. LA MINIMA ES O_1, NO 0_0
        //PERO ESTO DE ABAJO ES LO MISMO
        //?????????????????????
        
        positionOfNewElement = changedId.split("_")[1];

    }else{
        
        positionOfNewElement = changedId.split("_")[1];

    }

    // debugger;

    //*EL +1 BUSCA LA POSICIÓN BAJO LA NUEVA FILA CREADA
    for (let i = (Number(positionOfNewElement) + 1); i < exactArray.length; i++) {

        if(string != `horarios`){

            exactArray[i].id = `${string}${tableNumber}_${i}`;
            
        }

    }//ESTO NO ESTABA AFECTANDO A NADA

    
   
    if (string === `horarios`) {

        exactArray.splice(0, Number(positionOfNewElement)*7);

        for (let i = 0; i < exactArray.length; i++) {

            const firstPartOfTheInputId = exactArray[i].id.split("_")[0]; 

            const lastPartOfTheInputId = exactArray[i].id.split("_")[1];

            const cellNumberOfTheInputId = lastPartOfTheInputId.split(".")[1];

            const tableNumberOfTheInputId = lastPartOfTheInputId.split(".")[0];

            exactArray[i].id = `${firstPartOfTheInputId}_${Number(tableNumberOfTheInputId) + 1}.${cellNumberOfTheInputId}`;

        }
    } else {
        
    }

}