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
        isAvailable: isAvailable,
    });
    return res.status(201).json(car);
});

module.exports = {
    getAll,
    create,
}
