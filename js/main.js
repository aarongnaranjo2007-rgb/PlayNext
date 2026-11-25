import { juegos, generos } from "./datos.js";
import { crear, obtenerTodos, obtenerPorId, actualizar, borrar } from "./almacen.js";
import { pintarListado, pintarContador, hayListado, hayFicha, pintarFicha, iniciarModal,
    iniciarFormulario, leerUsuario, pintarUsuarios, iniciarCancelar,
    iniciarLista, confirmarBorrado, rellenarUsuario, vaciarSiEditando } from "./ui.js";
import { reglasRegistro } from "./validacion.js";

iniciarModal();
iniciarFormulario("form-registro", reglasRegistro, formulario => {
    const usuario = leerUsuario(formulario);
    if (usuario.id){
        actualizar("usuarios", usuario.id, usuario);
    }else{
        crear("usuarios", usuario);
    }
    pintarUsuarios(obtenerTodos("usuarios"));
});
iniciarCancelar("form-registro", "cancelar");
iniciarLista("lista-usuarios", (accion, id) => {
    if (accion === "editar"){
        rellenarUsuario(obtenerPorId("usuarios", id));
    }
    if (accion === "borrar" && confirmarBorrado("¿Seguro que quieres borrar este usuario?")) {
        borrar("usuarios", id);
        vaciarSiEditando("form-registro", id);
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

