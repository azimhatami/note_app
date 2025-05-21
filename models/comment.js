const { Schema, model, Types } = require('mongoose');


const CommentSchema = new Schema({
  content: { type: String, required: true },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });


const CommentModel = model('Comment', CommentSchema);

module.exports = CommentModel;
