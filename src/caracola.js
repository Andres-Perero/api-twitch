module.exports = function caracola(username = "Usuario", question) {
  const respuestas = [
    "Sí.",
    "No.",
    "Tal vez.",
    "Pregunta más tarde.",
    "No lo sé.",
    "Haz lo que quieras.",
    "Sigue tu instinto.",
    "Inténtalo de nuevo.",
    "Definitivamente no.",
    "Probablemente sí.",
  ];

  const rand = respuestas[Math.floor(Math.random() * respuestas.length)];

  // Lista extendida de palabras interrogativas (con y sin tilde, variantes comunes)
  const interrogativas = [
    "qué",
    "que",
    "como",
    "cómo",
    "cuando",
    "cuándo",
    "donde",
    "dónde",
    "quien",
    "quién",
    "quienes",
    "quiénes",
    "cual",
    "cuál",
    "cuales",
    "cuáles",
    "por que",
    "porque",
    "por qué",
    "pq",
    "xq",
    "para que",
    "para qué",
    "cuanto",
    "cuánto",
    "cuantos",
    "cuántos",
    "cuanta",
    "cuánta",
    "cuantas",
    "cuántas",
    "será",
    "sera",
    "es",
    "son",
    "fue",
    "fueron",
    "eres",
    "hay",
    "habrá",
    "habra",
    "puede",
    "podría",
    "podria",
    "puedes",
    "cojemos",
    "debería",
    "deberia",
    "tendría",
    "tendria",
  ];

  // Función para detectar si el texto parece una pregunta
  function esPregunta(texto) {
    if (!texto) return false;

    const lower = texto.trim().toLowerCase();

    // Regla 1: ¿empieza o termina con signo de interrogación?
    // if (lower.endsWith("?") || lower.startsWith("¿")) return true;

    // Regla 2: ¿empieza con alguna palabra interrogativa?
    if (interrogativas.some((palabra) => lower.startsWith(palabra))) {
      return true;
    }
    

    return false;
  }

  if (question) {
    if (esPregunta(question)) {
      return `La caracola dice: "${rand}" `;
    } else {
      return `Eso no parece una pregunta. Inténtalo de nuevo.`;
    }
  }

  return `La caracola dice: "${rand}"`;
};
