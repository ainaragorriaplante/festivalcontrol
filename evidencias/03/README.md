# Bloque 03

## Resultado
- Qué añadí al proyecto: Una función para crear eventos y la ruta `POST /events` en Serverless.
- Ruta o pantalla comprobada: `POST http://localhost:3012/dev/events`, con Serverless Offline.
- Estado y respuesta observados: `201 Created`. La respuesta incluyó `id: "EVT-NEW"`, `artist: "Neon Waves"`, `space: "Main Stage"`, `time: "22:30"` y `status: "CONFIRMED"`.

## Comprensión
- Recorrido del dato, explicado con mis palabras: Serverless dirige `POST /events` a `createEvent.handler`. La función analiza el cuerpo JSON, valida `artist`, `space` y la hora en formato `HH:mm`, y admite `CONFIRMED` o `CANCELLED` como estado. Si no se indica estado, usa `CONFIRMED`; luego devuelve los datos del evento con estado HTTP `201`.
- Cambio guiado y resultado: Envié un evento con artista `Neon Waves`, espacio `Main Stage` y hora `22:30`. Recibí `EVT-NEW` y el estado predeterminado `CONFIRMED`.
- Error encontrado y cómo lo resolví: Una primera petición tenía el JSON mal escapado y respondió `400` con `JSON inválido`. Envié el cuerpo JSON correctamente y obtuve `201`.

## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  POST /dev/events
  HTTP 201
  {"id":"EVT-NEW","artist":"Neon Waves","space":"Main Stage","time":"22:30","status":"CONFIRMED"}
  ```
- Limitaciones del ejercicio: La comprobación fue local con Serverless Offline. La función devuelve un identificador fijo y no persiste el evento. No comprobé un despliegue en AWS.
