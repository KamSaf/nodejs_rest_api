const { getAllCars, getSingleCar, createCar } = require('./controllers/carController');

class UrlDispatcher {
    constructor (urlReg, callableFunc, method) {
        this.urlReg = urlReg;
        this.func = callableFunc;
        this.method = method;
    }
}

urls = [
    new UrlDispatcher(/\/api\/cars$/, getAllCars, 'GET'),
    new UrlDispatcher(/\/api\/cars\/([0-9]+)/, getSingleCar, 'GET'),
    new UrlDispatcher(/\/api\/car$/, createCar, 'POST'),
]

module.exports = {
    urls
}