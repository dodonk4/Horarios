// Cargar los archivos necesarios
const filesToLoad = [
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