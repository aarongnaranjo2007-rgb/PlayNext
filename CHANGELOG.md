# CHANGELOG — Uso de IA en PlayNext

## 18/10/2026

Registro de la revisión y documentación del proyecto con IA, organizado por etapas. Las peticiones están resumidas por tema, no transcritas literalmente. La investigación, las personas y el alcance fueron aportados por mí; la IA ayudó a sintetizarlos y redactarlos.

### 01. Hipótesis inicial

- Qué pedí: Incorporar mi hipótesis al brief.
- Qué me devolvió: Una redacción del problema y la necesidad de respaldarlo con datos.
- Qué conservé: La elección individual y con amigos como punto de partida.
- Qué cambié: Separé la hipótesis de las conclusiones de investigación.

### 02. Análisis de referentes

- Qué pedí: Aporté mi análisis de Steam Interactive Recommender y Co-Optimus para redactar el brief.
- Qué me devolvió: Una síntesis de las ideas aplicables a PlayNext.
- Qué conservé: Preferencias claras, recomendación principal e información de jugadores y modalidad.
- Qué cambié: Mantuve las dificultades como observaciones, no como fallos demostrados.

### 03. Entrevistas y encuesta

- Qué pedí: Utilizar las entrevistas P1/P2 y mi encuesta.
- Qué me devolvió: Un apartado de problema respaldado por datos.
- Qué conservé: Dos entrevistas, 12 encuestados y las limitaciones de la muestra.
- Qué cambié: Reemplacé los datos del informe anterior y no añadí una media de decisión.

### 04. Affinity mapping

- Qué pedí: Aporté los seis grupos de hallazgos como base de las personas.
- Qué me devolvió: Una explicación resumida de la construcción de los perfiles.
- Qué conservé: La agrupación y la trazabilidad aportadas.
- Qué cambié: Diferencié evidencias de participantes, observaciones y propuestas de diseño.

### 05. Personas

- Qué pedí: Incorporar las fichas de Alex y Laura.
- Qué me devolvió: Resúmenes de objetivos, frustraciones y contextos.
- Qué conservé: Los perfiles aportados y la prioridad individual.
- Qué cambié: Evité atributos sin fuente. La prioridad se explicó como decisión de alcance.

### 06. MVP

- Qué pedí: Utilizar mi relación de funciones incluidas y excluidas.
- Qué me devolvió: Una síntesis del alcance y sus límites.
- Qué conservé: Recomendación guiada, catálogo y preferencias grupales básicas.
- Qué cambié: Se eliminaron funciones añadidas anteriormente, como buscador y favoritos.

### 07. User flow

- Qué pedí: Aporté los recorridos y su revisión desde Alex y Laura.
- Qué me devolvió: Un resumen de rutas, recuperación y pendientes.
- Qué conservé: La vuelta a preferencias conservando la selección.
- Qué cambié: No se presentó la revisión del flujo como una prueba con participantes.

### 08. Sitemap

- Qué pedí: Incorporar mi inventario y estructura de vistas.
- Qué me devolvió: Una síntesis de las vistas y sus estados.
- Qué conservé: La ficha compartida por catálogo y recomendador.
- Qué cambié: Se corrigió la propuesta de una pantalla Resultado independiente.

### 09. Wireframe de Inicio

- Qué pedí: Ayuda pantalla por pantalla y revisión de mi captura.
- Qué me devolvió: Ajustes de formato, grises, separador, marcador del logotipo y guías.
- Qué conservé: La distribución general y los accesos.
- Qué cambié: Decidí usar 1280 × 800 y confirmé la aplicación de los retoques.

### 10. Componentes

- Qué pedí: Continuar después de aplicar los retoques.
- Qué me devolvió: Pasos para crear la cabecera como componente y colocar una instancia.
- Qué conservé: Las instrucciones como orientación de trabajo.
- Qué cambié: La finalización de componentes e interacciones no quedó confirmada.

