const universalFunction = require('../../UniversalFuntions'),
  db = require('../../services/dboperations'),
  Model = require('../../Model'),
  config = require('../../config');
const error = require('http-errors');
const { appConstant } = require('../../utils/constant');
const bcrypt = require('bcryptjs');
const {
  sendResponse,
  sendMessageResponse,
  catchAsync,
  getOtp,
} = require('../../utils/common');
let mongoose = require('mongoose');

const userServices = require('../../services/user');
const model = require('../../Model');

exports.register = catchAsync(async (req, res) => {
  let userExists = await userServices.checkUser(req, model.UserLogin);
  if (userExists) sendMessageResponse(res, 'User Already Exists', 403);
  let user = await userServices.saveUser(req, model.UserLogin);
  let data = await userServices.saveData(user._id, model.UserData);

  sendResponse(res, { user, data }, 'Registered');
});

exports.login = catchAsync(async (req, res) => {
  let userExists = await userServices.checkUser(req, model.UserLogin);
  if (!userExists) sendMessageResponse(res, 'User Does Not Exists', 422);
  let auth = await userServices.verify(req, userExists);
  if (auth) {
    let token = await userServices.generateToken(userExists._id);
    sendResponse(res, { userExists, token }, 'Successfully Login');
  }
});

exports.getUserData = catchAsync(async (req, res) => {
  let userId = req.user.userId;
  console.log('userId', userId);
  let data = await userServices.getData(userId, model.UserData);
  sendResponse(res, data, 'data found');
});
