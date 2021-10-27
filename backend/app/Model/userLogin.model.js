const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let Userlogin = new Schema(
  {
    email: { type: String, required: true },
    name: String,
    password: String,
    india: Number,
    oman: Number,
    us: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Userlogin', Userlogin);
