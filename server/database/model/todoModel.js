import mongoose from 'mongoose';

const ToDoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const todoModel = mongoose.model('todo', ToDoSchema);
export default todoModel;