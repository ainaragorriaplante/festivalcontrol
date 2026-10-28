# Bloque 05

## Resultado
- Qué añadí al proyecto: Cambié el identificador seleccionado por el botón de `EVT-101` a `EVT-102` y actualicé el texto del botón.
- Ruta o pantalla comprobada: Pantalla Programación de la aplicación móvil en web, en `http://localhost:8093/`.
- Estado y respuesta observados: El botón mostró `Seleccionar EVT-102`. Al pulsarlo, la pantalla mostró `Selección: EVT-102`.

## Comprensión
- Recorrido del dato, explicado con mis palabras: Al pulsar el botón, su función `onPress` llama a `setSelected('EVT-102')`. React actualiza el estado y vuelve a mostrar el valor en el texto de selección.
- Cambio guiado y resultado: Cambié el valor de `setSelected` y el texto del botón a EVT-102. Comprobé en el navegador el texto del botón y, después de pulsarlo, `Selección: EVT-102`. El cambio quedó aplicado de forma permanente.
- Error encontrado y cómo lo resolví: El puerto 8081 ya estaba ocupado, así que inicié la aplicación en el puerto 8093. No hubo errores al cambiar ni comprobar la selección.

## Evidencias
- Captura o transcripción breve, sin credenciales:
  ```text
  Botón: Seleccionar EVT-102
  Después de pulsarlo: Selección: EVT-102
  ```
- Limitaciones del ejercicio: La pantalla usa datos locales; esta comprobación no realizó llamadas HTTP ni verificó persistencia en un backend.
