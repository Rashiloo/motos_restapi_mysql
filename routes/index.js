const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('API de Motos - Bienvenido'));

router.post('/motos', controllers.createMoto);
router.get('/motos', controllers.getAllMotos);

module.exports = router;
