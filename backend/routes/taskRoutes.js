const express = require('express');
const router = express.Router();

const {
  getTasks,
  addTask,
  updateTask,
  removeTask
} = require('../controllers/taskController');

router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', removeTask);

module.exports = router;