let tasks = [];

const getAllTasks = () => tasks;

const createTask = (title) => {
  const newTask = {
    id: Date.now().toString(),
    title,
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  return newTask;
};

const toggleTask = (id) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  task.completed = !task.completed;
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  createTask,
  toggleTask,
  deleteTask
};