# BRIEF — PlayNext

PlayNext ayuda a elegir a qué videojuego jugar mediante una recomendación guiada o la exploración de un catálogo. Este brief convierte la hipótesis inicial en una propuesta de primera versión basada en la investigación realizada. Los criterios de éxito son objetivos para comprobar, no resultados de pruebas ya realizadas.

## 1. Problema respaldado por datos

### Hipótesis inicial

Las personas que juegan habitualmente en PC y tienen muchos videojuegos disponibles necesitan decidir a qué jugar en su tiempo libre, solas o con amigos, pero la cantidad de opciones y la dificultad para encontrar una que les apetezca complican la elección.

### Investigación y evidencias

Se realizaron dos entrevistas mediante conversaciones con toma de notas, con consentimiento para utilizar las respuestas y códigos para proteger la privacidad, y una encuesta a 12 personas del entorno cercano. Esta muestra orienta el proyecto, pero no representa a todos los jugadores.

- P1, entrevistado el 16/10/2026, describió cómo terminó cerrando Steam sin jugar después de revisar su biblioteca al llegar del trabajo. Consideraba el tiempo disponible, el esfuerzo de aprender controles y la necesidad de consultar tutoriales. Le ayudaría una explicación breve del tipo de experiencia y la duración de una partida.
- P2, entrevistado el 17/10/2026, relató que cinco amigos no consiguieron acordar un juego y terminaron jugando por separado. Necesitaban comprobar participantes admitidos, juego en línea, tiempo disponible, propiedad del juego y posibles descargas.
- Las 12 personas encuestadas mencionaron Steam. Varias señalaron dificultades para ponerse de acuerdo y algunas describieron repetir juegos, jugar por separado o no jugar. Once mostraron interés por una selección aleatoria, a veces con condiciones como poder descartar juegos. Una indicó que probablemente no la utilizaría mucho.

No se calculó un tiempo medio de decisión por la amplitud o contradicción de algunas respuestas. El interés por conectar cuentas fue desigual, con dudas sobre seguridad y permisos.

El análisis de Steam Interactive Recommender y Co-Optimus aportó referencias sobre preferencias, recomendaciones e información de jugadores y modalidades. Sus posibles dificultades se registraron como observaciones, no como fallos demostrados mediante pruebas con usuarios.

## 2. Alcance del MVP

La prioridad es la elección individual de Alex. La ruta grupal atiende necesidades básicas de Laura; esta prioridad es una decisión de alcance, no una conclusión sobre la frecuencia de cada perfil.

### Funciones incluidas

- Configurar juego individual o con amistades, género, tiempo y plataforma o tienda. En grupo se añaden número de jugadores y modalidad.
- Obtener una recomendación mediante filtrado y selección aleatoria entre juegos compatibles, con una explicación breve de por qué encaja.
- Pedir otra opción o volver a las preferencias conservando la selección. Informar cuando no queden recomendaciones distintas.
- Explorar tarjetas del catálogo, aplicar y limpiar filtros y consultar una ficha. El flujo contempla también una selección aleatoria desde el catálogo.
- Consultar portada, descripción breve y datos disponibles de género, plataforma, jugadores, modalidad y duración orientativa, con acceso opcional a una página externa.
- Mostrar validaciones, ausencia de resultados y errores de carga, ofreciendo una acción para continuar.
- Abrir y cerrar una explicación estática del proyecto en una ventana informativa.

### Fuera de esta versión

Buscador por título; favoritos; registro, perfiles y sincronización; conexión de cuentas e importación de bibliotecas; comprobación automática de juegos compartidos; votaciones; recomendaciones con IA; vídeos integrados y sistema propio de reseñas.

### Estructura y recorridos

Las vistas son Inicio, Preferencias de juego —individuales o grupales—, Catálogo, Ficha del juego y la ventana Sobre el proyecto. La ficha es compartida: cuando procede del recomendador, incorpora el motivo y la opción de pedir otra.

- Alex: Inicio → Elegir por mí → Jugar solo → Preferencias → Ficha con recomendación → Juego elegido.
- Laura: Inicio → Elegir por mí → Jugar en grupo → Número de jugadores → Preferencias grupales → Ficha con recomendación → Juego elegido.
- Exploración: Inicio → Catálogo → Filtros o exploración → Ficha → Juego elegido.

## 3. Personas y enlaces a sus fichas

