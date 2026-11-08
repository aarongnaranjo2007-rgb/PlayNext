# Órbita 2: sistema visual de Playnext

## Enlaces
| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | https://www.figma.com/design/USQdWFRuLuWW6z78DrRSHk/Plantilla-para-iniciar-proyectos--Community-?node-id=0-1&t=HH2TzeoEcNWjjBkL-1 |
| Prototipo (enlace que empieza por `figma.com/proto/`) | https://www.figma.com/proto/USQdWFRuLuWW6z78DrRSHk/Plantilla-para-iniciar-proyectos--Community-?node-id=869-709&p=f&t=M93Ulv409jmJ171J-1&scaling=min-zoom&content-scaling=fixed&page-id=680%3A203&starting-point-node-id=869%3A709 |
| Proyecto de Google Stitch | https://stitch.withgoogle.com/projects/17416736062784526189  |

## Dónde está cada cosa en Figma
| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | Wireframes (junto al frame analizado) |
| Wireframes rediseñados con sus notas | Wireframes > Sección Wireframes rediseñados |
| Componentes | Componentes |
| Mockups del happy path | Mockups (01_Home, 02_Preferencias de juego, 03_Recomendación, 04_Ficha del juego) |
| Pantalla principal en el segundo ancho | Mockups > 01_Home_Mobile (360x800) |
| Pantallas en modo oscuro | Mockups > 01_Home_Dark y 03_Recomendación_Dark |
| Guía de estilo | Guía de Estilos |

## Lista de comprobación de Figma
- [x] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [x] Estilos de texto, efecto y retícula vinculados a las variables.
- [x] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [x] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [x] Pantalla principal en un segundo ancho, con los mismos componentes.
- [x] Modo oscuro aplicado con el selector de modo.
- [x] Prototipo que recorre el happy path completo.
- [x] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [x] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones
### Rediseño de los wireframes
Se simplificaron los pasos para reducir la carga cognitiva (Ley de Hick). En Recomendación se añadieron 3 factores clave transparentes y se reordenó los botones inferiores para no repetir acciones ni confundir el flujo.

### Color
Color principal índigo (`#4F46E5`) por su contraste y asociación con entornos digitales/gaming accesibles. El contraste mínimo cumple WCAG AA en ambos modos (> 4,5:1 en textos con `color/on-surface`).

### Tipografía
Plus Jakarta Sans por su excelente legibilidad en pantalla y jerarquía en interfaz. Escala contenida con pesos Regular y SemiBold para optimizar rendimiento de carga web.

### Espaciado y retícula
Escala base de 8 px (con token de 4 px para microespaciados). Retícula de escritorio de 12 columnas (1280 px) y retícula móvil para 360 px.

### Componentes
Botones (variantes primario, secundario, estados hover/default), tarjetas modulares, selectores y chips interactivos construidos íntegramente con Auto Layout.

### Responsive y modo oscuro
Al adaptar la Home a 360 px se simplificó la cabecera, se ajustaron anchos a `Fill container` y los accesos rápidos pasaron a apilado vertical cumpliendo áreas táctiles mínimas de 44 px. En modo oscuro los tokens semánticos invierten las superficies sin pérdida de contraste.

## Uso de IA
Se utilizó IA como asistente de auditoría y revisión de especificaciones técnicas para contrastar las variables semánticas, Auto Layout y consistencia jerárquica con la rúbrica del proyecto. Detalle registrado en CHANGELOG.md.

## Lo que ha quedado pendiente
Ficha técnica final con imagen definitiva aplazada a Órbita 3 conforme a las directrices del enunciado.
