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
