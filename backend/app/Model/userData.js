const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let UserData = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'Userlogin' },
    india: { type: Number },
    oman: { type: Number },
    us: { type: Number },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('UserData', UserData);
