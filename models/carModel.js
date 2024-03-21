const cars = require('../data/cars');
const { writeDataToFile } = require('../utils/utils');

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

function save(car) {
    return new Promise((resolve, reject) => {
        
        let lastId = parseInt(Object.keys(cars).sort()[cars.length - 1]); 
        const newCar = {id: (lastId + 1), ...car};
        cars.push(newCar);
        writeDataToFile('./data/cars.json', cars);
        resolve(newCar);
    })
}


module.exports = {
    getAll,
    getById,
    save,
}