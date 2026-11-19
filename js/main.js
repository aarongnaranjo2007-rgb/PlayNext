import { juegos, generos } from "./datos.js";
import { pintarListado, pintarContador } from "./ui.js";

pintarListado(juegos, generos);
pintarContador(juegos.length);
