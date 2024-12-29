const express = require('express');
const mcStatus = require('mcstatus');
const app = express();
const port = process.env.PORT || 3000;

app.get('/status', (req, res) => {
    const serverAddress = req.query.address;
    const server = new mcStatus.Server(serverAddress);

    server.ping(3000, (err, response) => {
        if (err) {
            res.json({ online: false });
        } else {
            res.json({ online: true, players: response.players.online });
        }
    });
});

app.use(express.static('public'));
app.listen(port, () => console.log(`Server running on port ${port}`));
