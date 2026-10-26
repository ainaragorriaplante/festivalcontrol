# Bloque 02
 
## Resultado
- Qué añadí al proyecto: No añadí ni modifiqué código. Comprobé la ruta y la función de eventos existentes con el identificador `EVT-330`.
- Ruta o pantalla comprobada: `GET http://localhost:3010/dev/events/EVT-330` mediante `curl`.
- Estado y respuesta observados: `200 OK`. El JSON devolvió `id: "EVT-330"`, `artist: "Neon Waves"`, `space: "Main Stage"`, `time: "22:30"` y `status: "CONFIRMED"`.
 
## Comprensión
- Recorrido del dato, explicado con mis palabras: La ruta `events/{id}` de Serverless envía la petición a `getEvent.handler`. La función obtiene `id` de `event.pathParameters`, lo escribe en el log y lo incluye en el JSON de respuesta.
- Cambio guiado y resultado: Solicité un tercer identificador sin cambiar la función. Tanto el JSON como el log mostraron `EVT-330`.
- Error encontrado y cómo lo resolví: Al ejecutar `npm run start` desde la raíz del repositorio, npm indicó que no existía ese script. Lo ejecuté desde `backend`, donde sí está definido. Los puertos predeterminados estaban ocupados, así que inicié Serverless Offline en los puertos HTTP `3010` y Lambda `3011`. La ruta local requiere el prefijo de stage `/dev`.
 
## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  GET /dev/events/EVT-330 (λ: getEvent)
  GET evento: EVT-330
  HTTP/1.1 200 OK
  {"id":"EVT-330","artist":"Neon Waves","space":"Main Stage","time":"22:30","status":"CONFIRMED"}
  ```
- Limitaciones del ejercicio: La comprobación fue local con `curl` y Serverless Offline. No realicé una petición desde Thunder Client ni comprobé un despliegue en AWS.
