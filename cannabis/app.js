const express = require('express');
const path = require('path');

const vistaRutas = require("./src/rutas/rutas");
const app = express();

/* MOTOR DE PLANTILLA */
app.set('view engine', 'ejs');

/* ARCHIVOS ACCESIBLES PARA TODOS, RUTA ABSOLUTA */
app.use(express.static(path.join(__dirname, 'src/public')));

/* RUTAS */
app.use("/", vistaRutas);

app.listen(3030, () => {
    console.log(`Servidor iniciado en http://localhost:3030`);
});