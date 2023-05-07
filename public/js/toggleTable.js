const quantityOfTables2 = () => {
  fetch('/howManyTables')
  .then(response => response.json())
  .then(data => {


      showMainDivs2(data);
      
    
    
  })
  .catch(error => console.error(error));

};
let mainDivsContainerLength2;

  const showMainDivs2 = (data) => {
      // mainDivsContainerLength2 = data[0]['COUNT(*)'];MySql
      mainDivsContainerLength2 = data;
      return mainDivsContainerLength2;
  }
 
  quantityOfTables2();

const toggleTable = (buttonId, tableId) => {
  const toggleTableButton = document.getElementById(buttonId);
  const tableContainer = document.getElementById(tableId);      
  toggleTableButton.addEventListener("click", function() {
    if (tableContainer.classList.contains("table-hidden")) {
      tableContainer.classList.remove("table-hidden");
      tableContainer.classList.add("table-show");
    } else {
      tableContainer.classList.remove("table-show");
      tableContainer.classList.add("table-hidden");
    }
  });
}

const callsToToggleTable = () =>{
  for (let i = 0; i < mainDivsContainerLength2; i++) {
    toggleTable(`toggle-table-button${i}`, `schedule-table-container${i}`);
  }
}

callsToToggleTable();