### 11. BRIEF.md

- Qué pedí: Redactar el brief con mis materiales y los cinco elementos exigidos.
- Qué me devolvió: Un archivo con problema, MVP, personas, criterios y restricciones.
- Qué conservé: La versión basada en los materiales que aporté, para revisión final.
- Qué cambié: Rechacé las versiones basadas en el informe o centradas solo en retoques.

### 12. Criterios de éxito y restricción ambiental

- Qué pedí: Incluir estos elementos al completar el brief según el enunciado.
- Qué me devolvió: Criterios por tarea y una propuesta ambiental basada en excluir vídeos.
- Qué conservé: Las propuestas dentro del documento generado, pendientes de revisión.
- Qué cambié: No se dieron por obtenidos resultados de pruebas ni mediciones ambientales.

### 13. Registro del uso de IA

- Qué pedí: Organizar el changelog por etapas con petición, respuesta, selección y cambios.
- Qué me devolvió: Varias versiones del registro y esta organización.
- Qué conservé: Los cuatro campos exigidos.
- Qué cambié: Se sustituyeron las peticiones hipotéticas por resúmenes de consultas y materiales realmente compartidos.

## 06/11/2026 · Ajuste de jerarquía en Inicio tras análisis con Stitch

- **Qué le pedí a la IA:** Valoración de la propuesta de Stitch para mantener los accesos directos de "Jugar solo" y "Jugar con amigos" en la pantalla de Inicio vinculados a la preselección en el formulario.
- **Qué me devolvió:** Recomendación de jerarquizar visualmente los elementos: botón primario sólido prominente para "Elegir por mí" y botones secundarios de contorno para los atajos preconfigurados.
- **Qué conservé:** El patrón de atajo rápido de "Jugar solo" y "Jugar con amigos" para precargar el estado correspondiente en la pantalla de preferencias.
- **Qué cambié:** Se redujo el peso visual de los atajos frente al CTA principal mediante estilos secundarios para evitar la competencia visual que existía en el wireframe original de la Órbita 1.

## 06/11/2026 · Descarte de la propuesta de Stitch para Preferencias y validación del diseño final

- **Qué le pedí a la IA (Google Stitch):** Generación de una alternativa rediseñada para la pantalla de "Preferencias de juego".
- **Qué me devolvió:** Una propuesta compleja de doble columna en formato modal, con el modo "Jugar en grupo" activo de forma predeterminada, un selector de número de jugadores visible y un formulario basado en tradicionales casillas de verificación (checkboxes).
- **Qué conservé:** Únicamente la idea de estructurar el contenido en bloques o paneles visualmente acotados para organizar mejor la información.
- **Qué cambié:** Descarte por completo la propuesta de Stitch por varios motivos críticos: obligaba a interactuar con el flujo grupal (incoherente con el happy path individual de Alex), utilizaba checkboxes de difícil interacción táctil en lugar de chips y adoptaba una estructura de ventana modal que rompía la navegación natural. En su lugar, dibujé una pantalla completa con "Jugar solo" preseleccionado (ocultando el contador de jugadores) y transformé las opciones en chips interactivos agrupados en dos tarjetas temáticas claras (Tiempo/Plataforma y Géneros).

## 07/11/2026 · Rediseño de la pantalla de Recomendación

- **Qué le pedí a la IA (Google Stitch):** Generación de una propuesta con jerarquía mejorada para la pantalla de Recomendación.
- **Qué me devolvió:** Un diseño que integra la justificación "¿Por qué encaja contigo hoy?" en un panel lateral con factores clave, añade un indicador de afinidad y un botón directo "Probar con otro juego ↻".
- **Qué conservé:** El panel de justificación por factores clave y el botón de descarte rápido "Probar con otro juego ↻" junto al CTA principal.
- **Qué cambié:** Decidí descartar de forma definitiva las miniportadas secundarias que estaban en el wireframe original de la Órbita 1 para priorizar un layout más limpio y directo para Alex, evitando elementos visuales superfluos antes de entrar a la ficha completa.

