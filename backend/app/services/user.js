const db = require('./dboperations');
const {
  getPassword,
  verifyPassword,
} = require('../UniversalFuntions/password');
const { getChartData } = require('../utils/common');
const { jwtSign } = require('../UniversalFuntions/jwtAuth');

exports.checkUser = async (req, model) => {
  let { email } = req.body;

  let user = await db.findOne(model, { email });
  if (user) return user;
};

exports.saveUser = async (req, model) => {
  let { password, name } = req.body;
  let encryptedPassword = await getPassword(password);
  let data = {
    email: req.body.email,
    name: name,
    password: encryptedPassword,
  };
  return await db.saveData(model, data);
};

exports.verify = async (req, userData) => {
  let { email, password } = req.body;
  let isPassword = await verifyPassword(password, userData.password);
  if (isPassword) return true;
  return false;
};

exports.generateToken = async (id) => {
  let accessToken = await jwtSign(id);
  if (!accessToken) return false;
  return accessToken;
};

exports.saveData = async (id, model) => {
  let india = Math.floor(Math.random() * 100);
  let oman = Math.floor(Math.random() * 100);
  let us = Math.floor(Math.random() * 100);

  return await db.saveData(model, {
    userId: id,
    india: india,
    oman: oman,
    us: us,
  });
};

exports.getData = async (userId, model) => {
  return await db.findOne(model, {
    userId: userId,
  });
};
