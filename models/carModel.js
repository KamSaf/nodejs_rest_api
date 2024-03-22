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

function update(id, data) {
    return new Promise((resolve, reject) => {
        let index = cars.findIndex(car => car["id"] === id);
        if (index == -1) {
            reject({message: 'Object not found'});
        }
        cars[index]['brand'] = data['brand'];
        cars[index]['model'] = data['model'];
        cars[index]['year'] = data['year'];
        cars[index]['mileage_km'] = data['mileage_km'];
        cars[index]['color'] = data['color'];
        writeDataToFile('./data/cars.json', cars);

        resolve({car: cars[index]});
    })
}


module.exports = {
    getAll,
    getById,
    save,
    update,
}