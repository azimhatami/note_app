const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: { type: String },
  family: { type: String },
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, required: true },
  role: { type: Schema.Types.ObjectId, ref: 'Role', required: true }
}, { timestamps: true });

module.exports = model('User', UserSchema);
