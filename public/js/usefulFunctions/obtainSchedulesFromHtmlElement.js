//Remember that this code works only for rows with inputs messing around
const obtainSchedulesFromHtmlElement = (element, selector) => {
    if (element.querySelector(`${selector}`)){
        const contentSelected = element.querySelector(`${selector}`);
        const contentSelectedHTML = contentSelected.innerHTML;
        let result = contentSelectedHTML.replace(contentSelected.querySelector('input').outerHTML, '');
        result = result.trim();
        return result
    }else{
        const contentSelectedHTML = element.innerHTML;
        let result = contentSelectedHTML.replace(element.querySelector('input').outerHTML, '');
        result = result.trim();
        return result;
    }
}
    

    