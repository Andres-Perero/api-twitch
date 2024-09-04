const express = require('express');
const app = express();
const port = 3000;

app.get('/:command', (req, res) => {
    const command = req.params.command.toLowerCase();
    const username = req.query.user || "Usuario";  // Obtiene el nombre del usuario desde la consulta o usa "Usuario" por defecto
    let message;

    switch (command) {
        case 'invitar':
            message = `¡Aquí está tu invitación, ${username}! 🎉`;
            break;
        case 'partida':
            message = `¡La partida está a punto de comenzar, ${username}! 🕹️`;
            break;
        case 'saludo':
            message = `¡Hola, ${username}! 👋`;
            break;
        case 'batalla':
            message = `¡Prepárate para la batalla épica, ${username}! ⚔️`;
            break;
        default:
            message = `Comando no reconocido, ${username}.`;
    }

    res.json({ message });
});

app.listen();
