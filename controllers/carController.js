const Car = require('../models/carModel');
const { verifyBodyData } = require('../utils/utils');


// @desc Gets all Cars
// @route GET /api/cars/
async function getAllCars(req, res, args) {
    try {
        const cars = await Car.getAll();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(cars));
    } catch (error) {
        console.log(error);
    }
}

// @desc Gets single Car by id
// @route GET /api/car/:id/
async function getSingleCar(req, res, args) {
    try {
        const car = await Car.getById(parseInt(args[3]));
        if (!car) {
            statusCode = 404;
            response = {message: 'Car not found'}; 
        } else {
            statusCode = 200;
            response = car; 
        }

        res.writeHead(statusCode, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    } catch (error) {
        console.log(error);
    }
}

// @desc Create a Car
// @route POST /api/car/
async function createCar(req, res, args) {
    try {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk.toString());
        })

        req.on('end', async () => {
            let car = JSON.parse(body);

            if (!verifyBodyData(car)) {
                res.writeHead(422, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({message: 'Invalid data provided'}));
            }

            const newCar = await Car.save(car);
            res.writeHead(201, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify(newCar));
        })
    
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCars,
    getSingleCar,
    createCar,
}