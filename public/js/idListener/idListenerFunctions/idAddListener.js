const forAdd = (exactArray, string, changedId, tableNumber) => {
    //*OBJETIVO: Al crear una nueva fila, se tiene que corregir los ID.


    for (let i = newChangedId; i < exactArray.length; i++) {
        const element = exactArray[i];
        element.id = `${string}${tableNumber}_${i + 1}`
    }
    

    
    //ACA SE AGREGA NUEVA FILA//
    
    console.log(exactArray);
}