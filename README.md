# PlayNext

**Aplicación publicada:** https://aarongnaranjo2007-rgb.github.io/PlayNext/

Proyecto individual para Diseño de Interfaces Web y Desarrollo Web en Entorno Cliente: investigación, diseño y desarrollo de PlayNext, una aplicación que ayuda a elegir a qué videojuego jugar.

## Documentación

- [Brief del proyecto](BRIEF.md)
- [Órbita 2: sistema visual](ORBITA2.md)
- [Órbita 3: maquetación](ORBITA3.md)
- [Registro de uso de IA](CHANGELOG.md)

## Cómo ejecutarlo

1. `npm install`
2. Abre el proyecto con un servidor local (por ejemplo, Live Server).
3. `npm run lint` para comprobar el código de `js/`.
4. `npm run sass` para compilar los estilos de `scss/` a `css/main.css`.

## Mapa de pantallas

### Recorridos

- **Recorrido principal (Alex, juega solo):** Inicio → Elegir por mí → Preferencias → Ver recomendación → Recomendación → Ver detalles del juego → Ficha del juego → Jugar en la tienda.
- **Recorrido en grupo (Laura):** Inicio → Jugar con amigos → Preferencias (modo grupo y número de jugadores) → Recomendación → Ficha del juego.
- **Recorrido de exploración:** Inicio → Explorar Catálogo → Filtros → Ficha del juego.
- **Recorrido de registro:** Registro → rellenar el formulario → Guardar → el usuario aparece en «Usuarios» → Editar o Borrar.
- **Recorrido de contacto:** Contacto → rellenar el formulario → Enviar → el mensaje aparece en «Mensajes enviados» → al volver, nombre y correo ya están rellenados.

### Vistas y datos que muestra cada una

| Vista | Archivo | Qué muestra |
|---|---|---|
| Inicio | `index.html` | Pregunta principal, botón «Elegir por mí» y accesos directos «Jugar solo» y «Jugar con amigos». |
| Preferencias | `preferencias.html` | Formulario: modo (solo o en grupo), número de jugadores (solo en grupo), tiempo disponible, plataforma y géneros (de la lista de géneros). Botones «Ver recomendación», «Restablecer filtros» y «Cancelar». |
| Recomendación | `recomendacion.html` | Un juego compatible con las preferencias: portada, título, valoración, géneros, plataforma, duración, sinopsis breve y tres motivos de por qué encaja. Botones «Probar con otro juego», «Ver detalles del juego» y «Modificar filtros». Mensaje si no hay juegos compatibles o si falla la carga. |
| Catálogo | `catalogo.html` | Filtros (modo, jugadores, tiempo, plataforma y géneros), número de resultados, ordenación y tarjetas de juego con título, valoración, duración, géneros y enlace «Ver detalles». Mensaje si ningún juego cumple los filtros. |
| Ficha del juego | `ficha.html?id=<id>` | Portada, título, valoración, géneros, duración, sinopsis, jugadores, plataforma, compatibilidad, modos, espacio, requisitos, precio y tienda con enlace externo. Enlace para volver al catálogo o a la recomendación, según desde dónde se llegue. Mensaje si el juego no existe. |
| Registro | `registro.html` | Formulario de cuenta (usuario, correo, contraseña, repetir contraseña, fecha de nacimiento y aceptar condiciones) con botones «Guardar» y «Cancelar». Lista «Usuarios» con los registrados y botones «Editar» y «Borrar». |
| Contacto | `contacto.html` | Formulario de consulta (nombre, correo, teléfono opcional, motivo, «Prefiero que me llaméis» y mensaje con contador de caracteres). Lista «Mensajes enviados» con botón «Borrar». |
| Sobre el proyecto | Ventana dentro de cada página | Qué es PlayNext, cómo funciona el recomendador y con qué datos trabaja. Se abre desde la cabecera y se cierra con «Entendido» o con la X. |

## Backlog

Ordenado por prioridad. Primero la base, después el recorrido de la persona principal (Alex), luego el de grupo (Laura), la exploración y los estados especiales, y por último los formularios y el almacenamiento.

