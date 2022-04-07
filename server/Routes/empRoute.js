const express = require('express')
const route = express.Router();
const empController = require('../Controller/empController')

route.post('/sign',empController.createEmployee)
// route.post('/signup',empController.createEmployee);
route.put('/update',empController.updateEmployee)

module.exports = route;