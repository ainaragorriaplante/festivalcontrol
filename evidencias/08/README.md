# Bloque 08

## Resultado
- Qué añadí al proyecto: No añadí código. No pude realizar la comprobación de la Lambda desplegada en AWS.
- Ruta o pantalla comprobada: No se consultó ningún endpoint cloud ni se ejecutó `npx serverless logs -f getEvent --stage dev --region "$AWS_REGION"`.
- Estado y respuesta observados: No se obtuvieron respuestas HTTP cloud para `EVT-101` ni `NO-EXISTE`, y no se consultaron logs. Por tanto, no comprobé los resultados esperados `200` y `404`.

## Comprensión
- Recorrido del dato, explicado con mis palabras: La ruta configurada `events/{id}` envía el identificador de la URL a `getEvent.handler`. El handler lo escribe en el log como `GET evento: <id>` y busca el evento en el catálogo. En una ejecución cloud, la respuesta y los logs deben comprobarse en el entorno desplegado.
- Cambio guiado y resultado: No hice cambios ni ejecuté la prueba cloud porque no tenía una sesión AWS CLI autenticada ni un URL de API Gateway confirmado.
- Error encontrado y cómo lo resolví: La CLI respondió `NoCredentials: Unable to locate credentials` al ejecutar `aws sts get-caller-identity --profile academy`. Seleccionar un perfil y establecer la región no proporciona credenciales. La prueba quedó pendiente de iniciar correctamente la sesión temporal del laboratorio y conocer el endpoint desplegado. No incluí ni solicité secretos.

## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  aws sts get-caller-identity --profile academy
  aws: [ERROR]: An error occurred (NoCredentials): Unable to locate credentials.
  ```
- Limitaciones del ejercicio: La verificación se limitó a revisar la configuración y el handler localmente. No se llamó a AWS, no se verificaron los estados HTTP del API desplegado ni se consultaron logs cloud. Los resultados esperados del ejercicio siguen sin comprobarse.
