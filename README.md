# Full Stack Task Manager

A simple full stack Task Manager application built using React (frontend) and Node.js with Express (backend), following the MVC architecture.

---

## Features

* Create a new task
* View all tasks
* Mark tasks as completed
* Delete tasks
* RESTful API integration
* Clean and modular backend structure

---

## Tech Stack

Frontend:

* React (Vite)
* Axios
* CSS

Backend:

* Node.js
* Express.js
* MVC Architecture
* dotenv

---

## Project Structure

```text
task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd task-manager
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
```

Run backend:

```
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint   | Description            |
| ------ | ---------- | ---------------------- |
| GET    | /tasks     | Get all tasks          |
| POST   | /tasks     | Create a new task      |
| PATCH  | /tasks/:id | Toggle task completion |
| DELETE | /tasks/:id | Delete a task          |

---

## Notes

* Data is stored in-memory (no database used)
* Designed to be simple and completed within a short time frame
* Focus on clean code, structure, and functionality

---

## Future Improvements

* Add database support (MongoDB or PostgreSQL)
* Edit task functionality
* Filter tasks (completed/incomplete)
* Add authentication
* Improve UI/UX

---

## Author

Your Name
