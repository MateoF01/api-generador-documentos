const { exec } = require('child_process');

function generarDocumentos(metadata, bucketName, keyName) {

  input = {
    body: metadata.body,
    employer: metadata.employer,
    bucketName,
    keyName
  }
  const inputString = JSON.stringify(input);

  const inputObject = {
    input: inputString,
    stateMachineArn: "arn:aws:states:sa-east-1:458224645011:stateMachine:orquestador-generador-documentos"
  };

  const inputData = JSON.stringify(inputObject);

  const startExecution = `curl -X POST -d '${inputData}' https://18vlt0z8c8.execute-api.sa-east-1.amazonaws.com/dev`;

  exec(startExecution, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando startExecution: ${error.message}`);
      return;
    }

    let executionArn;

    try {
      const response = JSON.parse(stdout);
      executionArn = response.executionArn;
    } catch (error) {
      console.error('Error al analizar JSON de startExecution:', error);
    }

    const pollExecution = (intentos) => {
      if (intentos <= 0) {
        console.log('TIME OUT');
        return;
      }

      const inputData2 = JSON.stringify({ executionArn: executionArn });
      const describeExecution = `curl -X POST -d '${inputData2}' https://18vlt0z8c8.execute-api.sa-east-1.amazonaws.com/dev/describeExecution`;

      exec(describeExecution, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error en al ejecutar el comando describeExecution: ${error.message}`);
          return;
        }

        let status;
        let response;

        try {
          response = JSON.parse(stdout);
          status = response.status;
          console.log('STATUS: ', status);
        } catch (error) {
          console.error('Error al analizar JSON de describeExecution:', error);
        }

        if (status == "FAILED") {
          console.error("El proceso ha fallado");
          return;
        }

        if (status !== 'SUCCEEDED') {
          setTimeout(() => pollExecution(intentos - 1), 10000);
        } else {
          const output = JSON.parse(response.output);
          console.log('Operación completada. Url Documento:', output.urlDocumento);
        }
      });
    };

    pollExecution(36);  // Número máximo de intentos permitidos (6 minutos running)
  });
}

module.exports = generarDocumentos;
