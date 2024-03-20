require('dotenv').config();

const fs = require('fs');
const AWS = require('aws-sdk');


function handleJson(filePath) {

    const jsonData = fs.readFileSync(filePath);
    const inputJson = JSON.parse(jsonData);

    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}-${fechaActual.getHours()}hs-${fechaActual.getMinutes()}min`;

    inputJson.body.fecha = fechaFormateada;
    inputJson.body.rutaCarpeta = `${inputJson.employer.Cuit}/${fechaFormateada}`;

    const jsonEmployee = inputJson.employee
    fs.writeFileSync("jsonParaSubir.json", JSON.stringify(jsonEmployee, null, 2));

    console.log('Campos agregados correctamente al archivo JSON.');

    return {body : inputJson.body, employer: inputJson.employer}
}

async function uploadToS3(filePath, bucketName, keyName) {

    AWS.config.update({ region: process.env.AWS_REGION, accessKeyId: process.env.AWS_ACCESSKEY, secretAccessKey: process.env.AWS_SECRETKEY });

    const s3 = new AWS.S3();

    const fileContent = fs.readFileSync(filePath);

    const params = {
        Bucket: bucketName,
        Key: keyName,
        Body: fileContent
    };

    try {
        const data = await s3.upload(params).promise();
        console.log(`Archivo subido exitosamente a ${data.Location}`);
    } catch (err) {
        console.error('Error al subir el archivo a S3:', err);
    }
}

module.exports = { handleJson, uploadToS3 };
