import { validarObligatorio } from "./validacion.js";

function nombresGeneros(juego, generos) {
    const nombres = juego.generoIds.map(id => {
        const genero = generos.find(g => g.id === id);
        return genero.nombre;
    });

    return nombres.join(", ");
}

export function crearTarjeta(juego, generos){
    const li = document.createElement("li");
    const articulo = document.createElement("article");
    const titulo = document.createElement("h3");
    titulo.textContent = juego.titulo;

    const valoracion = document.createElement("p");
    valoracion.textContent = juego.valoracion + " / 5";

    const duracion = document.createElement("p");
    duracion.textContent = juego.duracionTexto;

    const listaGeneros = document.createElement("p");
    listaGeneros.textContent = nombresGeneros(juego, generos);

    const enlace = document.createElement("a");
    enlace.textContent = "Ver detalles";
    enlace.href = "ficha.html?id=" + juego.id;

    articulo.appendChild(titulo);
    articulo.appendChild(valoracion);
    articulo.appendChild(duracion);
    articulo.appendChild(listaGeneros);
    articulo.appendChild(enlace);
    li.appendChild(articulo);

    return li;
}

export function pintarListado(listaJuegos, generos){
    const lista = document.querySelector("#listado-juegos");

    for (const juego of listaJuegos) {
        lista.appendChild(crearTarjeta(juego, generos));
    }
}

export function pintarContador(total){
    const contador = document.querySelector("#contador-juegos");
    contador.textContent = total + " juegos";
}

export function hayListado(){
    const lista = document.querySelector("#listado-juegos");
    if (lista){
        return true;
    }else{
        return false;
    }
}

export function pintarFicha(juego, generos){
    const ficha = document.querySelector("#ficha");

    if (!juego) {
        const aviso = document.createElement("h1");
        aviso.textContent = "Juego no encontrado";
        ficha.appendChild(aviso);
        return;
    }

    const titulo = document.createElement("h1");
    titulo.textContent = juego.titulo;

    const valoracion = document.createElement("p");
    valoracion.textContent = juego.valoracion + " / 5";

    const listaGeneros = document.createElement("p");
    listaGeneros.textContent = nombresGeneros(juego, generos);

    const duracion = document.createElement("p");
    duracion.textContent = juego.duracionTexto;

    const sinopsis = document.createElement("p");
    sinopsis.textContent = juego.sinopsis;

    const precio = document.createElement("p");
    precio.textContent = juego.precio + " € en " + juego.tienda;

    const tecnicos = document.createElement("h2");
    tecnicos.textContent = "Datos técnicos";

    const jugadores = document.createElement("p");
    jugadores.textContent = "Jugadores: " + juego.jugadoresMin + " a " + juego.jugadoresMax;

    const plataforma = document.createElement("p");
    plataforma.textContent = "Plataforma: " + juego.plataformaTexto;

    const compatibilidad = document.createElement("p");
    compatibilidad.textContent = "Compatibilidad: " + juego.compatibilidad;

    const modos = document.createElement("p");
    modos.textContent = "Modos: " + juego.modos;

    const espacio = document.createElement("p");
    espacio.textContent = "Espacio: " + juego.espacio;

    const tituloRequisitos = document.createElement("h2");
    tituloRequisitos.textContent = "Requisitos y detalles";

    const requisitos = document.createElement("ul");
    for (const requisito of juego.requisitos) {
        const item = document.createElement("li");
        item.textContent = requisito;
        requisitos.appendChild(item);
    }

    ficha.appendChild(titulo);
    ficha.appendChild(valoracion);
    ficha.appendChild(listaGeneros);
    ficha.appendChild(duracion);
    ficha.appendChild(sinopsis);
    ficha.appendChild(precio);
    ficha.appendChild(tecnicos);
    ficha.appendChild(jugadores);
    ficha.appendChild(plataforma);
    ficha.appendChild(compatibilidad);
    ficha.appendChild(modos);
    ficha.appendChild(espacio);
    ficha.appendChild(tituloRequisitos);
    ficha.appendChild(requisitos);
}

export function hayFicha(){
    const ficha = document.querySelector("#ficha");
    if (ficha){
        return true;
    }else{
        return false;
    }
}

function crearElemento(etiqueta, texto){
    const elemento = document.createElement(etiqueta);
    elemento.textContent = texto;
    return elemento;
}

