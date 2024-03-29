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
        let lastId = parseInt(Object.keys(cars).sort()[cars.length]);
        console.log(lastId); 
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

function deleteObj(id) {
    return new Promise((resolve, reject) => {
        let index = cars.findIndex(car => car["id"] === id);
        if (index == -1) {
            reject({message: 'Object not found'});
        }
        const updatedCars = cars.filter(function(car) { return car.id != id; }); 
        writeDataToFile('./data/cars.json', updatedCars);
        resolve({message: "Object deleted"});
    })
    
}


module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteObj,
}