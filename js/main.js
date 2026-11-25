import { juegos, generos } from "./datos.js";
import { crear, obtenerTodos } from "./almacen.js";
import { pintarListado, pintarContador, hayListado, hayFicha, pintarFicha, iniciarModal,
    iniciarFormulario, leerUsuario, pintarUsuarios, iniciarCancelar } from "./ui.js";
import { reglasRegistro } from "./validacion.js";

iniciarModal();
iniciarFormulario("form-registro", reglasRegistro, formulario => {
    crear("usuarios", leerUsuario(formulario));
    pintarUsuarios(obtenerTodos("usuarios"));
});
iniciarCancelar("form-registro", "cancelar");
pintarUsuarios(obtenerTodos("usuarios"));

if (hayListado()) {
    pintarListado(juegos, generos);
    pintarContador(juegos.length);
} else if (hayFicha()) {
    const id = location.search.slice(4);
    const juego = juegos.find(j => j.id === id);
    pintarFicha(juego, generos);
}

