// Cargar los archivos necesarios
const filesToLoad = [
    'usefulFunctions/obtainSchedulesFromHtmlElement.js',
    'usefulFunctions/restScheduleFunction.js',
    'subRowHandlerer/variables.js',
    'subRowHandlerer/htmlModelFunctions/htmlModelFunction.js',
    'subRowHandlerer/htmlModelFunctions/htmlModelFunctionSeveralHours.js',
    'subRowHandlerer/htmlModelFunctions/htmlModelFunctionFor.js',
    'subRowHandlerer/htmlModelFunctions/htmlModelFunctionsCustom/htmlModelFunctionCustomSingular.js',
    'subRowHandlerer/htmlModelFunctions/htmlModelFunctionsCustom/htmlModelFunctionCustomSeveral.js',
    'subRowHandlerer/decition/less.js',
    'subRowHandlerer/decition/equal.js',
    'subRowHandlerer/decition/greater.js',
    'subRowHandlerer/decition/decition.js',
    'subRowHandlerer/subRowGerarchy.js',
    'sqlStructure/sqlForNewTable.js',
    'htmlStructures/htmlForCustomOption.js',
    'htmlStructures/htmlForCommonOption.js',
    'htmlStructures/htmlForAddTable.js',
    'subRowHandlerer/testingGerarchy.js',
    'optionsHandlerer/options/customOption.js',
    'optionsHandlerer/options/commonOption.js',
    'optionsHandlerer/forForOptions/forForCommonOptions.js',
    'optionsHandlerer/forForOptions/forForCustomOptions.js',
    'optionsHandlerer/optionButtons.js',
    'updateValue.js',
    'loadTables/rowSpawning/rowButton.js',
    'loadTables/rowSpawning/customOptions.js',
    'loadTables/rowSpawning/commonOptions.js',
    'loadTables/rowSpawning/row.js',
    'loadTables/rowSpawning/index.js',
    'loadTables/addEventListeners/editButtonChangeName.js',
    'loadTables/addEventListeners/toggleTableButtonShowAndHidden.js',
    'loadTables/givingClassOffFunction.js',
    'loadTables/styleForMakingTableHideBehindNextDiv.js',
    'loadTables/scheduleTable.js',
    'loadTables/scheduleTableContainer.js',
    'loadTables/editButton.js',
    'loadTables/toggleTableButton.js',
    'loadTables/headerRow.js',
    'loadTables/mainDiv.js',
    'loadTables/index.js',
    'toggleTable.js',
    'addTable.js',
    'createSqlTableForNewTable.js',
    'idListener/idListenerFunctions/idAddListener.js',
    'idListener/idListenerFunctions/idDeleteListener.js',
    'idListener/idListener.js',
  ];
  
  // Función que carga los archivos
   const loadFiles = () => {
    for (const file of filesToLoad) {
      const script = document.createElement('script');
      script.src = `/public/js/${file}`;
      script.type = "text/javascript";
      document.head.appendChild(script);
    }
  }
  
  // Llamar a la función para cargar los archivos
  loadFiles();