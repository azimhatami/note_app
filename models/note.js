const { Schema, model } = require('mongoose');


const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  isPinned: { type: Boolean, default: false },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: new Date().getTime() },
});

const noteModel = model('note', noteSchema);

module.exports = noteModel;
