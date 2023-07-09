sessionStorage.setItem('idChangedCountArray', '');

const idChangeAccount = (originId, operationType, tableNumber) => {
    let idChangedCount = sessionStorage.getItem('idChangedCountArray');

    idChangedCount === '' ? idChangedCount = [] : idChangedCount = JSON.parse(idChangedCount);


    const operationOrderNumber = idChangedCount.length;

    operationType === 'add' ? operationType = 1 : operationType = 0;

    const code = `${operationType}_${tableNumber}_${Number(originId.split('_')[1])-1}_${operationOrderNumber}`;

    idChangedCount.push(code);
    idChangedCount = JSON.stringify(idChangedCount);

    sessionStorage.setItem('idChangedCountArray', idChangedCount)
}