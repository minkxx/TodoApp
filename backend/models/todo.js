import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    id: String,
    todo: String,
    isCompleted: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;