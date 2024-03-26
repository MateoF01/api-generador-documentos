require('dotenv').config();

// Ejemplo de uso

const fs = require('fs');
const AWS = require('aws-sdk');
const { v4 } = require('uuid');

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESSKEY,
  secretAccessKey: process.env.AWS_SECRETKEY
});

const jsonKey = `JSONS/${v4()}.json`;

console.log("El json se guardará en: ", jsonKey);

// PRIMERO SUBO EL ARCHIVO AL S3 Y ME GUARDO LA KEY

const s3 = new AWS.S3();

const archivoJSON = 'samples/dataMediana.json';
const fileContent = fs.readFileSync(archivoJSON);

const paramsUploadJson = {
    Bucket: process.env.AWS_S3_SUELDOS_BUCKET,
    Key: jsonKey,
    Body: fileContent
};

let executionArn

s3.upload(paramsUploadJson).promise()
    .then(data => {
        console.log(`Archivo subido exitosamente a ${data.Location}`);
        
        // INICIO LA STEP FUNCTION PASANDOLE LA KEY DEL JSON
        const stepfunctions = new AWS.StepFunctions({ region: process.env.AWS_REGION }); // Reemplaza 'tu-region' con la región correcta

        const params = {
            stateMachineArn: 'arn:aws:states:sa-east-1:458224645011:stateMachine:orquestador-generador-documentos', // Reemplaza con el ARN de tu máquina de estados
            input: JSON.stringify({ jsonKey })
        };

        console.log("params: ", params);

        stepfunctions.startExecution(params, (error, data) => {
            if (error) {
                console.error('Error al iniciar la ejecución:', error);
            } else {
                console.log('ID de la ejecución:', data.executionArn);
            }
        });
    })
    .catch(err => {
        console.error('Error al subir el archivo a S3:', err);
    });


  