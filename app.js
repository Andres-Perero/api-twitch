const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const battlez = require('./src/dbz');
const battleDigimon = require('./src/digimon');

app.get('/:command', (req, res) => {
    const command = req.params.command.toLowerCase();
    const username = req.query.user || "Usuario";

    let message;
    switch (command) {
        case 'battlez':
            message = battlez(username);
            break;
        case 'battledigimon':
            message = battleDigimon(username);
            break;
        default:
            message = `Comando no reconocido, ${username}.`;
    }

    res.send(message);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});