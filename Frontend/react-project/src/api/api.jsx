import axios from "axios";

const API_URL = "http://localhost:3030/tasks"; // Change when deploying

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Ensure the response includes the correct data
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (title) => {
  try {
    const response = await axios.post(API_URL, { title });
    return response.data;  // Ensure the response returns the new task
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;  // Ensure the response returns the updated task
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
