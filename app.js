const express = require('express');
const app = express();
const port = 8080;
const sum = require('./sum');


app.get('/', (req, res) => res.send('Hello World! DEVOpS!!!!!!123!@@@@@@@@@'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

console.log(sum(1,2));