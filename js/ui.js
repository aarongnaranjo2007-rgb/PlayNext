export function crearTarjeta(juego){
    const li = document.createElement("li");
    const articulo = document.createElement("article");
    const titulo = document.createElement("h3");
    titulo.textContent = juego.titulo;

    const valoracion = document.createElement("p");
    valoracion.textContent = juego.valoracion + " / 5";

    const duracion = document.createElement("p");
    duracion.textContent = juego.duracionTexto;

    const enlace = document.createElement("a");
    enlace.textContent = "Ver detalles";
    enlace.href = "ficha.html?id=" + juego.id;

    articulo.appendChild(titulo);
    articulo.appendChild(valoracion);
    articulo.appendChild(duracion);
    articulo.appendChild(enlace);
    li.appendChild(articulo);

    return li;
}

export function pintarListado(listaJuegos){
    const lista = document.querySelector("#listado-juegos");

    for (const juego of listaJuegos) {
        lista.appendChild(crearTarjeta(juego));
    }
}