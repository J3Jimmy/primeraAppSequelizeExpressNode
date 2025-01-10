const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async(req, res) => {
    const cars = await Car.findAll();
    return res.json(cars)
});

const create = catchError(async(req, res) => {
    const { brand, model, year, color,  isAvailable } = req.body;
    const car = await Car.create({
        brand: brand,
        model: model,
        color: color,
        year: year,
    });
    return res.status(201).json(car);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    return res.json(car);
});

module.exports = {
    getAll,
    create,
    getOne,
}
