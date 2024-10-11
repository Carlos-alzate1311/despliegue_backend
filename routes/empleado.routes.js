const express = require('express');
const router = express.Router(); // Define el router
const empleadoCtrl = require('../controllers/empleado.controller'); // Importa el controlador

// Rutas
router.get('/', empleadoCtrl.getEmpleado);
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getUniqueEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

module.exports = router;