| # | Pieza | Cómo se prueba | Estado |
|---|---|---|---|
| 1 | Datos de juegos y géneros relacionados | `datos.js` exporta 12 juegos y 6 géneros; cada juego referencia sus géneros por `id`. |  Hito 1 |
| 2 | Menú de navegación común | Desde la cabecera de cualquier página se llega a Inicio, Catálogo, Registro y Contacto. |  Hito 1 |
| 3 | Listado de juegos en tarjetas | El catálogo muestra una tarjeta por juego generada desde JavaScript. |  Hito 1 |
| 4 | Ficha del juego | Al pulsar «Ver detalles» se abre la ficha con todos los datos del juego elegido. |  Hito 1 |
| 5 | Juego no encontrado | `ficha.html?id=inventado` muestra un aviso en lugar de un error. |  Hito 1 |
| 6 | Formulario de preferencias individuales | Se pueden elegir tiempo, plataforma y géneros, y el formulario avisa si falta un dato obligatorio. | Pendiente |
| 7 | Recomendación aleatoria | Al enviar las preferencias se muestra un juego al azar entre los compatibles. | Pendiente |
| 8 | Motivos de la recomendación | La recomendación explica en tres puntos por qué encaja (tiempo, plataforma y género). | Pendiente |
| 9 | Probar con otro juego | El botón muestra otro juego compatible sin repetir; si no quedan, lo indica. | Pendiente |
| 10 | Modificar filtros conservando la selección | Al volver a Preferencias siguen marcadas las opciones elegidas. | Pendiente |
| 11 | Ficha desde la recomendación | La ficha abierta desde la recomendación ofrece volver a la recomendación. | Pendiente |
| 12 | Enlace a la tienda | «Jugar en Steam» abre la página del juego en la tienda. | Pendiente |
| 13 | Preferencias en grupo | En modo grupo aparece el número de jugadores, que rechaza valores no válidos. | Pendiente |
| 14 | Accesos directos de Inicio | «Jugar solo» y «Jugar con amigos» abren Preferencias con ese modo ya marcado. | Pendiente |
| 15 | Sin juegos compatibles | Si ningún juego cumple las preferencias, se muestra un mensaje con una acción para continuar. | Pendiente |
| 16 | Error de carga | Si los datos no cargan, se muestra un aviso con el botón «Reintentar». | Pendiente |
| 17 | Contador de resultados | El catálogo muestra cuántos juegos hay en el listado. |  Hito 1 |
| 18 | Filtros del catálogo | Al marcar filtros, el listado y el contador muestran solo los juegos que los cumplen. | Pendiente |
| 19 | Limpiar filtros | «Limpiar filtros» vuelve a mostrar todos los juegos. | Pendiente |
| 20 | Ordenar el catálogo | El listado se puede ordenar por valoración o por título. | Pendiente |
| 21 | Ventana «Sobre el proyecto» | El botón de la cabecera abre la ventana, y «Entendido» o la X la cierran. |  Hito 1 |
| 22 | Almacenamiento local | `almacen.js` guarda, lee, actualiza y borra colecciones en `localStorage`; los datos siguen al recargar. |  Hito 2 |
| 23 | Registro con validación | El formulario de registro muestra un error junto a cada campo incorrecto y no guarda hasta que todo es válido. |  Hito 2 |
| 24 | Lista de usuarios | La vista «Usuarios» muestra los registrados; «Editar» rellena el formulario y «Borrar» pide confirmación. |  Hito 2 |
| 25 | Contacto con validación | El formulario de contacto valida cada campo; si se marca «Prefiero que me llaméis», el teléfono es obligatorio. |  Hito 2 |
| 26 | Contador de caracteres | El contador del mensaje cambia al escribir y vuelve a 0 al enviar. |  Hito 2 |
| 27 | Mensajes enviados | Los mensajes enviados aparecen en la lista y se pueden borrar con confirmación. |  Hito 2 |
| 28 | Recordar los datos de contacto | Tras enviar un mensaje, al volver a Contacto el nombre y el correo aparecen rellenados. |  Hito 2 |

## Hito 2: formularios, validación y almacenamiento

### Mapa de validación

**Registro**

