import { juegos, generos } from "./datos.js";
import { pintarListado, pintarContador, hayListado, pintarFicha } from "./ui.js";

if (hayListado()){
    pintarListado(juegos, generos);
    pintarContador(juegos.length);
} else {
    const id = location.search.slice(4);
    const juego = juegos.find(j => j.id === id);
    pintarFicha(juego, generos)
}
