# Introducción

El Generador de Recibos de Sueldo es un microservicio alojado en AWS que proporciona a los usuarios la capacidad de generar un archivo PDF a través de una API. El servicio permite generar un PDF a partir de un archivo JSON con la información necesaria. Además, el sistema cuenta con la capacidad de generar simultáneamente hasta 100 PDFs diferentes, con la opción de juntarlos en uno o mantenerlos por separado.

### Como usarlo

Para comenzar, el usuario debe clonar el repositorio alojado [aqui](https://github.com/MateoF01/api-generador-documentos) al local. El programa funciona agnóstico al sistema operativo del usuario, por lo que peude ser consumido en cualquier plataforma.


El archivo JSON deberá contener esta estructura, en el que cada elemento del array ``"employee"`` refleja un recibo de sueldo adicional (en este ejemplo se proporcionan dos empleados):


```json
{
  "body": {
    "template": "sueldo-recibo.html",
    "modulo": "sueldo_recibo",
    "output": "pdf",
    "callbackUrl": "tu_url",
    "landscape": true,
    "criterio_orden": "0",
    "merge": true,
    "requestContext": { "routeKey": "sendRequest" }
  },
  "employer": {
    "Cuit": "30743844418",
    "Name": "USINA Digital",
    "Data": "Datos como el CP y el domicilio"
  },
  "employee": [
    {
      "EmployeeCuil": "0438761281",
      "NameLastName": "MURSELI, AGUSTIN",
      "AdmissionDate": "2023-09-10",
      "TaskPerformed": "Desarrollo",
      "FileNumber": "107752",
      "Agreement": {
        "Code": "(Codigo de convenio)",
        "Description": "(Descripción de convenio)"
      },
      "Descriptors": {
        "Branch": {
          "Code": "(Codigo de rama)",
          "Description": "(Descripción de rama)"
        },
        "Grouping": {
          "Code": "(Codigo de agrupamiento)",
          "Description": "(Descripción de agrupamiento)"
        },
        "Job": {
          "Code": "(Codigo de puesto)",
          "Description": "(Descripción de puesto)"
        },
        "Age": {
          "Code": "(Codigo de edad)",
          "Description": "(Descripción de edad)"
        },
        "WorkingDay": {
          "Code": "(Codigo de jornada)",
          "Description": "(Descripción de jornada)"
        },
        "Area": {
          "Code": "(Codigo de zona)",
          "Description": "(Descripción de zona)"
        }
      },
      "WorkAddress": {
        "Name": "(Nombre de la sucursal)",
        "Address": "Dirección completa, Calle nro, piso/depto, localidad, provincia"
      },
      "WorkArea": {
        "Code": "(Codigo de zona)",
        "Name": "(Nombre del código de zona)"
      },
      "SettlementMethod": "2",
      "SettlementDate": "2024-03-06",
      "SocialWork": "Obra Social",
      "ProfessionalCategory": "AYUDANTE",
      "AssignedRemuneration": "(Remuneración Asignada)",
      "DateLastDepositContributions": "2023-10",
      "PeriodLastDepositContributions": "2023-09",
      "TotalAmountContributions": "(Monto total de contribuciones)",
      "TotalBasicRemuneration": "65929.50",
      "BasicRemunerationMode": "(Si Modalidad de la liquidación del legajo es = Mes, se envía Valor mensual, SINO Valor hora)",
      "PlacePayment": "CABA",
      "PaymentDate": "2023-10-31",
      "PaymentWay": "(Forma de pago)",
      "DepositBank": "VEP",
      "DepositAccountCBU": "(CBU de depósito)",
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
      "EmployeeCuil": "20434052312",
      "NameLastName": "FERNANDEZ, JULIO MATEO",
      "AdmissionDate": "2023-09-10",
      "TaskPerformed": "Desarrollador",
      "FileNumber": "107252",
      "Agreement": {
        "Code": "(Codigo de convenio)",
        "Description": "(Descripción de convenio)"
      },
      "Descriptors": {
        "Branch": {
          "Code": "(Codigo de rama)",
          "Description": "(Descripción de rama)"
        },
        "Grouping": {
          "Code": "(Codigo de agrupamiento)",
          "Description": "(Descripción de agrupamiento)"
        },
        "Job": {
          "Code": "(Codigo de puesto)",
          "Description": "(Descripción de puesto)"
        },
        "Age": {
          "Code": "(Codigo de edad)",
          "Description": "(Descripción de edad)"
        },
        "WorkingDay": {
          "Code": "(Codigo de jornada)",
          "Description": "(Descripción de jornada)"
        },
        "Area": {
          "Code": "(Codigo de zona)",
          "Description": "(Descripción de zona)"
        }
      },
      "WorkAddress": {
        "Name": "(Nombre de la sucursal)",
        "Address": "Dirección completa, Calle nro, piso/depto, localidad, provincia"
      },
      "WorkArea": {
        "Code": "(Codigo de zona)",
        "Name": "(Nombre del código de zona)"
      },
      "SettlementMethod": "2",
      "SettlementDate": "2024-03-06",
      "SocialWork": "Obra Social",
      "ProfessionalCategory": "AYUDANTE",
      "AssignedRemuneration": "(Remuneración Asignada)",
      "DateLastDepositContributions": "2023-10",
      "PeriodLastDepositContributions": "2023-09",
      "TotalAmountContributions": "(Monto total de contribuciones)",
      "TotalBasicRemuneration": "65929.50",
      "BasicRemunerationMode": "(Si Modalidad de la liquidación del legajo es = Mes, se envía Valor mensual, SINO Valor hora)",
      "PlacePayment": "CABA",
      "PaymentDate": "2023-10-31",
      "PaymentWay": "(Forma de pago)",
      "DepositBank": "VEP",
      "DepositAccountCBU": "(CBU de depósito)",
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


```


Una vez listo el JSON, solo queda hacer una solicitud POST al siguiente endpoint:
```curl
https://18vlt0z8c8.execute-api.sa-east-1.amazonaws.com/dev/handleJson
```

Dentro de este repositorio, se encuentra un ejemplo de como hacerlo en nodejs dentro del archivo `api-test\lib\post.js`.

El POST, devolverá un `"executionArn": "string"`. Como los documentos se generan asincrónicamente, el POST no puede devolverte una respuesta inmediata. Existen dos formas de obtener la respuesta.

##### Describe Execution
Una opción es utilizar el executionArn para hacer otra solicitud POST preguntando la rutina del estado, de esta manera:
```js
    const execArn = JSON.stringify({ executionArn: executionArn });
    const describeExecution = `curl -X POST -d '${execArn}' https://18vlt0z8c8.execute-api.sa-east-1.amazonaws.com/dev/describeExecution`;
```
Ese POST puede devolver los estados "RUNNING", "SUCCEEDED" o "FAILED". En caso de recibir un "RUNNING", se deberá hacer el POST nuevamente hasta obtener la URL del documento pedido.

Para más información de como hacer esto, existe un ejemplo en la ruta `api-test\lib\describeExecution.js`, o se puede consultar la documentación oficial de AWS [aquí](https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html)

##### Callback Url
La otra opción, sería que dentro del JSON (dentro del body), se puede pasar un endpoint, al cual el programa le hará un POST con la respuesta de la rutina una vez lista.

---
# Módulo de Comprobantes
Es posible también, usar el microservicio para imprimir otro tipo de documentos, como comprobantes de Factura y Recibo. La metodología para hacerlo es la misma que la usada para imprimir sueldos, pero con cambios en la estructura del JSON. Principalmente, el campo `"módulo": string`, debe cambiarse al tipo de documento que se desea imprimir. Las opciones disponibles actualmente son:

- "sueldos_recibo"
- "comprobante_factura"

El cambio estructural del JSON es bastante sencillo, y lo hace más uniforme. Todos los módulos que se agregarán en el futuro (y eventualmente sueldos inclusive) tendrán una estructura similar.


```JSON
{
  "body": {
    "requestContext": {
      "routeKey": "sendRequest"
    },
    "modulo": "comprobante_factura",
    "template": "comprobante-factura-beta.html",
    "output": "pdf",
    "landscape": true,
    "criterio_orden": "0",
    "merge": true,
    "resources": {
        "_logo": "url.del.logo",
        "_fondo": "url.fondo"    
        }
  },
  "comprobantes":[  
    {
      "opciones":{
        "imprimir_qr_afip": "1",
        "mostrar_logo": "",
        "mostrar_fondo": ""
      },
      "header":{
        "letra": "R",
        "codigo_identificatorio": "000",
        "tipo_factura": "",
        "numero_factura": "R-00000680",
        "fecha_factura": "31/05/2023",
        "moneda": "PES",
        "cotizacion": "1.00",
        "provincia_destino": "CABA",
        "fecha_vencimiento": "15/07/2023",
        "forma_pago": "Cuenta Corriente",
        "emisor": {
            "cuit": "30506730038",
            "razon_social": "Prueba UNI Importadora General",
            "condicion_iva": "Responsable Inscripto",
            "ingresos_brutos": " Conv. Multilateral ",
            "inicio_actividades": "01/01/2001",
            "domicilio": "Alonso Campeon 388 (1161) CABA"
        },
        "cliente": {
            "cuit": "20434058512",
            "condicion_iva": "Consumidor Final",
            "razon_social": "Agustin",
            "domicilio": " - "
        }
      },
      "items": [
          {
          "codigo": "-",
          "articulo": "Banco",
          "observaciones": "Transferencia CBU",
          "cantidad": "1",
          "precio": "-210.00",
          "descuento": "",
          "importe": "-210.00",
          "iva": "0.00",
          "porcentaje_iva": "0.00",
          "importe_con_iva": "-210.00",
          "discriminar_iva": "1",
          "mostrar_alicuota_iva": "0"
          }
      ],
      "asociados": [
          {
            "comprobante": "30/11/2023 R-0000-00000682 $100.00"
          },
          {
            "comprobante": "30/11/2023 R-0000-00000683 $200.00"
          }
        ],
      "impuestos": {
          "iva_2_5": "0.00",
          "iva_5": "0.00",
          "iva_10_5": "0.00",
          "iva_21": "0.00",
          "iva_27": "0.00"
      },
      "subtotales": {
          "neto_0": "0.00",
          "neto_2_5": "0.00",
          "neto_5": "0.00",
          "neto_10_5": "0.00",
          "neto_21": "0.00",
          "neto_27": "0.00",
          "exento": "10.00",
          "no_gravado": "0.00"
      },
      "percepcion":[
        {
        "nombre": "nombre_percepcion",
        "valor":"122"
        }
      ],
      "importes": {
          "bruto": "0.00",
          "impuestos": "0.00",
          "percepciones": "0.00",
          "total": "210.00"
      },
      "cae": "123123",
      "cae_vencimiento": "12/12/2012",
      "observacion":[
        {
        "texto": "observacion 1"
        },
        {
        "texto": "observacion 2"
        }
      ],
      "qr_code_afip": {
          "ver": "1",
          "fecha": "2023-05-31",
          "cuit": "30506730038",
          "ptoVta": "0",
          "tipoCmp": "0",
          "nroCmp": "680",
          "importe": "210.00",
          "moneda": "PES",
          "ctz": "1",
          "tipoDocRec": "96",
          "nroDocRec": "20434058512",
          "tipoCodAut": "E",
          "codAut": ""
      },
      "providers": {
        "pagos_electronicos": [
            {
            "proveedor": "ofinube-clickpagos"
            },
            {
            "proveedor": "mercadopago"
            }
        ]
      },
      "pagos": [
        {
          "referencia": "46414794-6AFA-483F-A9EF-20272345D382",
          "datos_dinamicos": {
              "qr_data": "/pagar?q=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZGN1aXQiOjkwMTcxLCJpZGNvbXByb2JhbnRlIjoyOTA2Nzg5OTYsImlkdXN1YXJpbyI6MjY4LCJ0aW1lIjoxNzAxNjk3OTI3NzgxfQ.3IR_xTQ0mmnGfqVJlFUJMgnzsDrYIgnu5blJHklgJsLROIhQ5O0146OPSXrHFDkXdF3zY61eZ0EKG1Lc9rqdNw&provider=ofinube-clickpagos",
              "fecha_inicio": "2023-12-04T13:52:07.781Z",
              "expiration_date": "2024-12-03T13:52:07.781Z",
              "external_reference": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZGN1aXQiOjkwMTcxLCJpZGNvbXByb2JhbnRlIjoyOTA2Nzg5OTYsInJlZmVyZW5jaWEiOiI0NjQxNDc5NC02QUZBLTQ4M0YtQTlFRi0yMDI3MjM0NUQzODIifQ.PFothoOFwSf2G1su9HeLOs2piOoXcu6IF2Q2o3xTSiOAWQsK4CKkcSKMM_36ahOhx6-RXvxp1w2NzOnLG6ppYw"
          },
          "proveedor": {
              "nombre": "ofinube-clickpagos",
              "datos": {}
          }
        },
        {
          "referencia": "8F99C2F3-5691-4C18-B903-C9AE3BD4908A",
          "datos_dinamicos": {
            "qr_data": "https://www.mercadopago.com.ar/developers/es/reference",
            "fecha_inicio": "2023-12-14T19:18:18.480Z",
            "expiration_date": "2024-12-13T19:18:18.480Z",
            "external_reference": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZGN1aXQiOjkwMTcxLCJpZGNvbXByb2JhbnRlIjozMjI4ODQ3MzEsInJlZmVyZW5jaWEiOiI4Rjk5QzJGMy01NjkxLTRDMTgtQjkwMy1DOUFFM0JENDkwOEEifQ.OnMzoR9LVfbjvoMGvdmRUQO9Urb3PuIJy8RkDMOFeSqSjWfZd__PE4BV_SBsiYgs26fA5PvAUByQm8OSKMpzmQ"
          },
          "proveedor": {
            "nombre": "mercadopago",
            "datos": {}
          }
        }
      ]
    }
  ]   
}
```


>[!Warning]
>El JSON que se encuentra debajo tiene una estructura temporal. Idealmente, en el futuro, El array con la información se llamará "array", y la única diferencia exterior entre todos los JSON para los diferentes tipos de imprsiones será el parámetro "módulo".


---
# Funcionamiento Interno
  
El recorrido que hace la aplicación, desde la llamada a la API, hasta el retorno del URL con el PDF, es el siguiente.

##### Api POST y HandleJson

- Una vez hecho el POST, el input irá directo a parar la la lambda "handleJson", donde se separará el array del input y se subirá al S3 temporalmente para ser usado por el Map.
```js

`${json.employer.Cuit}/${fecha}`  // <-- Esta ruta se añadirá al JSON bajo la key "rutaCarpeta"

```

- Terminados los preparativos previos, el HandleJson dispara la Step-Function

##### Step-Function

La máquina de estados es la encargada de orquestrar la generación de los recibos en paralelo, y decidir si al final se juntarán en un solo PDF o se guardarán por separado (mediante el valor `merge: true` del JSON ).


![Estructura de la State-Machine.](State-Machine.png)
  

- **Map:** Este componente facilita la paralelización de todas las generaciones. Gracias a esto, el sistema mantiene una complejidad de O(Log(n)), lo que significa que imprimir 10 o 100 recibos tiene casi el mismo costo computacional.


- **Generador Documentos:** Es responsable de generar los PDFs. Utiliza un template en HTML con Tailwind y Handlebars para crear el PDF. Además, tiene la capacidad de exportar el contenido directamente en HTML, aunque esta función aún no está disponible.


- **Merger y Split:** Dependiendo del argumento `merge: bool`, decide si los PDFs deben fusionarse o guardarse por separado en una carpeta en el S3, cuya ruta se describe previamente.

Una vez que se completa toda la ejecución, la API devuelve una URL donde se encuentran los resultados de la ejecución.

## Features adicionales


##### **Dos Recibos apaisados**

El sistema tiene la capacidad de exportar los PDFs de forma apaisada, así como generar dos copias idénticas del mismo informe para distribuir una al empleador y la otra al empleado. Para activar esta función, solo es necesario cambiar el parámetro del JSON `landscape:bool` a `true`. Esta característica simplifica la distribución de informes y garantiza que tanto el empleador como el empleado reciban una copia del informe.