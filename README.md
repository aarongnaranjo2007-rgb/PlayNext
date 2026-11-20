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

## Mapa de pantallas

### Recorridos

- **Recorrido principal (Alex, juega solo):** Inicio → Elegir por mí → Preferencias → Ver recomendación → Recomendación → Ver detalles del juego → Ficha del juego → Jugar en la tienda.
- **Recorrido en grupo (Laura):** Inicio → Jugar con amigos → Preferencias (modo grupo y número de jugadores) → Recomendación → Ficha del juego.
- **Recorrido de exploración:** Inicio → Explorar Catálogo → Filtros → Ficha del juego.

### Vistas y datos que muestra cada una

| Vista | Archivo | Qué muestra |
|---|---|---|
| Inicio | `index.html` | Pregunta principal, botón «Elegir por mí» y accesos directos «Jugar solo» y «Jugar con amigos». |
| Preferencias | `preferencias.html` | Formulario: modo (solo o en grupo), número de jugadores (solo en grupo), tiempo disponible, plataforma y géneros (de la lista de géneros). Botones «Ver recomendación», «Restablecer filtros» y «Cancelar». |
| Recomendación | `recomendacion.html` | Un juego compatible con las preferencias: portada, título, valoración, géneros, plataforma, duración, sinopsis breve y tres motivos de por qué encaja. Botones «Probar con otro juego», «Ver detalles del juego» y «Modificar filtros». Mensaje si no hay juegos compatibles o si falla la carga. |
| Catálogo | `catalogo.html` | Filtros (modo, jugadores, tiempo, plataforma y géneros), número de resultados, ordenación y tarjetas de juego con título, valoración, duración, géneros y enlace «Ver detalles». Mensaje si ningún juego cumple los filtros. |
| Ficha del juego | `ficha.html?id=<id>` | Portada, título, valoración, géneros, duración, sinopsis, jugadores, plataforma, compatibilidad, modos, espacio, requisitos, precio y tienda con enlace externo. Enlace para volver al catálogo o a la recomendación, según desde dónde se llegue. Mensaje si el juego no existe. |
| Sobre el proyecto | Ventana dentro de cada página | Qué es PlayNext, cómo funciona el recomendador y con qué datos trabaja. Se abre desde la cabecera y se cierra con «Entendido» o con la X. |

## Backlog

Ordenado por prioridad. Primero la base, después el recorrido de la persona principal (Alex), luego el de grupo (Laura) y por último la exploración y los estados especiales.

| # | Pieza | Cómo se prueba |
|---|---|---|
| 1 | Datos de juegos y géneros relacionados | `datos.js` exporta 12 juegos y 6 géneros; cada juego referencia sus géneros por `id`. |
| 2 | Menú de navegación común | Desde la cabecera de cualquier página se llega a Inicio y al Catálogo. |
| 3 | Listado de juegos en tarjetas | El catálogo muestra una tarjeta por juego generada desde JavaScript. |
| 4 | Ficha del juego | Al pulsar «Ver detalles» se abre la ficha con todos los datos del juego elegido. |
| 5 | Juego no encontrado | `ficha.html?id=inventado` muestra un aviso en lugar de un error. |
| 6 | Formulario de preferencias individuales | Se pueden elegir tiempo, plataforma y géneros, y el formulario avisa si falta un dato obligatorio. |
| 7 | Recomendación aleatoria | Al enviar las preferencias se muestra un juego al azar entre los compatibles. |
| 8 | Motivos de la recomendación | La recomendación explica en tres puntos por qué encaja (tiempo, plataforma y género). |
| 9 | Probar con otro juego | El botón muestra otro juego compatible sin repetir; si no quedan, lo indica. |
| 10 | Modificar filtros conservando la selección | Al volver a Preferencias siguen marcadas las opciones elegidas. |
| 11 | Ficha desde la recomendación | La ficha abierta desde la recomendación ofrece volver a la recomendación. |
| 12 | Enlace a la tienda | «Jugar en Steam» abre la página del juego en la tienda. |
| 13 | Preferencias en grupo | En modo grupo aparece el número de jugadores, que rechaza valores no válidos. |
| 14 | Accesos directos de Inicio | «Jugar solo» y «Jugar con amigos» abren Preferencias con ese modo ya marcado. |
| 15 | Sin juegos compatibles | Si ningún juego cumple las preferencias, se muestra un mensaje con una acción para continuar. |
| 16 | Error de carga | Si los datos no cargan, se muestra un aviso con el botón «Reintentar». |
| 17 | Contador de resultados | El catálogo muestra cuántos juegos hay en el listado. |
| 18 | Filtros del catálogo | Al marcar filtros, el listado y el contador muestran solo los juegos que los cumplen. |
| 19 | Limpiar filtros | «Limpiar filtros» vuelve a mostrar todos los juegos. |
| 20 | Ordenar el catálogo | El listado se puede ordenar por valoración o por título. |
| 21 | Ventana «Sobre el proyecto» | El botón de la cabecera abre la ventana, y «Entendido» o la X la cierran. |

## Nota sobre los datos

Los datos de los juegos (precios, plataformas, duración y valoraciones) son ilustrativos y orientativos, creados para este proyecto académico. No son datos oficiales de las tiendas.