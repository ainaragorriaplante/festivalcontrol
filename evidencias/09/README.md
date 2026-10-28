# Bloque 09

## Resultado
- Qué añadí al proyecto: No hice cambios en el código. Revisé la configuración de la URL base de la API.
- Ruta o pantalla comprobada: Revisé `API_URL` en `mobile/src/api.ts`; actualmente contiene `https://TU_API.execute-api.TU_REGION.amazonaws.com/dev`.
- Estado y respuesta observados: No ejecuté una petición al endpoint cloud. La URL contiene valores de ejemplo y no identifica una API real, así que no hay un estado HTTP ni una respuesta cloud que pueda confirmar.

## Comprensión
- Recorrido del dato, explicado con mis palabras: Las funciones de API construyen las rutas añadiéndolas a `API_URL`, por ejemplo `'/events'` para listar eventos. La URL base debe apuntar al API Gateway desplegado y terminar en el stage correcto.
- Cambio guiado y resultado: No sustituí la URL de ejemplo porque no dispongo de un endpoint cloud confirmado. La prueba anterior quedó bloqueada por falta de credenciales AWS y no se verificó un despliegue.
- Error encontrado y cómo lo resolví: No se realizó una petición con esta URL. Para comprobarla hace falta configurar un endpoint real del API Gateway; los textos `TU_API` y `TU_REGION` son marcadores, no valores utilizables.

## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  API_URL = https://TU_API.execute-api.TU_REGION.amazonaws.com/dev
  Estado de la petición cloud: no comprobado
  ```
- Limitaciones del ejercicio: No confirmé la URL de API Gateway ni ejecuté peticiones cloud. No se incluyen credenciales, tokens ni contenido de archivos AWS.
