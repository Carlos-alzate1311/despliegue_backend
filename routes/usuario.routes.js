/*const express = require('express');
const router = require('../controllers/usuario.controller');
const usuarioCtrl = require('../controllers/usuario.controller');

router.get('/',usuarioCtrl.getUser);
router.post('/',usuarioCtrl.createUser);
router.get('/:id',usuarioCtrl.getUniqueuser);
router.put('/:id',usuarioCtrl.editUser);
router.deleteUser('/:id',usuarioCtrl.deleteUser);

module.exports = router; 
*/

const express = require('express');
const router = express.Router(); // Define el router
const usuarioCtrl = require('../controllers/usuario.controller'); // Importa el controlador

// Rutas
router.get('/', usuarioCtrl.getUser);
router.post('/', usuarioCtrl.createUser);
router.get('/:id', usuarioCtrl.getUserById);
router.put('/:id', usuarioCtrl.editUser);
router.delete('/:id', usuarioCtrl.deleteUser);

module.exports = router;
