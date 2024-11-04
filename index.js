const express = require('express');
require('./database/db-connection-mongo');

const proyectoRoutes = require('./src/routes/proyectoRutas')

const app = express();

app.use(express.json());

async function aplicacion() {
    await app.listen(4444);
    console.log("in port of: 4444");
}

app.get('/', (req, res) => {
    res.send("Conected in line");
})

app.use('/Proyectos', proyectoRoutes);

aplicacion();