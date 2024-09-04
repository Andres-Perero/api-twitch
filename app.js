const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Usa el puerto asignado por Vercel o el puerto 3000

// Definición de personajes con técnicas de ataque
const personajesDB = {
    "Goku": ["Kamehameha", "Genki Dama"],
    "Vegeta": ["Final Flash", "Big Bang Attack"],
    "Piccolo": ["Ilusión de Imagen", "Makankosappo"],
    "Gohan": ["Masenko", "Kamehameha"],
    "Krillin": ["Kamehameha", "Kienzan"],
    "Yamcha": ["Golpe Colmillo de Lobo", "Onda de Ki"],
    "Bulma": ["Pistola Láser", "Granada"],
    "Zarbon": ["Transformación", "Aplastamiento Monstruoso"],
    "Dodoria": ["Bola de Energía", "Cabeza de Toro"],
    "Ginyu": ["Especial de la Fuerza Ginyu", "Cambio de Cuerpo"],
    "Recoome": ["Rayo Recoome", "Pistola Borradora"],
    "Nail": ["Ataques multiples", "Explosión de Ki"],
    "Dende": ["Sanación", "Explosión de Ki"],
    "Trunks (del futuro)": ["Burning Attack", "Corte de Espada"],
    "Freezer": ["Bola de la Muerte", "Supernova"],
    "Milk": ["Ataque de Velocidad", "¡Aléjate de mí!"],
    "Maestro Roshi": ["Mafuba", "Kamehameha"],
    "Tao Pai Pai": ["Ola Demoníaca", "Golpe Mortal"],
    "Puar": ["Transformación", "Ataque de Garras"],
    "Mr. Popo": ["Magia", "Teletransportación"],
    "Raditz": ["Doble Domingo", "Bola de Poder"],
    "Bardock": ["Cañón del Espíritu Final", "Explosión Saiyan"],
    "Yajirobe": ["Corte de Espada", "Técnica de Corte"]
};


// Técnicas del usuario
const usuarioTacticas = [
    "lanza una esfera de energía",
    "da un golpe devastador",
    "realiza una patada giratoria",
    "emite un rayo de energía",
    "hace una explosión de ki",
    "desata un ataque de ondas de choque",
    "lanza una ráfaga de energía",
    "utiliza un ataque de ki concentrado",
    "da un puñetazo de dragón",
    "realiza una técnica de absorción de energía",
    "despliega una barrera energética",
    "golpea con una onda expansiva",
    "emite un cañón de energía",
    "usa un ataque de energía a distancia",
    "realiza una serie de golpes rápidos"
];


// Frases para el resultado
const resultados = [
    "gana con las justas 🏆",
    "gana fácil 💪",
   
    "le costó mucho ganar 😓",
    "gana por poco 😏",
    "se lleva el triunfo 🥇",
    "demuestra su superioridad 🌟",
    "supera al rival con habilidad 🚀",
    "vence con estilo 💥",
    "triunfa con esfuerzo 💪",
    "obtiene una victoria apretada 🏅",
    "gana con determinación 🔥"
];


// Función para obtener un índice aleatorio
const rnd = (max) => Math.floor(Math.random() * max);

app.get('/:command', (req, res) => {
    const command = req.params.command.toLowerCase();
    const username = req.query.user || "Usuario";  // Obtiene el nombre del usuario desde la consulta o usa "Usuario" por defecto

    let message;

    switch (command) {
        case 'battlez':
            // Selección aleatoria de un personaje
            const personajes = Object.keys(personajesDB);
            const personaje = personajes[rnd(personajes.length)];
            
            // Técnicas del personaje
            const ataquesPersonaje = personajesDB[personaje];
            const ataquePersonaje = ataquesPersonaje[rnd(ataquesPersonaje.length)];
                 
            // Selección aleatoria de técnicas del usuario
            const ataqueUsuario = usuarioTacticas[rnd(usuarioTacticas.length)];

            // Determinar el ganador
            // Asignar un valor de "poder" basado en la técnica para comparación
            const poderUsuario = rnd(100);
            const poderPersonaje = rnd(100);

            // Determinar el resultado de la batalla
            let resultado;
            if (poderUsuario > poderPersonaje) {
                resultado = `${username}  ${resultados[rnd(resultados.length)]} 🎉`;
            } else if (poderUsuario < poderPersonaje) {
                resultado = `${personaje}  ${resultados[rnd(resultados.length)]} 😱`;
            } else {
                resultado = `Empate! Ambos, ${username} y ${personaje}, tuvieron un desempeño igual. 🤝`;
            }

            // Mensaje final con el resultado
            message =  `/me ${username} ${ataqueUsuario} contra ${personaje}, quien responde con ${ataquePersonaje}.  ${resultado}`;
            break;

        default:
            message = `Comando no reconocido, ${username}.`;
    }

    res.send(message); // Enviar el mensaje como texto
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
