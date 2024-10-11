const express = require("express");
const cors = require('cors');
const dbconnect = require("./config");
const app = express();

app.use(express.json());
app.use(cors({origin:'*'}))
app.use('/api/usuarios',require('./routes/usuario.routes'));
app.use('/api/empleados',require('./routes/empleado.routes'));
app.listen(3005, ()=>{
    console.log("El servidor esta en el puerto 3005")
})

dbconnect();  








/*const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./models/model");
const app = express();

const router= express.Router();

//CREATE
router.post('/',async(req, res) =>{
    const boby = req.body;
    const respuesta = await ModelUser.create(boby)
    res.send(respuesta)
})

//CONSULTAR
router.get('/', async (req, res) =>{
    const respuesta = await ModelUser.Find({})
    res.send(respuesta)
})

//CONSULTAR POR ID
router.get('/:id', async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
})

//ACTUALIZAR
router.put('/:id', async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta)
})

//ELIMINAR
router.delete('/:id', async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
})

app.use(express.json());
app.use(router);

app.listen(3005, ()=>{
    console.log(" El servidor esta en el pueerto 3005")
})

dbconnect();*/












/*
const express = require("express");
const dbconnect = require("./config"); // Verifica que el archivo config.js contenga la lógica de conexión
const ModelUser = require("./model"); // Verifica que model.js esté correctamente configurado
const app = express();

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    const body = req.body; // Corregido: antes decía "boby"
    try {
        const respuesta = await ModelUser.create(body);
        res.status(201).send(respuesta); // Enviar un estado de 201 para creación exitosa
    } catch (error) {
        res.status(500).send({ error: error.message }); // Enviar un error con un mensaje amigable
    }
});

// CONSULTAR (GET todos los usuarios)
router.get('/', async (req, res) => {
    try {
        const respuesta = await ModelUser.find({}); // "find" no es con mayúscula
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// CONSULTAR POR ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.findById(id);
        if (!respuesta) {
            return res.status(404).send({ error: "Usuario no encontrado" });
        }
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// ACTUALIZAR
router.put('/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.findByIdAndUpdate(id, body, { new: true });
        if (!respuesta) {
            return res.status(404).send({ error: "Usuario no encontrado para actualizar" });
        }
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// ELIMINAR
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.deleteOne({ _id: id });
        if (respuesta.deletedCount === 0) {
            return res.status(404).send({ error: "Usuario no encontrado para eliminar" });
        }
        res.send({ message: "Usuario eliminado con éxito" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.use(express.json());
app.use(router);

// Iniciar el servidor
app.listen(3005, () => {
    console.log("El servidor está en el puerto 3005");
});

// Conectar a la base de datos
dbconnect(); // dbconnect 
*/