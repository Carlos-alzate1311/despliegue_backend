/*const ModelUser =require('../models/model');

const usuarioCtrl = {};


//CREATE
usuarioCtrl.createUser= async(req, res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}

//CONSULTAR
usuarioCtrl.getUser= async (req, res) =>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
}

//CONSULTAR POR ID
router.get('/:id',= async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
})

//ACTUALIZAR
usuarioCtrl.getUniqueuser =async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta)
}

//ELIMINAR
usuarioCtrl.deleteUser =async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = usuarioCtrl;


*/

const ModelUser = require('../models/model');

const usuarioCtrl = {};

// CREATE
usuarioCtrl.createUser = async (req, res) => {
    const body = req.body;
    try {
        const respuesta = await ModelUser.create(body);
        res.status(201).send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// CONSULTAR
usuarioCtrl.getUser = async (req, res) => {
    try {
        const respuesta = await ModelUser.find({});
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// CONSULTAR POR ID
usuarioCtrl.getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.findById(id);
        if (!respuesta) {
            res.status(404).send({ error: "Usuario no encontrado" });
        } else {
            res.send(respuesta);
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// ACTUALIZAR
usuarioCtrl.editUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const respuesta = await ModelUser.findByIdAndUpdate(id, body, { new: true });
        if (!respuesta) {
            res.status(404).send({ error: "Usuario no encontrado" });
        } else {
            res.send(respuesta);
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// ELIMINAR
usuarioCtrl.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.deleteOne({ _id: id });
        if (respuesta.deletedCount === 0) {
            res.status(404).send({ error: "Usuario no encontrado" });
        } else {
            res.send({ message: "Usuario eliminado con éxito" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = usuarioCtrl;
