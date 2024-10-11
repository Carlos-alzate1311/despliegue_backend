const ModelEmpleado = require('../models/empleado');

const empleadoCtrl = {};

// CREATE
empleadoCtrl.createEmpleado = async (req, res) => {
    const body = req.body;

    if (!body.nombre || !body.puesto) { // Validación de campos obligatorios
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        const respuesta = await ModelEmpleado.create(body);
        res.status(201).json(respuesta);
    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ message: 'Error al crear empleado' });
    }
};

// CONSULTAR
empleadoCtrl.getEmpleado = async (req, res) => {
    try {
        const respuesta = await ModelEmpleado.find({}).limit(100);
        res.json(respuesta);
    } catch (error) {
        console.error('Error al consultar empleados:', error);
        res.status(500).json({ message: 'Error al consultar empleados' });
    }
};

// CONSULTAR POR ID
empleadoCtrl.getUniqueEmpleado = async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelEmpleado.findById({ _id: id });
        if (!respuesta) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(respuesta);
    } catch (error) {
        console.error('Error al consultar empleado por ID:', error);
        res.status(500).json({ message: 'Error al consultar empleado por ID' });
    }
};

// ACTUALIZAR
empleadoCtrl.editEmpleado = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const respuesta = await ModelEmpleado.findByIdAndUpdate({ _id: id }, body, { new: true });
        if (!respuesta) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(respuesta);
    } catch (error) {
        console.error('Error al actualizar empleado:', error);
        res.status(500).json({ message: 'Error al actualizar empleado' });
    }
};

// ELIMINAR
empleadoCtrl.deleteEmpleado = async (req, res) => {
    const id = req.params.id;

    try {
        const respuesta = await ModelEmpleado.deleteOne({ _id: id });
        if (respuesta.deletedCount === 0) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json({ message: 'Empleado eliminado' });
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        res.status(500).json({ message: 'Error al eliminar empleado' });
    }
};

module.exports = empleadoCtrl;
