// src/digimon.js

const personajesDigimon = {
    //personajesDigimon1
    Agumon: ["Llama Bebé", "Diente Fuerte"],
    Gabumon: ["Llama Azul", "Ataque de Cuerno"],
    Biyomon: ["Ala Espiral", "Ataque Picotazo"],
    Tentomon: ["Electro Choque", "Trueno Destructor"],
    Palmon: ["Látigo Venenozo", "Garra envenenada"],
    Gomamon: ["Marcha de Peces", "Golpe de Garra"],
    Patamon: ["Burbuja Boom", "Ataque Aéreo"],
    Gatomon: ["Zarpazo Relámpago", "Hipnosis Felina"],
    Greymon: ["Mega Llama", "Ataque Cuerno Gigante"],
    Garurumon: ["Cañón Aullador", "Garra del Lobo"],
    Kabuterimon: ["Rayo Destructor", "Cañón de Cuerno"],
    Togemon: ["Puños Aguja", "Puño Nocaut"],
    Ikkakumon: ["Torpedo Arpón", "Misiles de Cuerno"],
    Angemon: ["Golpe de Fe", "Rayo Celestial"],
    Angewomon: ["Encanto Divino", "Flecha Sagrada"],
    MetalGreymon: ["Destructor Giga", "Garra Metálica"],
    WereGarurumon: ["Garra del Lobo", "Puño del Lobo Feroz"],
    Birdramon: ["Ala Meteoro", "Tornado de Fuego"],
    Garudamon: ["Cuchilla Alada", "Llama Alada"],
    SkullGreymon: ["Misil Oscuro", "Llama de Muerte"],
    MagnaAngemon: ["Puerta del Destino", "Espada Excalibur"],
    WarGreymon: ["Fuerza de Gaia", "Espada Dramon"],
    MetalGarurumon: ["Garra del Lobo de Hielo", "Misiles Congelantes"],
    Paildramon: ["Rayo Destructor", "Blaster Desperado"],
    Imperialdramon: ["Cañón Positrónico", "Rayo Omega"],
    Omnimon: ["Espada Trascendental", "Cañón Supremo"],
    Diaboromon: ["Destructor de Red", "Golpe Letal"],
    //personajesDigimon2
    Veemon: ["Veedrilo", "Patada V"],
    Hawkmon: ["Ráfaga de Plumas", "Ataque Aéreo"],
    Armadillomon: ["Martillo de Diamante", "Perforador de Tierra"],
    Wormmon: ["Telaraña Ácida", "Capullo de Seda"],
    Flamedramon: ["Fuego de Valor", "Patada de Fuego"],
    Raidramon: ["Rayo Azul", "Garra Eléctrica"],
    Halsemon: ["Tornado de Águila", "Ráfaga de Plumas"],
    Digmon: ["Taladro de Oro", "Tierra Aguja"],
    Stingmon: ["Picadura Mortal", "Garra de Aguja"],
    ExVeemon: ["Vee-Láser", "Golpe del Dragón"],
    Shakkoumon: ["Rayo Sagrado", "Onda de Justicia"],
    Paildramon: ["Rayo Destructor", "Blaster Desperado"],
    Imperialdramon: ["Rayo Positrónico", "Cañón Omega"],
    BlackWarGreymon: ["Cuchilla Negra", "Fuerza Oscura"],
    //personajesDigimon3
    Guilmon: ["Bola de Fuego", "Colmillo Destructor"],
    Renamon: ["Hoja de Diamante", "Golpe Energético"],
    Terriermon: ["Bazooka de Energía", "Cañón Terrier"],
    "Kyubimon": ["Llama Zorro", "Golpe de Cola"],
    "Gargomon": ["Metralla Rabiosa", "Puño Gargo"],
    "Cyberdramon": ["Garra de Dragón", "Rayo Cibernético"],
    "WarGrowlmon": ["Cuchilla Nuclear", "Rayo Atómico"],
    "Leomon": ["Golpe del Rey León", "Puño Trueno"],
    //"Guardromon": ["Rayo Destructor", "Misil Guardian"],
    //"MarineAngemon": ["Pulso del Amor", "Flecha Rosa"],
    Beelzemon: ["Cañón Infernal", "Puño de las Sombras"],
    //Megidramon: ["Garra Infernal", "Furia del Dragón"],
    //Sakuyamon: ["Rayo Celestial", "Hechizo Místico"],
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

  const ataqueUsuario =
    personajesDigimon[personajeUsuario][
      rnd(personajesDigimon[personajeUsuario].length)
    ];
  const ataqueRival =
    personajesDigimon[personajeRival][
      rnd(personajesDigimon[personajeRival].length)
    ];

  const poderUsuario = rnd(10);
  const poderRival = rnd(10);

  let resultado;
  if (poderUsuario > poderRival) {
    resultado = `Ganador: ${username} con su Digimon ${personajeUsuario} ${
      emojis[rnd(emojis.length)]
    }`;
  } else if (poderUsuario < poderRival) {
    resultado = `Ganador: ${personajeRival} LUL`;
  } else {
    resultado = `¡Empate! Ambos Digimon demostraron su fuerza por igual.`;
  }

  return `El Digimon de ${username} es ${personajeUsuario}. Pelearán contra ${personajeRival}. Usan ${ataqueUsuario} vs ${ataqueRival}. ${resultado}`;
}

module.exports = battleDigimon;
