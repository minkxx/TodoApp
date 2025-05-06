import express from "express"
import Todo from "../models/todo.js"

const router = express.Router()

router.get("/getTodos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Failed to fetch todos." });
  }
});

router.get("/getTodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ id });
    res.status(200).json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ message: "Failed to fetch todo." });
  }
});

router.post("/addTodo", async (req, res) => {
  try {
    const { id, todo, isCompleted } = req.body;
    const new_todo = new Todo({ id, todo, isCompleted });
    new_todo.save();
    res.status(201).json({ message: "Todo added successfully", todo: new_todo });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ message: "Failed to add a new todo." });
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findOneAndDelete({ id });

    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully", todo: deleted });

  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Failed to delete todo." });
  }
});

router.put("/updateTodo/:id", async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    const updatedTodo = await Todo.updateOne({ id: id }, { $set: updatedFields });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Failed to updated todo." });
  }
});

export default router;