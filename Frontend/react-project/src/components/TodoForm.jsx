import { useState } from 'react';
import { addTask } from '../api/api';

const TodoForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Task title cannot be empty");

    try {
      await addTask(title); 
    // Ensure task is added first
      refreshTasks();  // Refresh tasks after successful addition
      setTitle("");  // Clear the input field
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 style={{color:"white"}}>ToDo List </h1>
      </div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