export function iniciarModal(){
    const dialogo = document.createElement("dialog");

    const titulo = crearElemento("h2", "Sobre PlayNext");

    const cerrar = crearElemento("button", "Cerrar");
    cerrar.type = "button";

    const queEs = crearElemento("h3", "¿Qué es PlayNext?");
    const queEsTexto = crearElemento("p", "Una herramienta pensada para eliminar la indecisión al elegir videojuego, tanto si juegas en solitario como si buscas plan con amigos.");

    const comoFunciona = crearElemento("h3", "¿Cómo funciona el recomendador?");
    const puntos = [
        "Filtrado rápido: encuentra juegos según tiempo, modo, plataforma y género.",
        "Datos locales: de momento trabaja con un catálogo propio de juegos de ejemplo.",
        "Recomendaciones directas: sin cuentas obligatorias ni pasos innecesarios."
    ];
    const lista = document.createElement("ul");
    for (const punto of puntos) {
        lista.appendChild(crearElemento("li", punto));
    }

    const entendido = crearElemento("button", "Entendido");
    entendido.type = "button";

    dialogo.appendChild(titulo);
    dialogo.appendChild(cerrar);
    dialogo.appendChild(queEs);
    dialogo.appendChild(queEsTexto);
    dialogo.appendChild(comoFunciona);
    dialogo.appendChild(lista);
    dialogo.appendChild(entendido);
    document.body.appendChild(dialogo);

    const abrir = document.querySelector("header button");
    abrir.addEventListener("click", () => dialogo.showModal());
    cerrar.addEventListener("click", () => dialogo.close());
    entendido.addEventListener("click", () => dialogo.close());
}
export function mostrarError(campo, mensaje){
    const aviso = document.querySelector("#error-" + campo.id);
    aviso.textContent = mensaje;
    campo.setAttribute("aria-invalid", "true");
}

export function limpiarError(campo){
    const aviso = document.querySelector("#error-" + campo.id);
    aviso.textContent = "";
    campo.removeAttribute("aria-invalid");
}

function validarCampo(formulario, reglas, nombre) {
    const campo = formulario.elements[nombre];
    let error = null;

    if (campo.required && campo.type !== "checkbox") {
        error = validarObligatorio(campo.value);
    }
    if (error === null) {
        error = reglas[nombre](formulario.elements);
    }

    if (error === null) {
        limpiarError(campo);
        return true;
    }
    mostrarError(campo, error);
    return false;
}

function validarFormulario(formulario, reglas) {
    let primerCampoConError = null;

    for (const nombre in reglas) {
        const valido = validarCampo(formulario, reglas, nombre);
        if (!valido && primerCampoConError === null) {
            primerCampoConError = formulario.elements[nombre];
        }
    }

    if (primerCampoConError !== null) {
        primerCampoConError.focus();
        return false;
    }
    return true;
}

function activarValidacion(formulario, reglas) {
    for (const nombre in reglas) {
        const campo = formulario.elements[nombre];

        campo.addEventListener("blur", () => {
            campo.dataset.tocado = "true";
            validarCampo(formulario, reglas, nombre);
        });

        campo.addEventListener("input", () => {
            if (campo.dataset.tocado === "true") {
                validarCampo(formulario, reglas, nombre);
            }
        });
    }
}

export function iniciarFormulario(idFormulario, reglas, alEnviar) {
    const formulario = document.querySelector("#" + idFormulario);
    if (formulario === null) {
        return;
    }

    activarValidacion(formulario, reglas);

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        if (validarFormulario(formulario, reglas)) {
            alEnviar(formulario);
            vaciarFormulario(formulario);
        }
    });
}

export function leerUsuario(formulario) {
    const campos = formulario.elements;
    return {
        id: campos.id.value,
        usuario: campos.usuario.value.trim(),
        correo: campos.correo.value.trim(),
        nacimiento: campos.nacimiento.value,
        acepto: campos.acepto.checked
    };
}

function vaciarFormulario(formulario) {
    formulario.reset();
    if (formulario.elements.id){
        formulario.elements.id.value = "";
    }
    for (const campo of formulario.elements) {
        delete campo.dataset.tocado;
        campo.removeAttribute("aria-invalid");
    }
}

export function pintarUsuarios(usuarios) {
    const lista = document.querySelector("#lista-usuarios");
    if (lista === null) {
        return;
    }

    lista.textContent = "";

    if (usuarios.length === 0) {
        lista.appendChild(crearElemento("li", "Todavía no hay usuarios registrados."));
        return;
    }

    for (const usuario of usuarios) {
        const item = document.createElement("li");
        const datos = crearElemento("p", usuario.usuario + " · " + usuario.correo + " · " + usuario.nacimiento);

        const editar = crearElemento("button", "Editar");
        editar.type = "button";
        editar.dataset.accion = "editar";
        editar.dataset.id = usuario.id;

        const borrar = crearElemento("button", "Borrar");
        borrar.type = "button";
        borrar.dataset.accion = "borrar";
        borrar.dataset.id = usuario.id;

        item.appendChild(datos);
        item.appendChild(editar);
        item.appendChild(borrar);
        lista.appendChild(item);
    }
}

