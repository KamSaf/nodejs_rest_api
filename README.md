# Overview

Simple REST API application allowing users to retrieve JSON data about car.



# Technologies and tools used:

- Node.js v12.22.9



# How to run:


1. Clone repository with:

        git clone https://github.com/KamSaf/nodejs_rest_api.git

2. Install dependencies with:

        npm install

3. Run server with:

        node app.js



# Endpoints:

| METHOD  | ENDPOINT | ACTION |
| ------------- | ------------- | ------------- |
| ```/api/cars``` | ```GET``` | Get all cars list |  
| ```/api/cars/``` | ```POST``` | Add new car |
| ```/api/cars/:id``` | ```GET``` | Get data of a car by id |  
| ```/api/cars/:id``` | ```PUT``` | Update single car data by id |
| ```/api/cars/:id``` | ```DELETE``` | Delete single car by id |




