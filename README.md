# Node.js Assignment — Task Manager API

## 📌 Project Overview

This repository contains my Node.js assignment covering Weeks 1–4. It demonstrates the fundamentals of Node.js, command-line arguments, the core HTTP module, Express.js, and REST API design.

The assignment is divided into three practical projects:

- **Part A:** Command-Line Interface (CLI) Tool
- **Part B:** Core Node.js HTTP Server
- **Part C:** Express Task Manager REST API

Parts D and E focus on implementing REST conventions, using appropriate HTTP status codes, documenting API endpoints, and testing the API with Postman.

The Task Manager API stores tasks in an in-memory JavaScript array. No database is used, as required by the assignment.

---

## 📂 Repository Structure

```text
nodejs-assignment/
│
├── README.md
│
├── CLI/
│   └── app.js
│
├── HTTP-Server/
│   └── server.js
│
└── Express-API/
    ├── server.js
    ├── package.json
    └── package-lock.json
```

Each project is kept in a separate folder to make the code organized and easy to understand.

---

## 🛠️ Technologies Used

- **Node.js:** JavaScript runtime used to execute JavaScript outside the browser.
- **Core HTTP Module:** Used to create a basic HTTP server without a framework.
- **Express.js:** Used to build the Task Manager REST API.
- **JavaScript:** Used for application logic and task management.
- **Postman:** Used to send HTTP requests and test API responses.
- **Git and GitHub:** Used for version control and project submission.

---

# Part A — Node.js Command-Line Tool (8 Marks)

## 📖 Description

This project demonstrates how to create a simple command-line tool using Node.js.

The program accepts a task title as a command-line argument and prints the provided title to the terminal.

It uses `process.argv` to access the arguments passed when executing the program.

## ▶️ How to Run

Open a terminal in the project directory and execute:

```bash
node app.js "Learn JavaScript"
```

### Expected Output

```text
Learn JavaScript
```

Another example:

```bash
node app.js "Complete Node.js Assignment"
```

Expected output:

```text
Complete Node.js Assignment
```

## 🎯 Concepts Covered

- Running JavaScript with Node.js
- Command-line arguments
- Using `process.argv`
- Displaying output in the terminal

---

# Part B — Core Node.js HTTP Server (10 Marks)

## 📖 Description

This project demonstrates how to create an HTTP server using Node.js's built-in `http` module.

The server manually checks the requested URL and sends the appropriate response. It does not use Express.js.

The server includes three routes and a fallback response for unknown routes.

## 🌐 Available Routes

| Route             | Method | Description                                |
| ----------------- | ------ | ------------------------------------------ |
| `/`               | GET    | Returns the home page response.            |
| `/about`          | GET    | Returns information about the application. |
| `/contact`        | GET    | Returns the contact response.              |
| Any unknown route | GET    | Returns a 404 response.                    |

## ▶️ How to Run

Open a terminal in the HTTP Server directory and execute:

```bash
node server.js
```

Once the server starts, open a browser or Postman and visit:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
```

The server listens on the port configured in `server.js`.

**Note:** If your code uses a port other than `3000`, use the port specified in your code.

## 🎯 Concepts Covered

- Node.js core `http` module
- Creating an HTTP server
- Handling multiple routes manually
- Sending HTTP responses
- Handling unknown routes
- Using HTTP status codes

---

# Part C — Express Task Manager REST API (20 Marks)

## 📖 Description

This project implements a RESTful Task Manager API using Express.js.

The API allows clients to retrieve, create, update, and delete tasks through HTTP requests.

Tasks are stored in an in-memory JavaScript array, so no database is required.

Each task contains the following properties:

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false
}
```

### Task Properties

| Property    | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| `id`        | Number  | Unique identifier for the task.          |
| `title`     | String  | Name or description of the task.         |
| `completed` | Boolean | Indicates whether the task is completed. |

The application starts with two sample tasks.

## ⚙️ Installation

Make sure Node.js and npm are installed on your computer.

Navigate to the Express API directory:

```bash
cd Express-API
```

Install the project dependencies:

```bash
npm install
```

## ▶️ Start the Server

Run:

```bash
node server.js
```

The server starts at:

```text
http://localhost:3000
```

Keep the terminal running while testing the API.

---

## 🔗 API Endpoints

All API endpoints use the following base URL:

```text
http://localhost:3000/api/v1/tasks
```

| HTTP Method | Endpoint            | Description               | Success Status |
| ----------- | ------------------- | ------------------------- | -------------- |
| GET         | `/api/v1/tasks`     | Retrieves all tasks.      | 200 OK         |
| POST        | `/api/v1/tasks`     | Creates a new task.       | 201 Created    |
| PUT         | `/api/v1/tasks/:id` | Updates an existing task. | 200 OK         |
| DELETE      | `/api/v1/tasks/:id` | Deletes an existing task. | 200 OK         |

The `:id` segment is a route parameter that identifies a specific task.

### 1. GET — Retrieve All Tasks

**Request:**