export function iniciarCancelar(idFormulario, idBoton) {
    const formulario = document.querySelector("#" + idFormulario);
    const boton = document.querySelector("#" + idBoton);
    if (formulario === null || boton === null) {
        return;
    }

    boton.addEventListener("click", () => {
        vaciarFormulario(formulario);
        for (const campo of formulario.elements) {
            if (campo.id !== "") {
                const aviso = document.querySelector("#error-" + campo.id);
                if (aviso !== null) {
                    aviso.textContent = "";
                }
            }
        }
    });
}

export function iniciarLista(idLista, alPulsar){
    const lista = document.querySelector("#" + idLista);
    if (!lista){
        return;
    }

    lista.addEventListener("click", evento => {
        const boton = evento.target;
        if (boton.tagName === "BUTTON"){
            alPulsar(boton.dataset.accion, boton.dataset.id);
        }
    });
}

export function confirmarBorrado(texto){
    return confirm(texto);
}

export function rellenarUsuario(usuario){
    const formulario = document.querySelector("#form-registro");
    const campos = formulario.elements;

    campos.id.value = usuario.id;
    campos.usuario.value = usuario.usuario;
    campos.correo.value = usuario.correo;
    campos.nacimiento.value = usuario.nacimiento;
    campos.acepto.checked = usuario.acepto;
    campos.usuario.focus();
}

export function vaciarSiEditando(idFormulario, id){
    const formulario = document.querySelector("#" + idFormulario);
    if (formulario.elements.id.value === id){
        vaciarFormulario(formulario);
    }
}

export function iniciarContador(idCampo, idContador){
    const campo = document.querySelector("#" + idCampo);
    const contador = document.querySelector("#" + idContador);
    if (!campo || !contador){
        return;
    }

    campo.addEventListener("input", () => {
        contador.textContent = campo.value.length + " / " + campo.maxLength;
    });

    campo.form.addEventListener("reset", () => {
        contador.textContent = "0 / " + campo.maxLength;
    });
}

export function leerMensaje(formulario){
    const campos = formulario.elements;
    return {
        nombre: campos.nombre.value.trim(),
        email: campos.email.value.trim(),
        telefono: campos.telefono.value.trim(),
        motivo: campos.motivo.value,
        llamar: campos.llamar.checked,
        mensaje: campos.mensaje.value.trim(),
        fecha: new Date().toISOString()
    };
}

export function pintarMensajes(mensajes, motivos){
    const lista = document.querySelector("#lista-mensajes");
    if (!lista){
        return;
    }

    lista.textContent = "";

    if (mensajes.length === 0){
        lista.appendChild(crearElemento("li", "Todavía no has enviado ningún mensaje."));
        return;
    }

    for (const mensaje of mensajes){
        const item = document.createElement("li");
        const cabecera = crearElemento("p", mensaje.nombre + " · " + motivos[mensaje.motivo]);
        const texto = crearElemento("p", mensaje.mensaje);

        const borrar = crearElemento("button", "Borrar");
        borrar.type = "button";
        borrar.dataset.accion = "borrar";
        borrar.dataset.id = mensaje.id;

        item.appendChild(cabecera);
        item.appendChild(texto);
        item.appendChild(borrar);
        lista.appendChild(item);
    }
}

function guardarCookie(nombre, valor, dias){
    const caducidad = new Date();
    caducidad.setDate(caducidad.getDate() + dias);
    document.cookie = nombre + "=" + encodeURIComponent(valor)
        + "; expires=" + caducidad.toUTCString() + "; path=/";
}

function leerCookie(nombre){
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies){
        const partes = cookie.split("=");
        if (partes[0] === nombre){
            return decodeURIComponent(partes[1]);
        }
    }
    return null;
}

export function recordarContacto(formulario){
    const campos = formulario.elements;
    guardarCookie("contactoNombre", campos.nombre.value.trim(), 30);
    guardarCookie("contactoEmail", campos.email.value.trim(), 30);
}

export function rellenarContacto(){
    const formulario = document.querySelector("#form-contacto");
    if (!formulario){
        return;
    }

    const nombre = leerCookie("contactoNombre");
    const email = leerCookie("contactoEmail");
    if (nombre){
        formulario.elements.nombre.value = nombre;
    }
    if (email){
        formulario.elements.email.value = email;
    }
}