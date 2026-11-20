import { juegos, generos } from "./datos.js";
import { pintarListado, pintarContador, hayListado, hayFicha, pintarFicha, iniciarModal } from "./ui.js";

iniciarModal();

if (hayListado()) {
    pintarListado(juegos, generos);
    pintarContador(juegos.length);
} else if (hayFicha()) {
    const id = location.search.slice(4);
    const juego = juegos.find(j => j.id === id);
    pintarFicha(juego, generos);
}

