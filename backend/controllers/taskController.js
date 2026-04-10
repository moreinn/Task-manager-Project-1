const taskModel = require('../models/taskModel');

const getTasks = (req, res) => {
  res.json(taskModel.getAllTasks());
};

const addTask = (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  const task = taskModel.createTask(title);
  res.status(201).json(task);
};

const updateTask = (req, res) => {
  const task = taskModel.toggleTask(req.params.id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
};

const removeTask = (req, res) => {
  const success = taskModel.deleteTask(req.params.id);

  if (!success) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json({ message: 'Task deleted' });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  removeTask
};