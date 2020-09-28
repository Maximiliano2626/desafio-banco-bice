const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/last', (req, res) => {
    https.get('https://www.indecon.online/last', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        res.status(200).send(data);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
});

router.get('/values/:key', (req, res) => {
    const element = req.params.key;
    https.get(`https://www.indecon.online/values/${element}`, (resp) => {
    
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        res.status(200).send(data);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
});

router.get('/date/:key/:date', (req, res) => {
    const element = req.params.key;
    const date = req.params.date;
    https.get(`https://www.indecon.online/date/${element}/${date}`, (resp) => {
    
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        res.status(200).send(data);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
});

module.exports = router;

