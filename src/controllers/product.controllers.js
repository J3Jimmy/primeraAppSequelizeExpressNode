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

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    return res.json(product);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Product.destroy({ where: { id: id } });
    return res.sendStatus(204);
}); 

const update = catchError(async(req, res) => {
    const {name, price, isAvailable} = req.body;
    const { id } = req.params;
    const product = await Product.update({
        name: name,
        price: price,
        isAvailable: isAvailable,
    }, { where: { id: id }, returning: true }); 
    return res.json(product);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}