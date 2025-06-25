import Todo from "../models/todoMod.js";

// Create a todo
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = await Todo.create({
      title,
      description,
    });

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create todo",
      error: error.message,
    });
  }
};
