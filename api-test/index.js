const { exec } = require('child_process');

// Tu JSON gigante
const jsonGigante =
{
    "requestContext": {
        "routeKey": "sendRequest"
      },
    "body": {
      "modulo": "sueldo_recibo",
      "template": "sueldo-recibo.html",
      "landscape": false, //apaisa y duplica el sueldo
      "idcomprobante": "290678996",
      "output": "pdf",
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZHVzdWFyaW8iOjI2OCwiaWRjdWl0Ijo5MDE3MX0.c158RBLCKXUIPsy0BMVZiuuYGobyXp6aObCzXo_Lk1QLBFwh24pSbrXluWha2c7wSVZ5pSgv6YFuL4tnvRhDzg",
      "metadata": [
        {
          "merge": false,
          "criterio_orden": "0",
          "employer": {
            "Cuit": "30717881762",
            "Name": "Hidro Baigorria S. R. L",
            "Address": "Aristobulo del valle 508",
            "CP": "1031"
          },
          "employee": [
            {
              "employeeCuil": "20414048898",
              "NameLastName": "ACOSTA, CARLOS ALBERTO",
              "AdmissionDate": "2023-09-10",
              "TaskPerformed": "TaskPerformed",
              "FileNumber": "(num legajo)",
              "Agreement": {
                "Code": "(Codigo de convenio)",
                "Description": "(Descripción de convenio)"
              },
              "ProfessionalCategory": "AYUDANTE",
              "AssignedRemuneration": "910.00",
              "DateLastDepositContributions": "2023-10",
              "PeriodLastDepositContributions": "2023-09",
              "TotalBasicRemuneration": "65929.50",
              "PaymentDate": "2023-10-31",
              "PaymentPlace": "CABA",
              "PrintedObservations": "(Observaciones Impresas del recibo)",
              "Concepts": [
                {
                  "Code": "2",
                  "Description": "Horas Normales",
                  "Type": "RemunerativeConcepts",
                  "Amount": "90",
                  "Parameter": "cantidad",
                  "Value": "81900.00"
                },
                {
                  "Code": "201",
                  "Description": "Jubilación",
                  "Type": "DiscountConcepts",
                  "Amount": "11",
                  "Parameter": "%",
                  "Value": "9009.00"
                },
                {
                  "Code": "202",
                  "Description": "Ley 19032",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "203",
                  "Description": "Obra Social",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "206",
                  "Description": "Sindicato",
                  "Type": "DiscountConcepts",
                  "Amount": "2.5",
                  "Parameter": "%",
                  "Value": "2047.50"
                }
              ],
              "NetAmount": {
                "Amount": "65929.00",
                "Description": "Son pesos SESENTA Y CINCO MIL NOVECIENTOS VEINTINUEVE CON 50/100"
              }
            },
            {
              "employeeCuil": "2043405851",
              "NameLastName": "FERNANDEZ, MATEO",
              "AdmissionDate": "2023-09-10",
              "TaskPerformed": "REY DE ESPAÑA",
              "FileNumber": "(num legajo)",
              "Agreement": {
                "Code": "(Codigo de convenio)",
                "Description": "(Descripción de convenio)"
              },
              "ProfessionalCategory": "AYUDANTE",
              "AssignedRemuneration": "910.00",
              "DateLastDepositContributions": "2023-10",
              "PeriodLastDepositContributions": "2023-09",
              "TotalBasicRemuneration": "65929.50",
              "PaymentDate": "2023-10-31",
              "PaymentPlace": "CABA",
              "PrintedObservations": "(Observaciones Impresas del recibo)",
              "Concepts": [
                {
                  "Code": "2",
                  "Description": "Horas Normales",
                  "Type": "RemunerativeConcepts",
                  "Amount": "90",
                  "Parameter": "cantidad",
                  "Value": "81900.00"
                },
                {
                  "Code": "201",
                  "Description": "Jubilación",
                  "Type": "DiscountConcepts",
                  "Amount": "11",
                  "Parameter": "%",
                  "Value": "9009.00"
                },
                {
                  "Code": "202",
                  "Description": "Ley 19032",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "203",
                  "Description": "Obra Social",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "206",
                  "Description": "Sindicato",
                  "Type": "DiscountConcepts",
                  "Amount": "2.5",
                  "Parameter": "%",
                  "Value": "2047.50"
                }
              ],
              "NetAmount": {
                "Amount": "65929.00",
                "Description": "Son pesos SESENTA Y CINCO MIL NOVECIENTOS VEINTINUEVE CON 50/100"
              }
            },
            {
              "employeeCuil": "2843241851",
              "NameLastName": "PEREZ, JUAN",
              "AdmissionDate": "2023-09-10",
              "TaskPerformed": "HOLLOW KNIGHT",
              "FileNumber": "(num legajo)",
              "Agreement": {
                "Code": "(Codigo de convenio)",
                "Description": "(Descripción de convenio)"
              },
              "ProfessionalCategory": "AYUDANTE",
              "AssignedRemuneration": "910.00",
              "DateLastDepositContributions": "2023-10",
              "PeriodLastDepositContributions": "2023-09",
              "TotalBasicRemuneration": "65929.50",
              "PaymentDate": "2023-10-31",
              "PaymentPlace": "CABA",
              "PrintedObservations": "(Observaciones Impresas del recibo)",
              "Concepts": [
                {
                  "Code": "2",
                  "Description": "Horas Normales",
                  "Type": "RemunerativeConcepts",
                  "Amount": "90",
                  "Parameter": "cantidad",
                  "Value": "81900.00"
                },
                {
                  "Code": "201",
                  "Description": "Jubilación",
                  "Type": "DiscountConcepts",
                  "Amount": "11",
                  "Parameter": "%",
                  "Value": "9009.00"
                },
                {
                  "Code": "202",
                  "Description": "Ley 19032",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "203",
                  "Description": "Obra Social",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "206",
                  "Description": "Sindicato",
                  "Type": "DiscountConcepts",
                  "Amount": "2.5",
                  "Parameter": "%",
                  "Value": "2047.50"
                }
              ],
              "NetAmount": {
                "Amount": "65929.00",
                "Description": "Son pesos SESENTA Y CINCO MIL NOVECIENTOS VEINTINUEVE CON 50/100"
              }
            },
            {
              "employeeCuil": "30431111851",
              "NameLastName": "AAAA, NANANA",
              "AdmissionDate": "2023-09-10",
              "TaskPerformed": "MONO SILÁBICO",
              "FileNumber": "(num legajo)",
              "Agreement": {
                "Code": "(Codigo de convenio)",
                "Description": "(Descripción de convenio)"
              },
              "ProfessionalCategory": "AYUDANTE",
              "AssignedRemuneration": "910.00",
              "DateLastDepositContributions": "2023-10",
              "PeriodLastDepositContributions": "2023-09",
              "TotalBasicRemuneration": "65929.50",
              "PaymentDate": "2023-10-31",
              "PaymentPlace": "CABA",
              "PrintedObservations": "(Observaciones Impresas del recibo)",
              "Concepts": [
                {
                  "Code": "2",
                  "Description": "Horas Normales",
                  "Type": "RemunerativeConcepts",
                  "Amount": "90",
                  "Parameter": "cantidad",
                  "Value": "81900.00"
                },
                {
                  "Code": "201",
                  "Description": "Jubilación",
                  "Type": "DiscountConcepts",
                  "Amount": "11",
                  "Parameter": "%",
                  "Value": "9009.00"
                },
                {
                  "Code": "202",
                  "Description": "Ley 19032",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "203",
                  "Description": "Obra Social",
                  "Type": "DiscountConcepts",
                  "Amount": "3",
                  "Parameter": "%",
                  "Value": "2457.00"
                },
                {
                  "Code": "206",
                  "Description": "Sindicato",
                  "Type": "DiscountConcepts",
                  "Amount": "2.5",
                  "Parameter": "%",
                  "Value": "2047.50"
                }
              ],
              "NetAmount": {
                "Amount": "65929.00",
                "Description": "Son pesos SESENTA Y CINCO MIL NOVECIENTOS VEINTINUEVE CON 50/100"
              }
            }
          ]
        }
      ]
    }
  }


  const fechaActual = new Date();
  const fechaFormateada = `${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}-${fechaActual.getHours()}hs-${fechaActual.getMinutes()}min`;

  jsonGigante.body.fecha = fechaFormateada

  const jsonString = JSON.stringify(jsonGigante);

  const inputObject = {
    input: jsonString,
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
  
        if (status == "FAILED"){
          console.error("El proceso ha fallado")
          return
        }

        if (status !== 'SUCCEEDED') {
          setTimeout(() => pollExecution(intentos - 1), 10000);
        } else {
          const output = JSON.parse(response.output);
          console.log('Operación completada. Url Documento:', output.urlDocumento);
        }
      });
    };
  
    pollExecution(12);  // Número máximo de intentos permitidos (2 minutos running)
  });
  