Las fichas se incluyen en este documento para que los enlaces sean utilizables sin inventar direcciones externas: [ficha de Alex](#persona-alex) y [ficha de Laura](#persona-laura).

Se construyeron mediante affinity mapping de entrevistas, encuesta y referentes, conservando los códigos y diferenciando evidencias de participantes de observaciones de diseño. Los grupos fueron tiempo y ganas, búsqueda insatisfactoria, compatibilidad grupal, comprensión de la recomendación, control y contexto técnico.

### Persona Alex

Persona principal de elección individual. Nombre ficticio; perfil basado principalmente en P1, con apoyo de la encuesta.

- Contexto: PC o Steam Deck; PC por cable y buena conexión declarada en Steam Deck. El episodio investigado ocurre en el escritorio de casa, por la tarde, después de trabajar. No se confirmó el lugar habitual de uso de Steam Deck.
- Objetivos: encontrar algo adecuado al tiempo y las ganas; entender la experiencia y duración; dedicar su rato libre a jugar.
- Frustraciones: no saber qué le apetece, aprender controles o consultar tutoriales y terminar repitiendo un juego o sin jugar.
- Trazabilidad: P1, hallazgos E1-H1 a E1-H9 y respuestas pertinentes; apoyo de ENC-R02, ENC-R10 y ENC-R12.

### Persona Laura

Persona secundaria de elección con amistades, basada principalmente en P2, con apoyo de la encuesta.

- Contexto: PS5 por cable y portátil con wifi que funciona mal en su habitación; uso en salón y habitación, por la noche después de clase.
- Objetivos: encontrar una opción compatible con el grupo; comprobar jugadores y modalidad en línea; considerar duración y esperas de descarga.
- Frustraciones: diferencias de gustos, que alguien no tenga el juego o no pueda entrar, y terminar jugando por separado.
- Trazabilidad: P2, hallazgos E2-H1 a E2-H6 y contexto de entrevista; apoyo de ENC-R03, ENC-R06, ENC-R08 y ENC-R12.

## 4. Criterios de éxito comprobables

Se derivan de las tareas y necesidades anteriores. Se comprobarán con participantes que representen cada contexto, registrando si completan la tarea sin explicación del recorrido, las dudas y los bloqueos. No se establecen porcentajes o tiempos de rendimiento sin una base previa.

| Persona o situación | Comprobación | Condición de éxito |
| --- | --- | --- |
| Alex | Configurar una sesión individual y consultar la propuesta. | Llega a la ficha sin registrarse ni recorrer todo el catálogo e identifica experiencia y duración cuando el dato está disponible. |
| Alex | Rechazar la primera propuesta. | Solicita otra o modifica las preferencias sin introducir de nuevo toda la selección. |
| Laura | Configurar una sesión para su grupo. | Corrige un número no válido y comprueba participantes admitidos y modalidad de la propuesta. |
| Laura | Interpretar los límites de la recomendación. | Entiende que debe comprobar por su cuenta quién posee el juego. |
| Ambos perfiles | Explorar y corregir una búsqueda por filtros. | Abren una ficha y pueden limpiar o modificar los filtros. |
| Ambos perfiles | Encontrar un error o ausencia de alternativas. | Entienden el mensaje y localizan cómo continuar sin quedar bloqueados. |

La revisión realizada desde las perspectivas de Alex y Laura no equivale a una prueba del prototipo con participantes.

Como comprobación final del tablero, se mostrará a alguien ajeno al proyecto, sin explicación previa. En unos cinco minutos deberá entender de qué trata la aplicación y cómo funciona. Esta comprobación sigue pendiente; no se afirma que se haya superado.

## 5. Restricciones del proyecto

### Técnicas y de alcance

Se plantea un conjunto limitado de juegos con información suficiente para filtrar y un fichero local de compatibilidad. No se utiliza IA ni se depende de cuentas conectadas. Los datos no disponibles no se presentarán como confirmados. La aplicación no verifica propiedad ni instalación de juegos.

Quedan por concretar los filtros obligatorios, el máximo del selector de jugadores, la presentación de cooperativo local frente a en línea y el mensaje cuando se agoten las recomendaciones distintas.

### Diseño y entrega

Los wireframes utilizan frames de 1280 × 800, baja fidelidad, blanco, negro y un gris medio, sin emojis de colores. Se ha planteado reutilizar cabecera y botones como componentes. El brief final debe estar en el repositorio como BRIEF.md; generar el archivo no equivale a publicarlo en GitHub.

### Restricción ambiental verificable

Para atender el contexto de peor conexión, representado por el portátil de Laura, se mantiene la exclusión ya definida de vídeos integrados. La condición medible es cero vídeos o reproductores de vídeo integrados y cero bytes transferidos por ellos durante los recorridos del MVP. Se comprobará en la implementación mediante inspección de la interfaz y las solicitudes de red. Esta medida no equivale a un presupuesto del peso total por página ni demuestra por sí sola sostenibilidad global.

Como referencia se toman las Web Sustainability Guidelines. En la versión consultada del 16/10/2026, la sección 2.4 aborda recorridos eficientes; la 2.9 trata la necesidad y optimización de medios, y la 5.24 los presupuestos ambientales y de rendimiento. No se atribuye al W3C un límite numérico de peso que no se haya establecido.
