const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
  icon: { type: String },
  tags: [{ type: String }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = model('Project', ProjectSchema);
