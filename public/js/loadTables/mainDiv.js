const mainDivFunction = (tableNumber) => {
    const mainDiv = document.createElement(`div`);
    mainDiv.id = `main-div-${tableNumber}`;
    mainDiv.className = 'main-div';
    return mainDiv;
}