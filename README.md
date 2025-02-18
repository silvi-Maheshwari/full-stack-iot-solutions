# Todo List App

## Overview
This is a full-stack Todo List web application built using React.js for the frontend and Node.js with MongoDB for the backend. The app allows users to add, edit, complete, and delete tasks dynamically.

## Features
- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Fetch tasks from a backend API
- State management using React hooks

## Tech Stack
### Frontend:
- React.js
- Vite
- Axios
- CSS (for styling)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose for schema modeling)

## Installation and Setup
### Prerequisites:
Ensure you have the following installed on your system:
- Node.js (v14+ recommended)
- MongoDB

### Steps to Run the Project
#### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/todo-list.git
cd todo-list
```

#### 2. Install Dependencies
```sh
npm install
```

#### 3. Start the Backend Server
Go to the `server` directory and run:
```sh
cd server
npm install
npm start
```

#### 4. Start the Frontend
Go to the root directory and run:
```sh
npm run dev
```

### API Endpoints
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | `/tasks`     | Fetch all tasks      |
| POST   | `/tasks`     | Add a new task       |
| PUT    | `/tasks/:id` | Update a task        |
| DELETE | `/tasks/:id` | Delete a task        |

## Project Structure
```
/todo-list
 ├── /server (Backend)
 ├── /client (Frontend)
 ├── /components
 │   ├── TodoForm.jsx
 │   ├── TodoList.jsx
 ├── /api
 │   ├── api.js
 ├── App.jsx
 ├── index.jsx
 ├── README.md
```

## Usage
- Open the app in the browser.
- Add a new task using the input field.
- Click on a task to mark it as completed.
- Edit or delete tasks using respective buttons.
- Refreshing the page will retain the tasks as they are stored in MongoDB.


