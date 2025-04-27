import express from 'express';
var router = express.Router();
import bicicletaController from '../controllers/bicicleta.js';

router.get('/', bicicletaController.bicicleta_list);
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
router.post('/:id/delete', bicicletaController.bicicleta_create_post);

export default router;