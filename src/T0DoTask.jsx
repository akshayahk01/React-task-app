import React, { useState } from 'react';
import './index.css';

export default function ToDoTask() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function AddTask() {
    if (!input.trim()) return alert('Please enter a task');
    const newTask = { text: input, id: Date.now() };
    setTasks([...tasks, newTask]);
    setInput('');
  }

  function RemoveTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  function UpTask(index) {
    if (index === 0) return;
    const updated = [...tasks];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setTasks(updated);
  }

  function DownTask(index) {
    if (index === tasks.length - 1) return;
    const updated = [...tasks];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setTasks(updated);
  }

  return (
    <div className="task-container">
      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={AddTask}>Add Task</button>
      </div>

      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-item animate">
            {task.text}
            <div className="task-buttons">
              <button onClick={() => RemoveTask(index)}>Remove</button>
              <button onClick={() => UpTask(index)}>⬆</button>
              <button onClick={() => DownTask(index)}>⬇</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
