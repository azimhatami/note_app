const { Schema, model, Types } = require('mongoose');

const TaskSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
  dueDate: { type: Date },
  status: {
    type: String,
    enum: ['preparing', 'doing', 'done', 'canceled'],
    default: 'preparing'
  },
  endDate: { type: Date },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  order: { type: Number, default: 0 },
  subTask: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = model('Task', TaskSchema);

