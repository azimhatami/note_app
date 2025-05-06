const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  fullName: {type: String},
  email: {type: String},
  password: {type: String},
  created_at: {type: Date, default: new Date().getTime()}
});


const userModel = model('user', userSchema);


module.exports = userModel;
