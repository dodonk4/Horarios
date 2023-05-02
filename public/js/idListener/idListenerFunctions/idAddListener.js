const forAdd = (exactArray, string, changedId, tableNumber, parentNode) => {
    // const newElement = document.createElement('div');
    // newElement.class = `row`;
    // newElement.id = `${string}${tableNumber}_${newChangedId}`;//ES + 1 PORQUE TOMA QUE SE CREA BAJO EL 2

    // parentNode.insertBefore(newRow, referenceNode);
    console.log(parentNode);

    const newChangedId = changedId + 1;
    // console.log(exactArray.length - newChangedId);

    for (let i = newChangedId; i < exactArray.length; i++) {
        const element = exactArray[i];
        element.id = `${string}${tableNumber}_${i + 1}`
    }
    

    
    //ACA SE AGREGA NUEVA FILA//
    
    console.log(exactArray);
}