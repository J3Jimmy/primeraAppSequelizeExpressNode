const { getAll, create, getOne, remove } = require('../controllers/product.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route("/products")
    .get(getAll)
    .post(create);

productRouter.route("/products/:id")
    .get(getOne)
    .delete(remove);

module.exports = productRouter;
