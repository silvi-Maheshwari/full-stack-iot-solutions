import { useState } from 'react';
import { updateTask, deleteTask } from '../api/api';

const TodoList = ({ tasks, refreshTasks }) => {
  const [editTaskId, setEditTaskId] = useState(null); // Track which task is being edited
  const [editText, setEditText] = useState(""); // Track updated text

  const handleToggle = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    refreshTasks();  // Refresh tasks after toggle
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    refreshTasks();  // Refresh tasks after deletion
  };

  const handleEdit = (task) => {
    setEditTaskId(task._id);
    setEditText(task.title);
  };

  const handleUpdate = async (id) => {
    if (!editText.trim()) return;
    await updateTask(id, { title: editText });
    setEditTaskId(null);
    setEditText("");
    refreshTasks();  // Refresh tasks after update
  };

  return (
    <ul className="todo-list">
      {tasks.length === 0 ? <p>No tasks available</p> : null}
      {tasks.map((task) => (
        <li key={task._id} className={task.completed ? "completed" : ""}>
          {editTaskId === task._id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(task._id)}>✔</button>
              <button onClick={() => setEditTaskId(null)}>✖</button>
            </>
          ) : (
            <>
              <span onClick={() => handleToggle(task._id, task.completed)}>
                {task.title}
              </span>
              <button className="edit-btn" onClick={() => handleEdit(task)}>Edit</button>
              <button  className="delete-btn" onClick={() => handleDelete(task._id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;