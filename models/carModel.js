const cars = require('../data/cars');

function getAll() {
    return new Promise((resolve, reject) => {
        resolve(cars);
    })
}

function getById(id) {
    return new Promise((resolve, reject) => {
        const car = cars.find((car) => car.id === parseInt(id));
        resolve(car);
    })
}


module.exports = {
    getAll,
    getById
}