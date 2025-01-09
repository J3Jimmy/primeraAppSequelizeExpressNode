const { getAll, create } = require('../controllers/product.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route("/products")
		.get(getAll)
		.post(create);

module.exports = productRouter;