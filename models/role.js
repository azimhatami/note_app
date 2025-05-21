
const { Schema, model, Types } = require('mongoose');

const RoleSchema = new Schema({
  name: {
    type: String,
    enum: ['admin', 'manager', 'user'],
    required: true,
    unique: true,
    default: 'user'
  },
  permissions: {
    type: Object,
    default: {}
  }
});

module.exports = model('Role', RoleSchema);
