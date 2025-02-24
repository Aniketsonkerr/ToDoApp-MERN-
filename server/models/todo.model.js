import mongoose from "mongoose";

const todoSchema = new mongoose.model({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

export default todoModel;
