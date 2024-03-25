require('dotenv').config();
const {v4} = require('uuid')

const generarDocumentos = require('./lib/generador_documentos');
const {handleJson} = require('./lib/handleJson');

const jsonKey = `JSONS/${v4()}.json`

// Ejemplo de uso:
const rutaArchivoJson = 'samples/data.json'; // Ruta del archivo JSON que deseas modificar


async function ejecutar() {
    const metadata = await handleJson(rutaArchivoJson, jsonKey);
    generarDocumentos(metadata, process.env.AWS_S3_SUELDOS_BUCKET, jsonKey);
  }

ejecutar()