import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

 
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

 
  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post(API_URL, { title });
      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

 
  const toggleTask = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>

      <p>Total Tasks: {tasks.length}</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        tasks.map((task) => (
          <div className="task" key={task.id}>
            <span
              className={task.completed ? "completed" : ""}
              onClick={() => toggleTask(task.id)}
            >
              {task.title}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;