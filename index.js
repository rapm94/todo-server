const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
//DB config
require('./database/config').dbConnection();

// App de Express
const app = express();

//Lectura y parseo de JSON



app.use(express.json());

app.use(cors())

// Node Server
const server = require('http').createServer(app);

// Rutas
app.use('/api', require('./routes/routes'));



server.listen(process.env.PORT, (err) => {

  if (err) throw new Error(err);

  console.log('Servidor corriendo en puerto', process.env.PORT);

});