const forAdd = (exactArray, string, changedId, tableNumber) => {
    let positionOfNewElement;

    if (string === 'horarios') {

        // console.log(changedId);
        //*EL CHANGEID ES EL DE LA FILA BAJO LA ORIGINAL. LA MINIMA ES O_1, NO 0_0

        positionOfNewElement = changedId.split("_")[1];

        console.log(`PositionOfNewElement en celdas Horarios:` + positionOfNewElement)

    }else{
        
        positionOfNewElement = changedId.split("_")[1];

        console.log(`PositionOfNewElement en Rows o Buttons:` + positionOfNewElement)

    }

    //*EL +1 BUSCA LA POSICIÓN BAJO LA NUEVA FILA CREADA
    for (let i = (Number(positionOfNewElement) + 1); i < exactArray.length; i++) {

        if(string != `horarios`){

            exactArray[i].id = `${string}${tableNumber}_${i}`;


        // }else{
        //     console.log(exactArray[i]);

        //     const firstPartOfTheInputId = exactArray[i].id.split("_")[0]; 

        //     const lastPartOfTheInputId = exactArray[i].id.split("_")[1];

        //     const cellNumberOfTheInputId = lastPartOfTheInputId.split(".")[1];

        //     const tableNumberOfTheInputId = lastPartOfTheInputId.split(".")[0];

        //     exactArray[i].id = `${firstPartOfTheInputId}_${Number(tableNumberOfTheInputId) + 1}.${cellNumberOfTheInputId}`;

        }

    }
   
    if (string === `horarios`) {
        // exactArray.find()
        exactArray.splice(0, Number(positionOfNewElement)*7);

        console.log(exactArray);

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