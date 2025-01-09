const express = require('express');
const productRouter = require('./product.router');
const carRouter = require('./car.router');
const router = express.Router();

// colocar las rutas aquí
router.use(productRouter)
router.use(carRouter)

module.exports = router;