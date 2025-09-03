module.exports = function caracola(username = 'Usuario', question) {
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
        "Probablemente sí."
    ];

    const rand = respuestas[Math.floor(Math.random() * respuestas.length)];
    if (question) {
        return `La caracola dice a ${username}: "${rand}" — (pregunta: "${question}")`;
    }
    return `La caracola dice: "${rand}"`;
};