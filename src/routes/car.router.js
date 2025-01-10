const { getAll, create, getOne, remove, update } = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/cars")
		.get(getAll)
		.post(create);


carRouter.route("/cars/:id")
		.get(getOne)
		.delete(remove)
		.put(update);

module.exports = carRouter;