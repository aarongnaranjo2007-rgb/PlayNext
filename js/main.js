import { juegos, generos } from "./datos.js";
import { crear, obtenerTodos, borrar } from "./almacen.js";
import { pintarListado, pintarContador, hayListado, hayFicha, pintarFicha, iniciarModal,
    iniciarFormulario, leerUsuario, pintarUsuarios, iniciarCancelar,
    iniciarLista, confirmarBorrado } from "./ui.js";
import { reglasRegistro } from "./validacion.js";

iniciarModal();
iniciarFormulario("form-registro", reglasRegistro, formulario => {
    crear("usuarios", leerUsuario(formulario));
    pintarUsuarios(obtenerTodos("usuarios"));
});
iniciarCancelar("form-registro", "cancelar");
iniciarLista("lista-usuarios", (accion, id) => {
    if (accion === "borrar" && confirmarBorrado("¿Seguro que quieres borrar este usuario?")) {
        borrar("usuarios", id);
        pintarUsuarios(obtenerTodos("usuarios"));
    }
});
pintarUsuarios(obtenerTodos("usuarios"));

if (hayListado()) {
    pintarListado(juegos, generos);
    pintarContador(juegos.length);
} else if (hayFicha()) {
    const id = location.search.slice(4);
    const juego = juegos.find(j => j.id === id);
    pintarFicha(juego, generos);
}