```http
GET http://localhost:3000/api/v1/tasks
```

This endpoint returns all tasks stored in the array.

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn Node.js",
      "completed": false
    },
    {
      "id": 2,
      "title": "Build Express API",
      "completed": false
    }
  ]
}
```

**Status Code:** `200 OK`

### 2. POST — Create a New Task

**Request:**

```http
POST http://localhost:3000/api/v1/tasks
```

Set the request body to JSON.

**Request Body:**

```json
{
  "title": "Learn REST API Design"
}
```

The API validates the task title, generates a new ID, and adds the task to the array.

**Example Response:**

```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "Learn REST API Design",
    "completed": false
  }
}
```

**Status Code:** `201 Created`

If the title is missing, the API returns `400 Bad Request`.

### 3. PUT — Update an Existing Task

**Request:**

```http
PUT http://localhost:3000/api/v1/tasks/1
```

The `1` in the URL is the task ID.

**Request Body:**

```json
{
  "title": "Learn Express.js",
  "completed": true
}
```

The API updates the specified task. The title and completion status can be updated.

**Example Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express.js",
    "completed": true
  }
}
```

**Status Code:** `200 OK`

If the task does not exist, the API returns `404 Not Found`.

Invalid title or completion-status values return `400 Bad Request`.

### 4. DELETE — Delete an Existing Task

**Request:**

```http
DELETE http://localhost:3000/api/v1/tasks/1
```

The API searches for the task using its ID and removes it from the array.

**Example Response:**

```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {
    "id": 1,
    "title": "Learn Node.js",
    "completed": false
  }
}
```

**Status Code:** `200 OK`

If the requested task does not exist, the API returns `404 Not Found`.

---

# Part D — REST Conventions and HTTP Status Codes (7 Marks)

## 📖 RESTful Design

The API follows basic REST principles by using a resource-oriented URL and HTTP methods to perform operations on tasks.

### Resource Naming

The resource is named `tasks`:

```text
/api/v1/tasks
```

The URL uses a plural resource name, and the API version is included as `v1`.

### HTTP Methods

- **GET:** Retrieves resources.
- **POST:** Creates a resource.
- **PUT:** Updates an existing resource.
- **DELETE:** Removes a resource.

Route parameters, such as `:id`, identify individual tasks when updating or deleting them.

### HTTP Status Codes

| Status Code | Name        | When It Is Used                                                       |
| ----------- | ----------- | --------------------------------------------------------------------- |
| 200         | OK          | A request succeeds, such as retrieving, updating, or deleting a task. |
| 201         | Created     | A new task is created successfully.                                   |
| 400         | Bad Request | Required data is missing or the supplied values are invalid.          |
| 404         | Not Found   | The requested task does not exist, or a route is not available.       |

### JSON Responses

The Express API uses JSON for request bodies and responses.

The `express.json()` middleware allows the server to read incoming JSON request bodies.

---

# Part E — README and API Documentation (5 Marks)

This README documents the project structure, installation steps, execution commands, available endpoints, example request bodies, expected responses, and HTTP status codes.

The API endpoint summary is:

| Method | Endpoint            | Purpose            |
| ------ | ------------------- | ------------------ |
| GET    | `/api/v1/tasks`     | Retrieve all tasks |
| POST   | `/api/v1/tasks`     | Create a task      |
| PUT    | `/api/v1/tasks/:id` | Update a task      |
| DELETE | `/api/v1/tasks/:id` | Delete a task      |

---

# 🧪 Testing with Postman

The Express API can be tested using Postman.

Make sure the server is running before sending requests.

| Test                          | Method | URL                                        | Expected Result |
| ----------------------------- | ------ | ------------------------------------------ | --------------- |
| Retrieve tasks                | GET    | `http://localhost:3000/api/v1/tasks`       | 200 OK          |
| Create a task                 | POST   | `http://localhost:3000/api/v1/tasks`       | 201 Created     |
| Update a task                 | PUT    | `http://localhost:3000/api/v1/tasks/1`     | 200 OK          |
| Delete a task                 | DELETE | `http://localhost:3000/api/v1/tasks/1`     | 200 OK          |
| Create a task without a title | POST   | `http://localhost:3000/api/v1/tasks`       | 400 Bad Request |
| Update a nonexistent task     | PUT    | `http://localhost:3000/api/v1/tasks/99999` | 404 Not Found   |

For POST and PUT requests, select **Body → raw → JSON** in Postman and provide the appropriate JSON request body.

The assignment submission includes the GitHub repository link and Postman screenshots demonstrating the API requests and responses.

---

## ⚠️ Important Note

The Task Manager API stores tasks in an in-memory array. Any tasks created, updated, or deleted during execution are not permanently saved. Restarting the server resets the data to the initial sample tasks.

No database is used, as required by the assignment.

---

## 👩‍💻 Conclusion

This assignment demonstrates practical use of Node.js, command-line arguments, the core HTTP module, Express.js, RESTful API design, route parameters, JSON communication, HTTP status codes, and API testing with Postman.
