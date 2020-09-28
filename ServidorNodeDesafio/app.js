const express = require('express');
const app = express();
const https = require('https');
const routes = require('./routes/index');
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "x");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routes);

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});