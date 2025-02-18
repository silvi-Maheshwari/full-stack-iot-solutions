import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTasks } from './api/api';  // Assuming you have this function to fetch tasks

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks
  const refreshTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    refreshTasks();  // Fetch tasks on initial render
  }, []);

  return (
    <>
      <TodoForm refreshTasks={refreshTasks} />
      <TodoList tasks={tasks} refreshTasks={refreshTasks} />
    </>
  );
}

export default App;