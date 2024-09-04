// src/digimon.js

const personajesDigimon  = {
    "Agumon": ["Pepper Breath", "Spitfire Blast"],
    "Gabumon": ["Blue Blaster", "Horn Attack"],
    "Biyomon": ["Spiral Twister", "Pecking Attack"],
    "Tentomon": ["Super Shocker", "Electro Shocker"],
    "Palmon": ["Poison Ivy", "Root Breaker"],
    "Gomamon": ["Marching Fishes", "Claw Attack"],
    "Patamon": ["Boom Bubble", "Slamming Attack"],
    "Gatomon": ["Lightning Paw", "Cat's Eye Hypnotism"],
    "Greymon": ["Nova Blast", "Great Horns Attack"],
    "Garurumon": ["Howling Blaster", "Wolf Claw"],
    "Kabuterimon": ["Mega Blaster", "Horn Buster"],
    "Togemon": ["Needle Spray", "Knockout Punch"],
    "Ikkakumon": ["Harpoon Torpedo", "Horn Missiles"],
    "Angemon": ["Hand of Fate", "Angel Rod"],
    "Angewomon": ["Heaven's Charm", "Holy Arrow"],
    "MetalGreymon": ["Giga Destroyer", "Mega Claw"],
    "WereGarurumon": ["Wolf Fang Fist", "Kaiser Nail"]
};
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

function battleDigimon(username) {
    const personajes = Object.keys(personajesDigimon);
    const personajeUsuario = personajes[rnd(personajes.length)];
    const personajeRival = personajes[rnd(personajes.length)];
    
    const ataqueUsuario = personajesDigimon[personajeUsuario][rnd(personajesDigimon[personajeUsuario].length)];
    const ataqueRival = personajesDigimon[personajeRival][rnd(personajesDigimon[personajeRival].length)];
    
    const poderUsuario = rnd(10);
    const poderRival = rnd(10);

    let resultado;
    if (poderUsuario > poderRival) {
        resultado = `Ganador: ${username} con su Digimon ${personajeUsuario} ${emojis[rnd(emojis.length)]}`;
    } else if (poderUsuario < poderRival) {
        resultado = `Ganador: ${personajeRival}`;
    } else {
        resultado = `¡Empate! Ambos Digimon demostraron su fuerza por igual.`;
    }

    return `El Digimon de ${username} es ${personajeUsuario}. Pelearán contra ${personajeRival}. Usan ${ataqueUsuario} vs ${ataqueRival}. ${resultado}`;
}

module.exports = battleDigimon;