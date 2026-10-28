# Bloque 06

## Resultado
- Qué añadí al proyecto: No añadí una función nueva. Probé una ruta incorrecta temporalmente en `getEvents` y después restauré `/events`.
- Ruta o pantalla comprobada: Pantalla Programación de la aplicación web en `http://localhost:8093/`, que consulta `http://localhost:3000/dev/events`.
- Estado y respuesta observados: Con `/ruta-inexistente`, el navegador recibió HTTP `404` y la pantalla mostró `HTTP 404: Not Found`. Tras restaurar `/events` y pulsar «GET recargar», la solicitud devolvió HTTP `200` y se mostraron las tarjetas `EVT-101` y `EVT-102`.

## Comprensión
- Recorrido del dato, explicado con mis palabras: `getEvents` construye la URL de la API con la ruta indicada y hace una petición GET. Si el servidor devuelve un estado no exitoso, el cliente muestra el error HTTP. Una ruta inexistente devuelve `404`, pero esa respuesta confirma que el servidor está activo; no es lo mismo que no poder conectar con el servidor.
- Cambio guiado y resultado: Cambié temporalmente `/events` por `/ruta-inexistente` y comprobé el `404` en la respuesta del navegador. Restauré `/events`, pulsé «GET recargar» y comprobé el `200` y las dos tarjetas.
- Error encontrado y cómo lo resolví: La ruta temporal no existía y produjo `HTTP 404: Not Found`. Restauré la ruta correcta `/events` y volví a cargar los datos.

## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  GET http://localhost:3000/dev/ruta-inexistente -> HTTP 404
  GET http://localhost:3000/dev/events -> HTTP 200
  Tarjetas: EVT-101 · CONFIRMED, EVT-102 · CONFIRMED
  ```
- Limitaciones del ejercicio: La prueba fue local con la aplicación web y Serverless Offline. La ruta incorrecta fue temporal; `mobile/src/api.ts` quedó restaurado con `/events`. No comprobé un despliegue en AWS.
