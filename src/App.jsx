
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, {
      id: Date.now(),
      name: task,
      completed: false
    }]);

    setTask("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Complete task
  const completeTask = (id) => {
    setTasks(tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    ));
  };

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => completeTask(item.id)}
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {item.name}
            </span>

            <button onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
