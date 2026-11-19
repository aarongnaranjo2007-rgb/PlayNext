import { juegos, generos } from "./datos.js";
import { crearTarjeta } from "./ui.js";

const lista = document.querySelector("#listado-juegos");
lista.appendChild(crearTarjeta(juegos[0]));