const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//cutom requoire
const router = require('./router');

//app and middle ware setup
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));

//routing
router(app);

//server
const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port);
console.log("running on port ",port);