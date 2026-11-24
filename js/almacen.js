function leer(coleccion) {
    const texto = localStorage.getItem(coleccion);
    if (texto === null) {
        return [];
    }
    return JSON.parse(texto);
}

function guardar(coleccion, lista) {
    localStorage.setItem(coleccion, JSON.stringify(lista));
}

export function obtenerTodos(coleccion) {
    return leer(coleccion);
}

export function obtenerPorId(coleccion, id) {
    return leer(coleccion).find(elemento => elemento.id === id);
}

export function crear(coleccion, dato) {
    const lista = leer(coleccion);
    const nuevo = { ...dato, id: Date.now().toString() };
    lista.push(nuevo);
    guardar(coleccion, lista);
    return nuevo;
}

export function actualizar(coleccion, id, dato) {
    const lista = leer(coleccion);
    const posicion = lista.findIndex(elemento => elemento.id === id);
    if (posicion === -1) {
        return null;
    }
    lista[posicion] = { ...dato, id: id };
    guardar(coleccion, lista);
    return lista[posicion];
}

export function borrar(coleccion, id) {
    const lista = leer(coleccion).filter(elemento => elemento.id !== id);
    guardar(coleccion, lista);
}