## 07/11/2026 · Rediseño de la pantalla de Ficha del juego 

- **Qué le pedí a la IA:** Generación de una estructura visual optimizada para la pantalla final de "Ficha del juego" orientada a la toma de decisión rápida.
- **Qué me devolvió:** Una propuesta a dos columnas con material visual a la izquierda, metadatos y tarjeta de conversión a la derecha, e inclusión de botones secundarios como "Añadir a favoritos" y atajos adicionales.
- **Qué conservé:** El layout en dos columnas para separar datos técnicos de la sinopsis/acción de compra, la jerarquización del botón principal "Jugar en Steam →" en una tarjeta destacada y la inclusión de chips de datos clave (`< 45 min`, verificación en Steam Deck) para la persona principal (Alex).
- **Qué cambié:** Se descartó el botón de "Añadir a favoritos" para mantener estricta coherencia con el alcance del MVP; se reincorporó el carrusel de tres miniportadas bajo la captura principal respetando la identidad del wireframe previo; y se eliminaron enlaces de retroceso redundantes (`< Modificar mis filtros`) dejando una única salida clara hacia la recomendación.

## 07/11/2026 · Construcción del Sistema de Color y Tokens Semánticos 

- **Qué le pedí a la IA:** A partir del inventario de tokens del Paso 1 y de la selección inicial de colores que definí para Playnext (la gama fría slate con base oscura #0B0F19, el acento índigo y el ámbar de soporte), pedí ayuda para estructurar las escalas numéricas completas (50 al 900) y verificar la tabla matemática de contrastes WCAG 2.2 para los modos claro y oscuro.
- **Qué me devolvió:** La propuesta de pasos intermedios para completar las familias cromáticas primitivas, el desglose de ratios de contraste para cada pareja semántica y la justificación teórica basada en la regla 60-30-10 y la reducción de fatiga decisional de Alex.

## 07/11/2026 · Definición de Tipografía, Escala Proporcional y Semántica HTML 

- **Qué le pedí a la IA:** Orientación para estructurar la escala tipográfica de 7 niveles, verificar la correspondencia con las etiquetas HTML a partir de mis wireframes rediseñados y plantear el bloque de prueba de texto al 200 % exigido por WCAG 1.4.4.
- **Qué me devolvió:** Una propuesta inicial de escala con textos genéricos y dos pesos adicionales (incluyendo Bold 700), junto con una tabla preliminar con niveles repetidos.
- **Qué conservé:** El uso de Plus Jakarta Sans como familia única de Google Fonts, la tabla de correspondencia semántica que explica cómo el sistema sustituye el estilo nativo del navegador y el planteamiento del test de ampliación al 200 % con Auto Layout.
- **Qué cambié:** Unifiqué el peso del logotipo a Semi-Bold (600) para ceñirme de forma estricta a solo dos archivos de descarga (400 y 600) según las pautas WSG; corregí los textos de ejemplo para utilizar exclusivamente los copys reales de mis pantallas rediseñadas (Inicio, Preferencias, Recomendación y Ficha); y fusioné la fila duplicada de `body-md` en la tabla HTML para agrupar párrafos `<p>` y enlaces `<a>` bajo el mismo token visual.
- **Qué conservé:** La validación de ratios accesibles (WCAG AA/AAA) calculados para cada pareja y la estructura de comportamiento adaptativo en modo oscuro (donde el botón primario pasa a un tono más luminoso con tipografía oscura para evitar deslumbramientos).
- **Qué cambié:** Mantuve el control directo sobre la paleta: descarté gamas secundarias adicionales sugeridas inicialmente (como tonos cyan) para ceñirme de forma estricta a los tokens y necesidades reales que ya había determinado en mi inventario de la Órbita 1.

