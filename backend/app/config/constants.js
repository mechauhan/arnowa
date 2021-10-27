require('dotenv').config();

let config = {};

config.port = process.env.PORT || 5009;

config.JWT_KEY = 'SaVeMeUsEr';

module.exports = config;
