const express = require('express');
const request = require('request');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        console.error('No URL provided');
        return res.status(400).send('Error: URL parameter is required');
    }

    console.log(`Fetching URL: ${url}`);
    request(url, (error, response, body) => {
        if (error) {
            console.error('Error fetching URL:', error);
            return res.status(500).send('Error: Unable to fetch the requested URL');
        }

        console.log(`Response status code: ${response.statusCode}`);
        if (response.statusCode == 200) {
            res.send(body);
        } else {
            console.error('Non-200 status code:', response.statusCode);
            res.status(500).send('Error: Unable to fetch the requested URL');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
