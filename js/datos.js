export const generos = [
    { id: "accion", nombre: "Acción" },
    { id: "roguelike", nombre: "Roguelike" },
    { id: "cooperativo", nombre: "Cooperativo" },
    { id: "estrategia", nombre: "Estrategia" },
    { id: "rol", nombre: "Rol/RPG" },
    { id: "fps", nombre: "FPS" }
];

export const juegos = [
    {
        id: "helldivers-2",
        titulo: "Helldivers 2",
        generoIds: ["accion", "cooperativo"],
        plataformas: ["pc"],
        duracion: "corta",
        jugadoresMin: 1,
        jugadoresMax: 4,
        modalidad: ["solo", "grupo"],
        valoracion: 4.7,
        precio: 39.99,
        tienda: "Steam",
        duracionTexto: "~30 min / partida",
        sinopsis: "Únete a las fuerzas de Helldivers y lucha por la libertad a través de una galaxia hostil en este frenético shooter cooperativo en tercera persona. Misiones dinámicas diseñadas para partidas de 30 a 45 minutos.",
        plataformaTexto: "PC (Steam)",
        compatibilidad: "Mando completo / Verificado en Steam Deck",
        modos: "Cooperativo Online",
        espacio: "100 GB",
        requisitos: [
            "Requiere conexión a Internet constante y cuenta de PlayStation Network en PC",
            "Crossplay total habilitado entre jugadores de PC y consola.",
            "Matchmaking rápido adaptado a partidas casuales o coordinadas."
        ],
        portada: "img/helldivers-2.jpg"
    }
];