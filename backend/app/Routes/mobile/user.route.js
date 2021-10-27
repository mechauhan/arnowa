const { userAuth } = require('../../UniversalFuntions/jwtAuth');
const jwtHelper = require('../../UniversalFuntions/jwtAuth');

const express = require('express'),
  Route = express.Router(),
  UserController = require('../../Controller/mobile/user.controller');
const jwt = require('../../UniversalFuntions/jwtAuth');

const validate = require('../../Validation');

Route.post('/register', UserController.register);
Route.post('/login', UserController.login);
Route.get('/getUserData', userAuth, UserController.getUserData);

module.exports = Route;
