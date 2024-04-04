const { exec } = require('child_process');

function activarStepFunction(url, archivoJSON) {
    
    const startExecution = `curl -X POST -H "Content-Type: application/json" -d @${archivoJSON} ${url}`;

    exec(startExecution, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al enviar la solicitud: ${error.message}`);
            return;
        }

        console.log(`Respuesta del servidor: ${stdout}`);
    });
}

const urlDestino = 'https://18vlt0z8c8.execute-api.sa-east-1.amazonaws.com/dev/handleJson'

const archivoJSONGrande = '../samples/dataMediana.json';

activarStepFunction(urlDestino, archivoJSONGrande);



