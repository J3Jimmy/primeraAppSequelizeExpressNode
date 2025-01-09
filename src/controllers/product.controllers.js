const catchError = require('../utils/catchError');
const Product = require('../models/Product');

const getAll = catchError(async(req, res) => {
    const products = await Product.findAll();
    return res.json(products)
});

const create = catchError(async(req, res) => {
    const { name, price, isAvailable } = req.body;
    const product = await Product.create({
        name: name,
        price: price,
        isAvailable: isAvailable,
    });
    return res.status(201).json(product);
});


module.exports = {
    getAll,
    create,
}