| Campo | Regla | Mensaje de error |
|---|---|---|
| Nombre de usuario | Obligatorio, de 3 a 20 caracteres | «Este campo es obligatorio.» / «El nombre debe tener al menos 3 caracteres.» |
| Correo electrónico | Obligatorio, formato `texto@texto.dominio` | «Este campo es obligatorio.» / «Escribe un correo válido, por ejemplo nombre@correo.com.» |
| Contraseña | Obligatoria, mínimo 8 caracteres, una mayúscula y un número | «La contraseña debe tener al menos 8 caracteres.» / «La contraseña debe incluir al menos una mayúscula.» / «La contraseña debe incluir al menos un número.» |
| Repetir contraseña | Obligatoria, igual que la contraseña | «Este campo es obligatorio.» / «Las contraseñas no coinciden.» |
| Fecha de nacimiento | Obligatoria, no futura, edad mínima 14 años | «Este campo es obligatorio.» / «La fecha de nacimiento no puede ser futura.» / «Debes tener al menos 14 años para registrarte.» |
| Acepto las condiciones | Debe estar marcada | «Debes aceptar las condiciones para continuar.» |

**Contacto**

| Campo | Regla | Mensaje de error |
|---|---|---|
| Nombre | Obligatorio, de 3 a 40 caracteres | «Este campo es obligatorio.» / «El nombre debe tener al menos 3 caracteres.» |
| Correo electrónico | Obligatorio, formato `texto@texto.dominio` | «Este campo es obligatorio.» / «Escribe un correo válido, por ejemplo nombre@correo.com.» |
| Teléfono | Opcional; si se rellena, 9 cifras empezando por 6, 7, 8 o 9 (admite +34) | «Escribe un teléfono válido de 9 dígitos, por ejemplo 612345678.» |
| Teléfono con «Prefiero que me llaméis» | Si la casilla está marcada, el teléfono es obligatorio | «Indica un teléfono para que podamos llamarte.» |
| Motivo | Obligatorio | «Este campo es obligatorio.» |
| Mensaje | Obligatorio, de 20 a 500 caracteres (se leen de `minlength` y `maxlength`) | «Este campo es obligatorio.» / «El mensaje debe tener al menos 20 caracteres.» |

### Cómo funciona

- **`almacen.js`** es lo único que toca `localStorage`. Guarda dos colecciones, `usuarios` y `mensajes`, como listas en JSON, y ofrece `obtenerTodos`, `obtenerPorId`, `crear`, `actualizar` y `borrar`.
- **`validacion.js`** tiene funciones que reciben un valor y devuelven el mensaje de error o `null`, y una tabla de reglas por formulario (`reglasRegistro` y `reglasContacto`).
- **`ui.js`** aplica el mismo mecanismo a los dos formularios: valida al salir de un campo, al escribir una vez tocado y al enviar; muestra los errores junto al campo con `aria-invalid` y `aria-describedby`, y pone el foco en el primer campo con error.
- **`main.js`** une las piezas: al enviar un formulario válido guarda con `almacen.js` y vuelve a pintar la lista con `ui.js`, sin recargar la página.
- Los botones «Editar» y «Borrar» usan delegación de eventos: un solo listener en la lista lee `data-accion` y `data-id`. Borrar pide confirmación con `confirm()`.
- La contraseña no se guarda. La casilla se guarda como booleano y la fecha en formato ISO (`AAAA-MM-DD`).
- El nombre y el correo del último mensaje se guardan en dos cookies que caducan a los 30 días.

### Qué he hecho

- `almacen.js` como única puerta a `localStorage`.
- Validación compartida por los dos formularios, con una tabla de reglas para cada uno.
- Registro con alta, edición y borrado de usuarios.
- Contacto con regla cruzada (teléfono obligatorio si se pide llamada), contador de caracteres, lista de mensajes con borrado y cookie con nombre y correo.

### Qué falta

- Al editar un usuario hay que volver a escribir la contraseña, porque no se guarda.
- No se comprueba si ya existe un usuario con el mismo correo.
- Si se cambia la contraseña después de rellenar «Repetir contraseña», el error no aparece hasta volver a tocar ese campo o enviar el formulario.
- Los filtros y la ordenación del catálogo (piezas 18 a 20).

### Qué me ha costado más

Entender cómo se encadenan las funciones de validación: `validarFormulario` recorre los campos, `validarCampo` comprueba primero si el campo está vacío con `validarObligatorio` y después aplica la regla de la tabla, y el resultado sube hasta decidir si se guarda o no. También me costó entender cómo `main.js` le pasa a `ui.js` la función que se ejecuta al enviar.

## Nota sobre los datos

Los datos de los juegos (precios, plataformas, duración y valoraciones) son ilustrativos y orientativos, creados para este proyecto académico. No son datos oficiales de las tiendas.
