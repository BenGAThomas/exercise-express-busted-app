'use strict';

//Error 1 adding const http = require('http');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

//Error 2 adding a semi colon to line 10
const express = require('express');

//Error 3 adding const to line 13
const es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

//Error 4 fixing case sensitivity
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');


//Error 5 calling rootController
app.use(rootController);
app.use('/rangers', rangersController);

//Error 6 Fixing an error in package.json with misspelling on line 9