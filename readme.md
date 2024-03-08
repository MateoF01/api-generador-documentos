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
    "landscape": true,
    "criterio_orden": "0",
    "merge": true,
    "requestContext": { "routeKey": "sendRequest" }
  },
  "employer": {
      "Cuit": "30743844418",
      "Name": "USINA Digital",
      "Data": "Datos como el CP y el domiciolo"
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


Una vez listo el JSON, solo queda correr el index.js mediante la línea ``node index.js``.


# Funcionamiento Interno

El recorrido que hace la aplicación, desde la llamada a la API, hasta el retorno del URL con el PDF, es el siguiente.

##### Api Generador Documentos

- Desde la API, el usuario carga el JSON con los datos y puede consumir el servicio. 
- Aquí, se genera la URL de S3 donde serán guardados el o los PDFs que se generen, a partir de algunos datos del usuario. La carpeta en donde se guarden tendrá la siguiente estructura en su nombre:
```js
`${json.employer.Cuit}/${fecha}`  // <-- Esta ruta se añadirá al JSON bajo la key "rutaCarpeta"
```
- Luego, se hace el pedido a la API Gateway pasandole todo le JSON. El sistema queda escuchando preguntando el estado de la generación cada 10 segundos, además, se avisa al usuario en caso de que ocurra algún error.

##### State-Machine
La máquina de estados es la encargada de orquestrar la generación de los recibos en paralelo, y decidir si al final se juntarán en un solo PDF o se guardarán por separado (mediante el valor `merge: true` del JSON ).

![Estructura de la State-Machine.](State-Machine.png)

- **EmplyeeMap:** Este componente facilita la paralelización de todas las generaciones. Gracias a esto, el sistema mantiene una complejidad de O(Log(n)), lo que significa que imprimir 10 o 100 recibos tiene casi el mismo costo computacional.

- **Generador Documentos:** Es responsable de generar los PDFs. Utiliza un template en HTML con Tailwind y Handlebars para crear el PDF. Además, tiene la capacidad de exportar el contenido directamente en HTML, aunque esta función aún no está disponible.

- **Merger y Split:** Dependiendo del argumento `merge: bool`, decide si los PDFs deben fusionarse o guardarse por separado en una carpeta en el S3, cuya ruta se describe previamente.


Una vez que se completa toda la ejecución, la API devuelve una URL donde se encuentran los resultados de la ejecución.


## Features adicionales

##### **Dos Recibos apaisados**
  
El sistema tiene la capacidad de exportar los PDFs de forma apaisada, así como generar dos copias idénticas del mismo informe para distribuir una al empleador y la otra al empleado. Para activar esta función, solo es necesario cambiar el parámetro del JSON `landscape:bool` a `true`. Esta característica simplifica la distribución de informes y garantiza que tanto el empleador como el empleado reciban una copia del informe.
