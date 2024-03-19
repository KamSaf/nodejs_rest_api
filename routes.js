const { getAllCars, getSingleCar } = require('./controllers/carController');

class UrlDispatcher {
    constructor (urlReg, callableFunc, method) {
        this.urlReg = urlReg;
        this.func = callableFunc;
        this.method = method;
    }
}

urls = [
    new UrlDispatcher(/^\/api\/cars$/, getAllCars, 'GET'),
    new UrlDispatcher(/\/api\/cars\/([0-9]+)/, getSingleCar, 'GET'),
]

module.exports = {
    urls
}