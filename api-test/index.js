const fs = require('fs');
const generarDocumentos = require('./generador_documentos');
 

const contenidoArchivo = fs.readFileSync('samples/data.json', 'utf-8');
const json = JSON.parse(contenidoArchivo);

generarDocumentos(json)

  
  