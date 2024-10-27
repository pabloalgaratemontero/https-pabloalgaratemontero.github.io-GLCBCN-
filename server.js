// server.js
const express = require('express');
const app = express();
const port = 3000;

// Información de usuarios basada en sus NFC
const userDatabase = {
    "NFC12345": {
        name: "Juan Pérez",
        imageUrl: "https://example.com/juan.jpg",
        info: "Información adicional de Juan Pérez."
    },
    "NFC67890": {
        name: "María López",
        imageUrl: "https://example.com/maria.jpg",
        info: "Información adicional de María López."
    }
    // Agrega más usuarios según el NFC ID
};

app.get('/user-info', (req, res) => {
    const nfcId = req.query.nfcId;
    const userInfo = userDatabase[nfcId];

    if (userInfo) {
        res.json(userInfo);
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
