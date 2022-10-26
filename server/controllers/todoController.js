import todoModel from "../database/model/todoModel.js";

export const add = async (req, res) => {
  try {
    const newTodo = await todoModel.create({
      ...req.body,
      createdAt: Date.now()
    })
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export const getAll = async (req, res) => {
  try {
    const todoItems = await todoModel.find({}).sort({ 'createdAt': -1 });
    return res.status(200).json(todoItems);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export const toggle = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (todo) {
      const newToDo = await todoModel.findOneAndUpdate({ _id: req.params.id }, { done: !todo.done });
      await newToDo.save();
      return res.status(200).json(newToDo);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export const update = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (todo) {
      const newToDo = await todoModel.findByIdAndUpdate(req.params.id, { content: req.body.content });
      await newToDo.save();
      return res.status(200).json(newToDo);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export const deleteToDo = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (todo) {
      await todoModel.findByIdAndDelete(req.params.id);
    }
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}