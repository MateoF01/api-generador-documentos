const fs = require('fs');
require('dotenv').config();

const generarDocumentos = require('./generador_documentos');
const {handleJson, uploadToS3} = require('./tools');


// Ejemplo de uso:
const rutaArchivoJson = 'samples/dataGrande.json'; // Ruta del archivo JSON que deseas modificar
const metadata = handleJson(rutaArchivoJson);

//uploadToS3("jsonParaSubir.json", process.env.AWS_S3_SUELDOS_BUCKET, "JSONS/prueba2.json")
generarDocumentos(metadata, process.env.AWS_S3_SUELDOS_BUCKET, "JSONS/prueba2.json")

  
  