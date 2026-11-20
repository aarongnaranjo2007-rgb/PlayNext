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