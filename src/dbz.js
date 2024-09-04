// src/dbz.js

const personajesDBZ = {
  Goku: ["Kamehameha", "Genki Dama"],
  Vegeta: ["Final Flash", "Big Bang Attack"],
  Piccolo: ["Ilusión de Imagen", "Makankosappo"],
  Gohan: ["Masenko", "Kamehameha"],
  Krillin: ["Kamehameha", "Kienzan"],
  Yamcha: ["Golpe Colmillo de Lobo", "Onda de Ki"],
  Bulma: ["Pistola Láser", "Granada"],
  Zarbon: ["Transformación", "Aplastamiento Monstruoso"],
  Dodoria: ["Bola de Energía", "Cabeza de Toro"],
  Ginyu: ["Ataque con un baile de tiktok", "Cambio de Cuerpo"],
  Recoome: ["Rayo Recoome", "Pistola Borradora"],
  Nail: ["Ataques multiples", "Explosión de Ki"],
  Dende: ["Sanación", "Explosión de Ki"],
  "Trunks (del futuro)": ["Burning Attack", "Corte de Espada"],
  Freezer: ["Bola de la Muerte", "Supernova"],
  Milk: ["Ataque de Velocidad", "¡Aléjate de mí! - Le tira un hacha"],
  "Maestro Roshi": ["Mafuba", "Kamehameha"],
  "Tao Pai Pai": ["Ola Demoníaca", "Golpe Mortal"],
  Puar: ["Transformación", "Ataque de Garras"],
  "Mr. Popo": ["Magia", "Teletransportación"],
  Raditz: ["Doble Domingo", "Bola de Poder"],
  Bardock: ["Cañón del Espíritu Final", "Explosión Saiyan"],
  Yajirobe: ["Corte de Espada", "Técnica de Corte"],
};
const usuarioTacticasDBZ = [
  "lanza un rayo de energía",
  "emite una ráfaga de viento cortante",
  "realiza un puñetazo destructor",
  "lanza una bola de fuego",
  "hace una embestida a gran velocidad",
  "desata una explosión de energía",
  "utiliza un ataque sónico",
  "hace un ataque de fuerza bruta",
  "realiza una técnica de camuflaje",
  "golpea con un rayo láser",
  "usa una onda de choque",
  "desata una tormenta eléctrica",
  "ataca con una llamarada",
  "realiza un ataque de agua a presión",
  "lanza una bola de sombra",
];

const resultadosDBZ = [
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
  "gana con determinación 🔥",
];

const emojis = [
  "PogBones",
  "CaitlynS",
  "PoroSad",
  "DinoDance",
  "Kreygasm",
  "PopNemo",
  "TwitchConHYPE",
  "CoolCat",
  "LUL",
  "GoldPLZ",
  "SabaPing",
  "PowerUpL SabaPing PowerUpR",
  "SUBtember",
];

const rnd = (max) => Math.floor(Math.random() * max);

function battlez(username) {
  const personajes = Object.keys(personajesDBZ);
  const personaje = personajes[rnd(personajes.length)];
  const ataquesPersonaje = personajesDBZ[personaje];
  const ataquePersonaje = ataquesPersonaje[rnd(ataquesPersonaje.length)];
  const ataqueUsuario = usuarioTacticasDBZ[rnd(usuarioTacticasDBZ.length)];
  const poderUsuario = rnd(100);
  const poderPersonaje = rnd(100);

  let resultado;
  if (poderUsuario > poderPersonaje) {
    resultado = `${username} ${resultadosDBZ[rnd(resultadosDBZ.length)]} ${emojis[rnd(emojis.length)]}`;
  } else if (poderUsuario < poderPersonaje) {
    resultado = `${personaje} ${resultadosDBZ[rnd(resultadosDBZ.length)]} LUL`;
  } else {
    resultado = `¡Empate! Ambos, ${username} y ${personaje}, tuvieron un desempeño igual. 🤝`;
  }

  return `${username} ${ataqueUsuario} contra ${personaje}, quien responde con ${ataquePersonaje}. ${resultado}`;
}

module.exports = battlez;
