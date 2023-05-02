const forDelete = (exactArray, string, changedId, tableNumber) => {
    for (let i = changedId; i < exactArray.length; i++) {
        if(exactArray[i] === exactArray[changedId]){
            const element = exactArray[i];
            // element.remove();
            const parentElement = exactArray[i].parentElement;
            element.id = `${string}${tableNumber}_deleted`;
            parentElement.removeChild(exactArray[i]);

            // console.log(exactArray[i]);
            // element.id = `${string}${tableNumber}_deleted`
        }else{
            const element = exactArray[i];
            element.id = `${string}${tableNumber}_${i-1}`
        }
        
    }
    console.log(exactArray);
}