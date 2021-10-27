const jwt = require('jsonwebtoken'),
  config = require('../config/constants');

exports.jwtSign = async (userId) => {
  return jwt.sign(
    {
      userId,
    },
    config.JWT_KEY
  );
};

exports.userAuth = (req, res, next) => {
  try {
    let token = req.headers.accesstoken;
    jwt.verify(token, config.JWT_KEY, (err, decode) => {
      if (err) return res.status(401).send({ message: 'Invalid token' });
      req.user = decode;
      next();
      return;
    });
  } catch (error) {
    return res.status(401).send({ message: error });
  }
};
