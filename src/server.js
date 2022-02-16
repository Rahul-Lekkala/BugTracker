require('dotenv').config();

require('./models/db');

const router = require('./routes/routes');

const express = require('express');

const app = express();

app.use(router);


const port = process.env.PORT || 4100;

app.listen(port, ()=> {
    console.log("Server is listening on port "+port)
});