const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use(express.static(path.join(dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'index.html'));
});

app.listen(port, () => {
    console.log("Server is running at http://localhost:${port}");
});