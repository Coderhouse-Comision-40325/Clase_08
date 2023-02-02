// Importar nuestras librerias
import express from "express";

// Instanciar nuestras constantes
const app = express();
const routerMascotas = express.Router();
const routerPersonas = express.Router();

// Creamos nuestras rutas
app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

//----------------------------------------------

/* Mascotas */

const mascotas = []

routerMascotas.get('/listar', (req, res) => {
    res.json(mascotas);
})

routerMascotas.post('/guardar', (req, res) => {
    mascotas.push(req.body)
    res.json(req.body)
})

/* Personas */

const personas = [];

routerPersonas.get('/listar', (req, res) => {
    res.json(personas)
})

routerPersonas.post('/guardar', (req, res) => {
    personas.push(req.body)
    res.json(req.body)
})

// Setup del servidor

const PORT = 8080
const server = app.listen(PORT,() =>{
    console.log('Servidor ejecutandose en el puerto: ',PORT)
})