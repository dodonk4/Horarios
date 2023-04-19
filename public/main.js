// Cargar los archivos necesarios
const filesToLoad = [
    'usefulFunctions/obtainSchedulesFromHtmlElement.js',
    'usefulFunctions/restScheduleFunction.js',
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
    'loadTables.js',
    'toggleTable.js',
    'addTable.js',
    'createSqlTableForNewTable.js',
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