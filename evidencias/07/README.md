# Bloque 07

## Resultado
- Qué añadí al proyecto: No añadí una ruta nueva. Cambié temporalmente el estado enviado por la acción PATCH de `CANCELLED` a `CONFIRMED` para probar la solicitud y luego restauré `CANCELLED`.
- Ruta o pantalla comprobada: Botón «PATCH cancelar EVT-101» en la pantalla Programación, que envía `PATCH http://localhost:3000/dev/events/EVT-101`.
- Estado y respuesta observados: El navegador envió `{"status":"CONFIRMED"}`. La respuesta fue HTTP `200` con `changes.status: "CONFIRMED"` y `operation: "UPDATED"`.

## Comprensión
- Recorrido del dato, explicado con mis palabras: La acción PATCH llama a `updateEvent` con el ID del evento y el estado. La función de API convierte el estado en el JSON `{ "status": ... }` y lo envía a `/events/EVT-101`. La respuesta del servidor se muestra en la pantalla.
- Cambio guiado y resultado: Sustituí temporalmente `CANCELLED` por `CONFIRMED`, pulsé el botón y comprobé el payload y la respuesta `200` con `changes.status: "CONFIRMED"`. Después restauré `CANCELLED` en la acción para conservar el hito.
- Error encontrado y cómo lo resolví: No encontré errores durante la prueba.

## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  PATCH /dev/events/EVT-101
  Request Payload: {"status":"CONFIRMED"}
  HTTP 200
  {"id":"EVT-101","changes":{"status":"CONFIRMED"},"operation":"UPDATED"}
  ```
- Limitaciones del ejercicio: La respuesta PATCH confirma el estado solicitado, pero las escrituras de esta práctica son simuladas y no actualizan el catálogo que devuelve GET. El código quedó restaurado para enviar `CANCELLED`.
