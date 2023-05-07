const commonOptions = (rowWhoContainsOption, scheduleTable, noInput, i, x, ii) => {
    const substractOfId = rowWhoContainsOption.querySelector('.button-sub-row').id.replace('button-sub-row', '');
    const newScheduleForRootRow = noInput.slice(0, 8) + noInput.slice(0,2) + `:${i}`;
    const newRow = document.createElement('div');
    newRow.className = '';
    newRow.innerHTML = htmlForCommonOption(substractOfId, newScheduleForRootRow);
    //hacer un insertBefore para que la div 
    // parentNode
    const parentNode = scheduleTable;
    // idListener(x, 2, 'delete');   

    //!ESTO TODAVIÍA NO ESTÁ APLICADO. ÚNICAMENTE EL CUSTOM ESTÁ AP´LICADO
}
