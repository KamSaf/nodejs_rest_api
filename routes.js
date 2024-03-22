const { getAllCars, getSingleCar, createCar, updateCar } = require('./controllers/carController');

class UrlDispatcher {
    constructor (urlReg, callableFuncs, methods) {
        this.urlReg = urlReg;
        this.funcs = callableFuncs;
        this.methods = methods;
    }
}

urls = [
    new UrlDispatcher(/\/api\/cars$/, [getAllCars, createCar], ['GET', 'POST']),
    new UrlDispatcher(/\/api\/cars\/([0-9]+)/, [getSingleCar, updateCar], ['GET', 'PUT']),
]

module.exports = {
    urls
}